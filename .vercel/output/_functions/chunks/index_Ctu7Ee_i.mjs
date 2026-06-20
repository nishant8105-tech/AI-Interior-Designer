import { c as createComponent } from './astro-component_DFzFZJkT.mjs';
import 'piccolore';
import { u as maybeRenderHead, I as renderTemplate, bi as unescapeHTML } from './sequence_C_6OXDIK.mjs';
import { r as renderComponent } from './entrypoint_Dr4Us5M9.mjs';
import { $ as $$Layout } from './Layout_DiIrR9ww.mjs';
import { $ as $$Nav } from './Nav_p2I9j94b.mjs';
import 'clsx';
import { $ as $$Footer } from './Footer_o4dDsujy.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero-band" data-astro-cid-bbe6dxrz> <div class="hero-gradient" data-astro-cid-bbe6dxrz></div> <div class="hero-content" data-astro-cid-bbe6dxrz> <span class="hero-badge" data-astro-cid-bbe6dxrz>AI-Powered Design</span> <h1 class="hero-title" data-astro-cid-bbe6dxrz>Your personal AI interior designer.</h1> <p class="hero-subtitle" data-astro-cid-bbe6dxrz>
Analyze, redesign, budget, furnish, and transform any room using AI.
      Get professional design feedback, budget estimates, and shopping plans.
