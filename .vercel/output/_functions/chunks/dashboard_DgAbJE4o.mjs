import { c as createComponent } from './astro-component_DFzFZJkT.mjs';
import 'piccolore';
import { I as renderTemplate, u as maybeRenderHead } from './sequence_C_6OXDIK.mjs';
import { r as renderComponent } from './entrypoint_Dr4Us5M9.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_DiIrR9ww.mjs';
import { $ as $$Nav } from './Nav_p2I9j94b.mjs';

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard — RoomIQ", "data-astro-cid-3nssi2tu": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, { "showAuth": false, "data-astro-cid-3nssi2tu": true })} ${maybeRenderHead()}<main class="dashboard-page" data-astro-cid-3nssi2tu> <div class="dashboard-container" data-astro-cid-3nssi2tu> <div class="dashboard-header" data-astro-cid-3nssi2tu> <div data-astro-cid-3nssi2tu> <h1 class="dashboard-title" data-astro-cid-3nssi2tu>Your Projects</h1> <p class="dashboard-subtitle" data-astro-cid-3nssi2tu>View and manage your room analyses</p> </div> <a href="/design" class="btn-primary" data-astro-cid-3nssi2tu> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" data-astro-cid-3nssi2tu> <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-3nssi2tu></path> </svg>
New Project
</a> </div> <div class="projects-grid" id="projects-grid" data-astro-cid-3nssi2tu> <div class="loading-state" id="loading-state" data-astro-cid-3nssi2tu> <div class="loader" data-astro-cid-3nssi2tu></div> <p data-astro-cid-3nssi2tu>Loading projects...</p> </div> <div class="empty-state" id="empty-state" style="display: none;" data-astro-cid-3nssi2tu> <div class="empty-icon" data-astro-cid-3nssi2tu> <svg width="48" height="48" viewBox="0 0 24 24" fill="none" data-astro-cid-3nssi2tu> <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5" data-astro-cid-3nssi2tu></rect> <path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-astro-cid-3nssi2tu></path> </svg> </div> <h3 data-astro-cid-3nssi2tu>No projects yet</h3> <p data-astro-cid-3nssi2tu>Upload your first room photo to get started</p> <a href="/design" class="btn-primary" data-astro-cid-3nssi2tu>Start Designing</a> </div> <div class="projects-list" id="projects-list" style="display: none;" data-astro-cid-3nssi2tu></div> </div> </div> </main> ` })}  ${renderScript($$result, "D:/web development/AI projects/AI Interior Designer/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/web development/AI projects/AI Interior Designer/src/pages/dashboard.astro", void 0);

const $$file = "D:/web development/AI projects/AI Interior Designer/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
