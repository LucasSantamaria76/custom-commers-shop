'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

export const SignUp = async (data) =>
	await supabase.auth.signUp({
		...data,
		options: {
			emailRedirectTo: `${location.origin}/auth/callback`,
		},
	});

export const SignIn = async (data) => await supabase.auth.signInWithPassword({ ...data });

export const SignOut = async () => await supabase.auth.signOut();
