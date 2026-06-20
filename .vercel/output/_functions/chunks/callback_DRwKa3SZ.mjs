import { s as supabase } from './supabase_B9N_dtI2.mjs';

const GET = async ({ url, cookies, redirect }) => {
  const code = url.searchParams.get("code");
  if (!code) {
    return redirect("/login?error=no_code");
  }
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    return redirect("/login?error=exchange_failed");
  }
  if (data.session) {
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
  return redirect("/design");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
