import { c as createComponent } from './astro-component_DFzFZJkT.mjs';
import 'piccolore';
import { I as renderTemplate } from './sequence_C_6OXDIK.mjs';
import { r as renderComponent } from './entrypoint_Dr4Us5M9.mjs';
import { $ as $$RoomLanding } from './RoomLanding_B8yKbkaU.mjs';

const $$AiKitchenDesigner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "RoomLanding", $$RoomLanding, { "roomType": "kitchen", "title": "AI Kitchen Designer — Transform Your Kitchen with AI", "description": "Redesign your kitchen with AI-powered analysis. Get expert scores for layout, workflow, storage, and style with complete renovation recommendations.", "features": [
    "Kitchen workflow triangle analysis",
    "Storage and cabinet optimization",
    "Lighting assessment for food preparation",
    "Counter space and layout scoring",
    "Appliance placement recommendations",
    "Budget-friendly upgrade suggestions",
    "Complete kitchen redesign concepts"
  ], "benefits": [
    "Optimize your kitchen workflow with AI analysis",
    "Maximize storage with smart organization ideas",
    "Get professional kitchen design advice instantly",
    "Plan your kitchen renovation with realistic budgets",
    "Choose from modern, traditional, and contemporary styles",
    "Get a complete shopping and renovation roadmap"
  ] })}`;
}, "D:/web development/AI projects/AI Interior Designer/src/pages/ai-kitchen-designer.astro", void 0);

const $$file = "D:/web development/AI projects/AI Interior Designer/src/pages/ai-kitchen-designer.astro";
const $$url = "/ai-kitchen-designer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AiKitchenDesigner,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
