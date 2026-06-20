import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const GET: APIRoute = async ({ redirect }) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: new URL('/api/auth/callback', import.meta.env.SITE || 'http://localhost:4321').toString(),
    },
  });

  if (error) {
    return redirect('/login?error=oauth_failed');
  }

  return redirect(data.url);
};
