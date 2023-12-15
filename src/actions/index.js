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

export async function getDbTableByColumn(table, col, val, single = false) {
	const supabaseServer = createServerComponentClient({ cookies });
	try {
		const { data, error } = await supabaseServer
			.from(table)
			.select(selectColumns[table])
			.eq(col, val);

		if (error)
			return {
				data: null,
				error,
			};

		return {
			data: single ? data[0] : data,
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
		const { data: profile } = await getDbTableByColumn(PROFILES, 'id', session?.user?.id, true);
		if (profile) session.profile = profile;
	}

	return session;
}
