import { c as createComponent } from './astro-component_DFzFZJkT.mjs';
import 'piccolore';
import { I as renderTemplate, u as maybeRenderHead } from './sequence_C_6OXDIK.mjs';
import { r as renderComponent } from './entrypoint_Dr4Us5M9.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_DiIrR9ww.mjs';

const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign Up — RoomIQ", "data-astro-cid-sgjovbj7": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="auth-page" data-astro-cid-sgjovbj7> <div class="auth-card" data-astro-cid-sgjovbj7> <div class="auth-header" data-astro-cid-sgjovbj7> <a href="/" class="auth-logo" data-astro-cid-sgjovbj7> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" data-astro-cid-sgjovbj7> <rect width="24" height="24" rx="6" fill="#171717" data-astro-cid-sgjovbj7></rect> <path d="M7 8h10M7 12h6M7 16h8" stroke="#fff" stroke-width="1.5" stroke-linecap="round" data-astro-cid-sgjovbj7></path> </svg> <span data-astro-cid-sgjovbj7>RoomIQ</span> </a> <h1 class="auth-title" data-astro-cid-sgjovbj7>Create your account</h1> <p class="auth-subtitle" data-astro-cid-sgjovbj7>Start designing smarter spaces</p> </div> <form id="signup-form" class="auth-form" data-astro-cid-sgjovbj7> <div class="form-group" data-astro-cid-sgjovbj7> <label for="email" class="form-label" data-astro-cid-sgjovbj7>Email</label> <input type="email" id="email" name="email" required class="form-input" placeholder="you@example.com" data-astro-cid-sgjovbj7> </div> <div class="form-group" data-astro-cid-sgjovbj7> <label for="password" class="form-label" data-astro-cid-sgjovbj7>Password</label> <input type="password" id="password" name="password" required minlength="6" class="form-input" placeholder="••••••••" data-astro-cid-sgjovbj7> </div> <div class="form-group" data-astro-cid-sgjovbj7> <label for="confirm-password" class="form-label" data-astro-cid-sgjovbj7>Confirm Password</label> <input type="password" id="confirm-password" name="confirm-password" required minlength="6" class="form-input" placeholder="••••••••" data-astro-cid-sgjovbj7> </div> <div id="error-message" class="form-error" style="display: none;" data-astro-cid-sgjovbj7></div> <button type="submit" class="btn-primary" id="signup-btn" data-astro-cid-sgjovbj7>Sign Up</button> </form> <div class="auth-divider" data-astro-cid-sgjovbj7> <span data-astro-cid-sgjovbj7>or</span> </div> <a href="/api/auth/google" class="btn-google" data-astro-cid-sgjovbj7> <svg width="18" height="18" viewBox="0 0 24 24" data-astro-cid-sgjovbj7> <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" data-astro-cid-sgjovbj7></path> <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" data-astro-cid-sgjovbj7></path> <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" data-astro-cid-sgjovbj7></path> <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" data-astro-cid-sgjovbj7></path> </svg>
Continue with Google
</a> <p class="auth-footer" data-astro-cid-sgjovbj7>
Already have an account? <a href="/login" data-astro-cid-sgjovbj7>Log in</a> </p> </div> </div> ` })}  ${renderScript($$result, "D:/web development/AI projects/AI Interior Designer/src/pages/signup.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/web development/AI projects/AI Interior Designer/src/pages/signup.astro", void 0);

const $$file = "D:/web development/AI projects/AI Interior Designer/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
