import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createSelectors } from './create-selectors';
import { supabaseClient } from '@/lib/supabase';
import { FAVORITES, ITEMS_CART } from '@/constants';

const initialState = {
	id: null,
	full_name: null,
	email: null,
	avatar_url: null,
	role: null,
	updated_at: null,
	created_at: null,
	favorites: [],
	cart: {},
	itemsCart: {},
};

const storeBase = (set, get) => ({
	...initialState,
	setUser: (user) => {
		if (user) {
			set(() => ({ ...user }));
		} else set({ ...initialState });
	},
	toggleFavorite: async (product_id, user_id) => {
		if (get().id) {
			const isFavorite = get().favorites.includes(product_id);

			const { error } = await (isFavorite
				? supabaseClient.from(FAVORITES).delete().match({ product_id, user_id })
				: supabaseClient.from(FAVORITES).insert([{ product_id, user_id }]));
			if (!error) {
				const newFavorites = !isFavorite
					? [...get().favorites, product_id]
					: get().favorites.filter((el) => el !== product_id);
				set({
					favorites: newFavorites,
				});
			}
		}
	},
	addToCart: async ({ id, price, discount }) => {
		try {
			set((state) => {
				state.cart.total_cart += price - price * (discount / 100);
			});
			if (Object.keys(get().itemsCart).includes(id)) {
				set((state) => {
					state.itemsCart[id] += 1;
				});
				const { data, error } = await supabaseClient
					.from(ITEMS_CART)
					.update([{ quantity: get().itemsCart[id] }])
					.eq('product_id', id);
			} else {
				set((state) => {
					state.itemsCart[id] = 1;
				});
				const { data, error } = await supabaseClient
					.from(ITEMS_CART)
					.insert([{ product_id: id, cart_id: get().cart?.id }]);

				error && console.log(error.message);
			}
		} catch (error) {
			console.log(error);
		}
	},
});

const useUserStoreBase = create(devtools(immer(storeBase)));

export const useUserStore = createSelectors(useUserStoreBase);
