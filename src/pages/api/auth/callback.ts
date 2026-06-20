import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const code = url.searchParams.get('code');

  if (!code) {
    return redirect('/login?error=no_code');
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return redirect('/login?error=exchange_failed');
  }

  // Set cookies for SSR
  if (data.session) {
    cookies.set('sb-access-token', data.session.access_token, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: data.session.expires_in,
    });
    cookies.set('sb-refresh-token', data.session.refresh_token, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30,
    });
  }

  return redirect('/design');
};
