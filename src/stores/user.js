import { create } from 'zustand';
import { createSelectors } from './create-selectors';
import { supabaseClient } from '@/lib/supabase';

const initialState = {
	id: null,
	full_name: null,
	email: null,
	avatar_url: null,
	role: null,
	updated_at: null,
	created_at: null,
	favorites: [],
	cart: [],
};

const useUserStoreBase = create((set, get) => ({
	...initialState,
	setUser: (user) => {
		if (user) {
			const { id, full_name, email, avatar_url, role, updated_at, created_at, favorites } = user;
			set(() => ({
				id,
				full_name,
				email,
				avatar_url,
				role,
				updated_at,
				created_at,
				favorites: favorites.map((el) => el.product_id),
			}));
		} else set({ ...initialState });
	},
	toggleFavorite: async (product_id, user_id) => {
		if (get().id) {
			const isFavorite = get().favorites.includes(product_id);

			const { error } = await (isFavorite
				? supabaseClient.from('favorites').delete().match({ product_id, user_id })
				: supabaseClient.from('favorites').insert([{ product_id, user_id }]));
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
}));

export const useUserStore = createSelectors(useUserStoreBase);
