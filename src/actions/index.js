'use server';

import { CARTS, FAVORITES, PROFILES, USER_ID, selectColumns } from '@/constants';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function getDbTable(table) {
	const supabaseServer = createServerComponentClient({ cookies });
	try {
		const { data, error } = await supabaseServer
			.from(table)
			.select(selectColumns[table])
			.order('name');

		if (error)
			return {
				data: null,
				error,
			};

		return {
			data,
			error: null,
		};
	} catch (error) {
		return {
			data: null,
			error,
		};
	}
}

export async function getDbTableById(table, id) {
	const supabaseServer = createServerComponentClient({ cookies });
	try {
		const { data, error } = await supabaseServer
			.from(table)
			.select(selectColumns[table])
			.eq('id', id)
			.single();

		if (error)
			return {
				data: null,
				error,
			};

		return {
			data,
			error: null,
		};
	} catch (error) {
		return {
			data: null,
			error,
		};
	}
}

export async function getSession() {
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (session) {
		const { data: user } = await getDbTableById(PROFILES, session?.user?.id);
		if (user) {
			const {
				carts: { items_cart, ...cart },
				favorites,
				...profile
			} = user;

			session.user.profile = profile;

			session.user.profile.cart = cart;

			session.user.profile.itemsCart = items_cart.reduce((acc, val) => {
				!acc[val.product_id] && (acc[val.product_id] = val.quantity);
				return acc;
			}, {});

			session.user.profile.favorites = favorites.map((el) => el.product_id);
		}
	}

	return session;
}
