'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

export const SignUp = async ({ email, password, full_name }) => {
	return await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				full_name,
				role: 'USER',
			},
			emailRedirectTo: `${location.origin}/auth/callback`,
		},
	});
};

export const SignIn = async ({ email, password }) =>
	await supabase.auth.signInWithPassword({ email, password });

export const SignOut = async () => await supabase.auth.signOut();