</p> <div class="hero-cta-row" data-astro-cid-bbe6dxrz> <a href="/design" class="btn-primary" data-astro-cid-bbe6dxrz>Design My Room</a> <a href="#examples" class="btn-secondary" data-astro-cid-bbe6dxrz>See Examples</a> </div> </div> </section>`;
}, "D:/web development/AI projects/AI Interior Designer/src/components/Hero.astro", void 0);

const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      number: "01",
      title: "Upload Room",
      description: "Take a photo or upload an existing image of any room.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      number: "02",
      title: "Analyze Space",
      description: "AI scores your room on layout, lighting, storage, and style.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/></svg>`
    },
    {
      number: "03",
      title: "Choose Goals",
      description: "Tell us what you want: more space, better lighting, or a full redesign.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      number: "04",
      title: "Generate Concepts",
      description: "Get 3 unique design concepts with explanations and budgets.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
    },
    {
      number: "05",
      title: "Plan & Implement",
      description: "Get a shopping list, budget breakdown, and renovation roadmap.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="how-it-works" id="how-it-works" data-astro-cid-cmgpsf2k> <div class="container" data-astro-cid-cmgpsf2k> <span class="section-eyebrow" data-astro-cid-cmgpsf2k>How it works</span> <h2 class="section-title" data-astro-cid-cmgpsf2k>Design smarter in five steps.</h2> <p class="section-subtitle" data-astro-cid-cmgpsf2k>
No design experience needed. Upload a photo and let AI do the rest.
</p> <div class="steps-grid" data-astro-cid-cmgpsf2k> ${steps.map((step) => renderTemplate`<div class="step-card" data-astro-cid-cmgpsf2k> <div class="step-icon" data-astro-cid-cmgpsf2k>${unescapeHTML(step.icon)}</div> <span class="step-number" data-astro-cid-cmgpsf2k>${step.number}</span> <h3 class="step-title" data-astro-cid-cmgpsf2k>${step.title}</h3> <p class="step-description" data-astro-cid-cmgpsf2k>${step.description}</p> </div>`)} </div> </div> </section>`;
}, "D:/web development/AI projects/AI Interior Designer/src/components/HowItWorks.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Design Analysis",
      description: "Get a comprehensive score for layout, lighting, storage, style consistency, and space utilization.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      title: "Design DNA",
      description: "Build a personalized design profile from your inspiration. Every future generation adapts to your taste.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 00-7.35 16.76C6.23 16.1 9 14 12 14s5.77 2.1 7.35 4.76A10 10 0 0012 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/></svg>`
    },
    {
      title: "AI Designer Chat",
      description: "Ask questions, request changes, and refine your design without restarting the workflow.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      title: "Budget Planner",
      description: "Get multiple budget scenarios from refresh to luxury transformation with spending recommendations.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      title: "Shopping Planner",
      description: "Automatically identify items needed and get a prioritized shopping list with estimated pricing.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      title: "Layout Optimizer",
      description: "See current vs suggested furniture positioning with traffic flow and space efficiency explanations.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="1.5"/><rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="1.5"/><rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="1.5"/><rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="1.5"/></svg>`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="features" id="features" data-astro-cid-vnivfuh2> <div class="container" data-astro-cid-vnivfuh2> <span class="section-eyebrow" data-astro-cid-vnivfuh2>Features</span> <h2 class="section-title" data-astro-cid-vnivfuh2>Everything you need to transform your space.</h2> <p class="section-subtitle" data-astro-cid-vnivfuh2>
Not just pretty images. A complete design platform that analyzes, plans, budgets, and guides you through every step.
</p> <div class="features-grid" data-astro-cid-vnivfuh2> ${features.map((feature) => renderTemplate`<div class="feature-card" data-astro-cid-vnivfuh2> <div class="feature-icon" data-astro-cid-vnivfuh2>${unescapeHTML(feature.icon)}</div> <h3 class="feature-title" data-astro-cid-vnivfuh2>${feature.title}</h3> <p class="feature-description" data-astro-cid-vnivfuh2>${feature.description}</p> </div>`)} </div> </div> </section>`;
}, "D:/web development/AI projects/AI Interior Designer/src/components/Features.astro", void 0);

const $$Results = createComponent(($$result, $$props, $$slots) => {
  const results = [
    {
      room: "Living Room",
      beforeScore: 63,
      afterScore: 92,
      budget: "$1,800",
      time: "2 Weekends",
      improvement: "+29 points"
    },
    {
      room: "Bedroom",
      beforeScore: 58,
      afterScore: 89,
      budget: "$1,200",
      time: "1 Weekend",
      improvement: "+31 points"
    },
    {
      room: "Home Office",
      beforeScore: 45,
      afterScore: 87,
      budget: "$2,400",
      time: "3 Weekends",
      improvement: "+42 points"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="results" id="examples" data-astro-cid-pvyyuo2j> <div class="container" data-astro-cid-pvyyuo2j> <span class="section-eyebrow" data-astro-cid-pvyyuo2j>Results</span> <h2 class="section-title" data-astro-cid-pvyyuo2j>See the transformation.</h2> <p class="section-subtitle" data-astro-cid-pvyyuo2j>
Real rooms. Real improvements. Measurable design impact.
</p> <div class="results-grid" data-astro-cid-pvyyuo2j> ${results.map((result) => renderTemplate`<div class="result-card" data-astro-cid-pvyyuo2j> <div class="result-header" data-astro-cid-pvyyuo2j> <span class="result-room" data-astro-cid-pvyyuo2j>${result.room}</span> <span class="result-improvement" data-astro-cid-pvyyuo2j>${result.improvement}</span> </div> <div class="result-scores" data-astro-cid-pvyyuo2j> <div class="score-item" data-astro-cid-pvyyuo2j> <span class="score-label" data-astro-cid-pvyyuo2j>Before</span> <span class="score-value score-before" data-astro-cid-pvyyuo2j>${result.beforeScore}</span> </div> <div class="score-arrow" data-astro-cid-pvyyuo2j> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" data-astro-cid-pvyyuo2j> <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-pvyyuo2j></path> </svg> </div> <div class="score-item" data-astro-cid-pvyyuo2j> <span class="score-label" data-astro-cid-pvyyuo2j>After</span> <span class="score-value score-after" data-astro-cid-pvyyuo2j>${result.afterScore}</span> </div> </div> <div class="result-meta" data-astro-cid-pvyyuo2j> <div class="meta-item" data-astro-cid-pvyyuo2j> <span class="meta-label" data-astro-cid-pvyyuo2j>Budget</span> <span class="meta-value" data-astro-cid-pvyyuo2j>${result.budget}</span> </div> <div class="meta-item" data-astro-cid-pvyyuo2j> <span class="meta-label" data-astro-cid-pvyyuo2j>Time</span> <span class="meta-value" data-astro-cid-pvyyuo2j>${result.time}</span> </div> </div> </div>`)} </div> </div> </section>`;
}, "D:/web development/AI projects/AI Interior Designer/src/components/Results.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      quote: "RoomIQ saved me thousands. Instead of hiring a designer, I got professional-grade analysis and a complete shopping plan for under $200.",
      author: "Sarah Chen",
      role: "Homeowner",
      avatar: "SC"
    },
    {
      quote: "The design score was eye-opening. I had no idea my lighting was so bad. After following the recommendations, my office feels like a completely different space.",
      author: "Marcus Rodriguez",
      role: "Remote Worker",
      avatar: "MR"
    },
    {
      quote: "Finally, an AI tool that goes beyond pretty pictures. The budget planner and shopping list made my renovation actually achievable.",
      author: "Emily Park",
      role: "First-time Buyer",
      avatar: "EP"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="testimonials" data-astro-cid-aadlzisc> <div class="container" data-astro-cid-aadlzisc> <span class="section-eyebrow" data-astro-cid-aadlzisc>Testimonials</span> <h2 class="section-title" data-astro-cid-aadlzisc>Loved by homeowners everywhere.</h2> <div class="testimonials-grid" data-astro-cid-aadlzisc> ${testimonials.map((testimonial) => renderTemplate`<div class="testimonial-card" data-astro-cid-aadlzisc> <div class="testimonial-stars" data-astro-cid-aadlzisc> ${[...Array(5)].map(() => renderTemplate`<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-astro-cid-aadlzisc> <path d="M8 0l2.47 4.96L16 5.76l-4 3.88.94 5.48L8 12.66l-4.94 2.46.94-5.48-4-3.88 5.53-.8z" data-astro-cid-aadlzisc></path> </svg>`)} </div> <p class="testimonial-quote" data-astro-cid-aadlzisc>${testimonial.quote}</p> <div class="testimonial-author" data-astro-cid-aadlzisc> <div class="author-avatar" data-astro-cid-aadlzisc>${testimonial.avatar}</div> <div class="author-info" data-astro-cid-aadlzisc> <span class="author-name" data-astro-cid-aadlzisc>${testimonial.author}</span> <span class="author-role" data-astro-cid-aadlzisc>${testimonial.role}</span> </div> </div> </div>`)} </div> </div> </section>`;
}, "D:/web development/AI projects/AI Interior Designer/src/components/Testimonials.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "How does the AI room analysis work?",
      answer: "Upload a photo and our AI analyzes your room across six dimensions: layout, lighting, storage, style consistency, space utilization, and visual balance. You get a comprehensive score with specific improvement recommendations."
    },
    {
      question: "Do I need design experience?",
      answer: "Not at all. RoomIQ is designed for everyone. The AI does the professional analysis and provides clear, actionable guidance. You just follow the recommendations."
    },
    {
      question: "What room types are supported?",
      answer: "We support bedrooms, living rooms, offices, kitchens, bathrooms, dining rooms, and studio apartments. Our AI is trained on thousands of rooms across all these categories."
    },
    {
      question: "Can I use this for rental properties?",
      answer: "Yes! RoomIQ includes renter-friendly design options that focus on temporary, non-permanent improvements like furniture arrangement, lighting, decor, and removable wallpaper."
    },
    {
      question: "How accurate are the budget estimates?",
      answer: "Budget estimates are based on current market prices and typical costs for similar projects. They provide a reliable range, though actual costs may vary by location and specific product choices."
    },
    {
      question: "Can I save and revisit my designs?",
      answer: "Yes. Create a free account to save all your room analyses, design reports, and shopping plans. You can revisit and compare designs anytime."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="faq" id="faq" data-astro-cid-al2ca2vr> <div class="container" data-astro-cid-al2ca2vr> <span class="section-eyebrow" data-astro-cid-al2ca2vr>FAQ</span> <h2 class="section-title" data-astro-cid-al2ca2vr>Frequently asked questions.</h2> <div class="faq-list" data-astro-cid-al2ca2vr> ${faqs.map((faq) => renderTemplate`<details class="faq-item" data-astro-cid-al2ca2vr> <summary class="faq-question" data-astro-cid-al2ca2vr> <span data-astro-cid-al2ca2vr>${faq.question}</span> <svg class="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" data-astro-cid-al2ca2vr> <path d="M6 8l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-al2ca2vr></path> </svg> </summary> <p class="faq-answer" data-astro-cid-al2ca2vr>${faq.answer}</p> </details>`)} </div> </div> </section>`;
}, "D:/web development/AI projects/AI Interior Designer/src/components/FAQ.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "HowItWorks", $$HowItWorks, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Results", $$Results, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/web development/AI projects/AI Interior Designer/src/pages/index.astro", void 0);

const $$file = "D:/web development/AI projects/AI Interior Designer/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
