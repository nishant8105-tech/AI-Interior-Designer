import { c as createComponent } from './astro-component_DFzFZJkT.mjs';
import 'piccolore';
import { u as maybeRenderHead, _ as addAttribute, I as renderTemplate } from './sequence_C_6OXDIK.mjs';
import 'clsx';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerLinks = {
    product: [
      { label: "How it Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Examples", href: "#examples" },
      { label: "Pricing", href: "#pricing" }
    ],
    rooms: [
      { label: "Bedroom Designer", href: "/ai-bedroom-designer" },
      { label: "Living Room Designer", href: "/ai-living-room-designer" },
      { label: "Office Designer", href: "/ai-office-designer" },
      { label: "Kitchen Designer", href: "/ai-kitchen-designer" }
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="footer-grid" data-astro-cid-sz7xmlte> <div class="footer-brand" data-astro-cid-sz7xmlte> <a href="/" class="footer-logo" data-astro-cid-sz7xmlte> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte> <rect width="24" height="24" rx="6" fill="#171717" data-astro-cid-sz7xmlte></rect> <path d="M7 8h10M7 12h6M7 16h8" stroke="#fff" stroke-width="1.5" stroke-linecap="round" data-astro-cid-sz7xmlte></path> </svg> <span data-astro-cid-sz7xmlte>RoomIQ</span> </a> <p class="footer-tagline" data-astro-cid-sz7xmlte>Design smarter spaces with AI.</p> </div> <div class="footer-column" data-astro-cid-sz7xmlte> <span class="footer-heading" data-astro-cid-sz7xmlte>Product</span> ${footerLinks.product.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="footer-link" data-astro-cid-sz7xmlte>${link.label}</a>`)} </div> <div class="footer-column" data-astro-cid-sz7xmlte> <span class="footer-heading" data-astro-cid-sz7xmlte>Rooms</span> ${footerLinks.rooms.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="footer-link" data-astro-cid-sz7xmlte>${link.label}</a>`)} </div> <div class="footer-column" data-astro-cid-sz7xmlte> <span class="footer-heading" data-astro-cid-sz7xmlte>Company</span> ${footerLinks.company.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="footer-link" data-astro-cid-sz7xmlte>${link.label}</a>`)} </div> <div class="footer-column" data-astro-cid-sz7xmlte> <span class="footer-heading" data-astro-cid-sz7xmlte>Legal</span> ${footerLinks.legal.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="footer-link" data-astro-cid-sz7xmlte>${link.label}</a>`)} </div> </div> <div class="footer-bottom" data-astro-cid-sz7xmlte> <span class="footer-copyright" data-astro-cid-sz7xmlte>© 2026 RoomIQ. All rights reserved.</span> </div> </div> </footer>`;
}, "D:/web development/AI projects/AI Interior Designer/src/components/Footer.astro", void 0);

export { $$Footer as $ };
