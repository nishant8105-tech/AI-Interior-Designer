import { s as supabase } from './supabase_B9N_dtI2.mjs';

const GET = async ({ redirect }) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: new URL("/api/auth/callback", "http://localhost:4321").toString()
    }
  });
  if (error) {
    return redirect("/login?error=oauth_failed");
  }
  return redirect(data.url);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
