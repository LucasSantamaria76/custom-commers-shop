'use server';

import { selectColumns } from '@/constants';
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
		const { data } = await getDbTableById('profiles', session?.user?.id);
		data && (session.user.profile = data);
	}

	return session;
}

/* export async function toggleFavoriteDB(formData) {
	const { isFavorite, product_id, user_id } = Object.fromEntries(formData.entries());
	const supabase = createServerComponentClient({ cookies });

	const { error } = await (!!isFavorite
		? supabase.from('favorites').delete().match({ product_id, user_id })
		: supabase.from('favorites').insert([{ product_id, user_id }]));

	
	return true;
} */
