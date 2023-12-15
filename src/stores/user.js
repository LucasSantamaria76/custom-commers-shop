import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createSelectors } from './create-selectors';
import { supabaseClient } from '@/lib/supabase';
import { CART_ITEMS, FAVORITES, PROFILES } from '@/constants';

const initialState = {
	id: null,
	full_name: null,
	email: null,
	avatar_url: null,
	role: null,
	updated_at: null,
	created_at: null,
	fav: [],
	carts: {},
	cart_items: [],
};

const storeBase = (set, get) => ({
	...initialState,
	setUser: (user) => {
		if (user) {
			set(() => ({ ...user }));
		} else set({ ...initialState });
	},
	toggleFavorite: async (product_id) => {
		const isFavorite = get().fav.includes(product_id);

		set((state) => {
			!isFavorite
				? (state.fav = [...state.fav, product_id])
				: (state.fav = state.fav.filter((el) => el !== product_id));
		});

		const { data, error } = await supabaseClient
			.from(PROFILES)
			.update({ fav: get().fav })
			.eq('id', get().id);
	},
	/**
	 * * Cree un TRIGGER en la DB que cada vez que se INSERTA, ACTUALIZA o BORRA un producto se actualiza el total del carrito
	 */
	addToCart: async ({ id, ...product }) => {
		/**
		 * * Actualizo la store de forma optimista
		 */
		try {
			const oldCartItems = get().cart_items || [];
			const oldCartTotal = get().carts.total_cart;
			const inCart = oldCartItems.some((el) => el.product_id === id);
			set((state) => {
				state.carts.total_cart +=
					product.sale_price - product.sale_price * (product.discount / 100);
				inCart
					? (state.cart_items[oldCartItems.findIndex((el) => el.product_id === id)].quantity += 1)
					: (state.cart_items = [
							...oldCartItems,
							{ product_id: id, quantity: 1, products: product },
					  ]);
			});

			/**
			 * * Actualizo la DB
			 */
			const { data, error } = inCart
				? await supabaseClient
						.from(CART_ITEMS)
						.update([
							{
								quantity:
									get().cart_items[oldCartItems.findIndex((el) => el.product_id === id)].quantity,
							},
						])
						.eq('product_id', id)
				: await supabaseClient.from(CART_ITEMS).insert([{ product_id: id, user_id: get().id }]);

			if (error) {
				/**
				 * ! Si hay un error en la DB vuelvo la store como estaba
				 */
				set((state) => {
					state.carts.total_cart = oldCartTotal;
					state.cart_items = oldCartItems;
				});
				throw new Error(error);
			}
		} catch (error) {
			console.log(error.message ?? error);
		}
	},
	removeProductToCart: async (id, price, discount, quantity) => {
		let errorDB; /* 
		if (get().itemsCart[id] > quantity) {
			set((state) => {
				state.cart.total_cart -= (price - price * (discount / 100)) * quantity;
			});
			set((state) => {
				state.itemsCart[id] -= quantity;
			});
			const { data, error } = await supabaseClient
				.from(ITEMS_CART)
				.update([{ quantity: get().itemsCart[id] }])
				.eq('product_id', id);

			error && (errorDB = error);
		} */
	},
});

const useUserStoreBase = create(devtools(immer(storeBase)));

export const useUserStore = createSelectors(useUserStoreBase);
