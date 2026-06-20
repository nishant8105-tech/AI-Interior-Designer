import { defineMiddleware } from 'astro:middleware';
import { supabase } from './lib/supabase';

const protectedRoutes = ['/design', '/dashboard'];
const authRoutes = ['/login', '/signup'];

export const onRequest = defineMiddleware(async ({ url, cookies, redirect }, next) => {
  const accessToken = cookies.get('sb-access-token')?.value;
  const refreshToken = cookies.get('sb-refresh-token')?.value;

  let isAuthenticated = false;

  if (accessToken && refreshToken) {
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    if (!error && data.session) {
      isAuthenticated = true;

      // Refresh cookies if session was refreshed
      if (data.session.access_token !== accessToken) {
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
    } else {
      // Invalid tokens, clear them
      cookies.delete('sb-access-token', { path: '/' });
      cookies.delete('sb-refresh-token', { path: '/' });
    }
  }

  const isProtectedRoute = protectedRoutes.some((route) => url.pathname.startsWith(route));
  const isAuthRoute = authRoutes.some((route) => url.pathname.startsWith(route));

  if (isProtectedRoute && !isAuthenticated) {
    return redirect('/login');
  }

  if (isAuthRoute && isAuthenticated) {
    return redirect('/design');
  }

  // Add user state to locals for use in pages
  const response = await next();
  return response;
});
