import { c as createComponent } from './astro-component_DFzFZJkT.mjs';
import 'piccolore';
import { I as renderTemplate } from './sequence_C_6OXDIK.mjs';
import { r as renderComponent } from './entrypoint_Dr4Us5M9.mjs';
import { $ as $$RoomLanding } from './RoomLanding_B8yKbkaU.mjs';

const $$AiLivingRoomDesigner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "RoomLanding", $$RoomLanding, { "roomType": "living_room", "title": "AI Living Room Designer — Redesign Your Living Room with AI", "description": "Analyze and redesign your living room with AI. Get professional scores for layout, lighting, furniture arrangement, and style with actionable improvement plans.", "features": [
    "Comprehensive living room design analysis",
    "Furniture arrangement optimization",
    "Traffic flow and space efficiency scoring",
    "Color palette and style recommendations",
    "Multi-budget scenario planning",
    "Shopping list with prioritized items",
    "Before/after design comparison"
  ], "benefits": [
    "Transform your living room without an interior designer",
    "Optimize furniture placement for better flow",
    "Get budget estimates for different renovation levels",
    "Discover style options you might not have considered",
    "Create a complete shopping plan with price estimates",
    "Share your design report with family or contractors"
  ] })}`;
}, "D:/web development/AI projects/AI Interior Designer/src/pages/ai-living-room-designer.astro", void 0);

const $$file = "D:/web development/AI projects/AI Interior Designer/src/pages/ai-living-room-designer.astro";
const $$url = "/ai-living-room-designer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AiLivingRoomDesigner,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
