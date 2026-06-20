import { d as defineMiddleware, s as sequence } from './chunks/sequence_C_6OXDIK.mjs';
import 'piccolore';
import 'clsx';
import { s as supabase } from './chunks/supabase_B9N_dtI2.mjs';

const protectedRoutes = ["/design", "/dashboard"];
const authRoutes = ["/login", "/signup"];
const onRequest$1 = defineMiddleware(async ({ url, cookies, redirect }, next) => {
  const accessToken = cookies.get("sb-access-token")?.value;
  const refreshToken = cookies.get("sb-refresh-token")?.value;
  let isAuthenticated = false;
  if (accessToken && refreshToken) {
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken
    });
    if (!error && data.session) {
      isAuthenticated = true;
      if (data.session.access_token !== accessToken) {
        cookies.set("sb-access-token", data.session.access_token, {
          path: "/",
          httpOnly: true,
          secure: true,
          sameSite: "lax",
          maxAge: data.session.expires_in
        });
        cookies.set("sb-refresh-token", data.session.refresh_token, {
          path: "/",
          httpOnly: true,
          secure: true,
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 30
        });
      }
    } else {
      cookies.delete("sb-access-token", { path: "/" });
      cookies.delete("sb-refresh-token", { path: "/" });
    }
  }
  const isProtectedRoute = protectedRoutes.some((route) => url.pathname.startsWith(route));
  const isAuthRoute = authRoutes.some((route) => url.pathname.startsWith(route));
  if (isProtectedRoute && !isAuthenticated) {
    return redirect("/login");
  }
  if (isAuthRoute && isAuthenticated) {
    return redirect("/design");
  }
  const response = await next();
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
