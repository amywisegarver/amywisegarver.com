export type Stat = {
  value: string;
  label: string;
  link?: { text: string; href: string };
};

export type Block = { anchor?: "problem" | "solution" } & (
  | { type: "text"; heading: string; paragraphs: string[] }
  | {
      type: "text-image";
      heading: string;
      paragraphs: string[];
      image?: string;
      video?: string;
    }
  | {
      type: "numbered";
      heading: string;
      intro?: string;
      items: { title: string; body: string }[];
    }
  | { type: "quote"; text: string; attribution?: string }
  | {
      type: "compare";
      before: { title: string; body: string; image?: string };
      after: { title: string; body: string; image?: string };
    }
  | {
      type: "decisions";
      heading: string;
      intro?: string;
      items: { title: string; why?: string; body: string[]; image?: string }[];
    }
  | { type: "outcomes"; heading: string; items: string[] }
  | { type: "image"; src: string; caption?: string; full?: boolean }
  | { type: "gallery"; images: { src: string; caption?: string }[] }
  | { type: "video"; src: string; caption?: string }
);

export type Project = {
  slug: string;
  title: string;
  client: string;
  tags: string[];
  status: "live";
  summary: string;
  cover: { from: string; to: string };
  image: string;
  role: string[];
  team: string[];
  stats: Stat[];
  blocks: Block[];
};

export const projects: Project[] = [
  {
    slug: "scenes-automations",
    title: "Scenes + Automations",
    client: "Marvin Connected Home",
    tags: ["0→1 Feature", "IoT", "Design Systems"],
    status: "live",
    summary:
      "Scenes for the Marvin Connected Home app enables homeowners to automate their windows, doors, lights, and shades in a flexible and secure way — whether it be with a tap, a schedule, or the weather.",
    cover: { from: "#1c2b28", to: "#2f6f5e" },
    image: "/images/scenes-cover.png",
    role: [
      "Led UX strategy and all end-to-end UX and UI design",
      "Drove four rounds of iterative testing with dealers, homeowners, and integrators",
      "Created new design components, variables, and system patterns",
      "Partnered closely with engineering and development on feasibility and handoff",
    ],
    team: ["1 Designer (Me)", "4 Developers", "1 Project Manager"],
    stats: [
      { value: "200%", label: "of the annual sales target" },
      { value: "3 → 9", label: "core features scaled" },
      { value: "4", label: "rounds of iterative testing" },
    ],
    blocks: [
      {
        type: "text-image",
        heading: "What is Marvin Connected Home?",
        paragraphs: [
          "Marvin Connected Home is the smart-home app that enables homeowners to control their automated windows, doors, skylights, lights, shades, and privacy glass — making it easy to adjust airflow, comfort, and security from anywhere.",
        ],
        video: "/images/scenes/create-scene-demo.mp4",
      },
      {
        type: "numbered",
        anchor: "problem",
        heading: "What problem were we solving?",
        intro:
          "Before this project, people had to control each product one at a time. There was no simple way to automate actions or combine products, which made everyday tasks feel harder than they needed to be. Before this project, Marvin Connected Home only supported:",
        items: [
          {
            title: "Individual product control",
            body: "Users could control their MCH products individually, only on-demand.",
          },
          {
            title: "Basic grouping",
            body: "Users could group products together and control them, only on-demand.",
          },
          {
            title: "Auto Air (a whole home ventilation feature)",
            body: "Users could toggle on an Auto Air feature that was based on user-set temperature preferences. The caveat — Auto Air would apply to all windows in the home.",
          },
        ],
      },
      {
        type: "text",
        anchor: "solution",
        heading: "Why do Scenes matter?",
        paragraphs: [
          "A scene is a smart-home shortcut that lets you automate multiple products at once — like opening windows, lowering shades, and adjusting lights — all triggered by a tap, a schedule, or the weather.",
        ],
      },
      {
        type: "quote",
        text: "I just want to wake up to fresh air coming in through my bedroom windows.",
      },
      {
        type: "image",
        src: "/images/scenes/shot-2.png",
        caption: "A scheduled Scene opening the bedroom window and surfacing a quiet in-app notification.",
        full: true,
      },
      {
        type: "numbered",
        heading: "We needed to answer three questions",
        items: [
          {
            title: "Simplicity vs. complexity",
            body: "How do we keep the experience simple when the device ecosystem is complex?",
          },
          {
            title: "Designing for every household",
            body: "How do we design for users who only own 1–2 product types and the few who own everything?",
          },
          {
            title: "Safety by default",
            body: "How do we prevent conflicting or unsafe automations — like accidentally unlocking a door?",
          },
        ],
      },
      {
        type: "numbered",
        heading: "What did we learn from testing earlier iterations?",
        intro:
          "Across four testing rounds with homeowners, dealers, and integrators, one theme was consistent: users found early versions too complex, and wanted a faster, more intuitive way to build scenes. This required us to:",
        items: [
          { title: "Simplify choices", body: "Cut decisions down to what actually mattered to the user in the moment." },
          { title: "Reduce cognitive load", body: "Remove steps and jargon that slowed people down." },
          { title: "Add guardrails", body: "Prevent unsafe or conflicting configurations by design." },
          { title: "Clarify timing", body: "Make it obvious how and when a scene would run." },
        ],
      },
      {
        type: "decisions",
        heading: "What were the key design decisions?",
        intro:
          "Grounded in user feedback, we realigned the experience around simplicity, predictability, and safety, and built a foundation that could scale with Marvin's expanding product catalog.",
        items: [
          {
            title: "A clear, three-step scene creation flow",
            image: "/images/scenes/shot-5.png",
            body: [
              "To make scene creation faster and easier to understand, we introduced a clear, structured flow built around: Name — labeling the intent of the automation up front. Product actions — selecting exactly what each device should do. Triggers — defining when the scene should run.",
              "This framework reduced setup time, increased clarity and guidance, and streamlined decision-making — especially for users managing complex, multi-device environments.",
            ],
          },
          {
            title: "Actionable scene cards",
            image: "/images/scenes/shot-6.png",
            body: [
              "To help users understand and control automations at a glance, each card includes a toggle for automation, a color-coded lozenge showing when it will run, a play button for manual activation, and tap targets for viewing or duplicating a scene.",
              "This pattern aligns with relevant industry standards but is adapted for the complexity of Marvin's products.",
            ],
          },
          {
            title: "Clear and safe trigger logic",
            image: "/images/scenes/shot-4.png",
            body: [
              "Every scene supports on-demand activation, scheduled triggers (recurring day + time), and weather triggers based on temperature and humidity.",
              "To keep the experience predictable and safe: weather triggers require both temperature and humidity criteria to be true, scenes are limited to one combined range, and power users can duplicate scenes to create more advanced multi-condition setups. This eliminated confusion and prevented conflicting automations.",
            ],
          },
          {
            title: "Scalable design elements",
            image: "/images/scenes/shot-9.png",
            body: [
              "To support Marvin's growing ecosystem, the scene dashboard was intentionally built using a mix of new and existing design-system components — reusing core patterns to maintain familiarity and reduce dev lift, while adding new structural elements and a modular layout that can expand as new capabilities are added.",
              "This ultimately became the foundation for future automation features.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/images/scenes/demo-2.mp4",
        caption: "The full scene creation flow — name, product actions, then triggers.",
      },
      {
        type: "image",
        src: "/images/scenes/shot-7.png",
        caption: "A plain-language explainer for how weather triggers work",
      },
      {
        type: "video",
        src: "/images/scenes/demo-1.mp4",
        caption: "Selecting product actions when building a scene.",
      },
      {
        type: "image",
        src: "/images/scenes/shot-3.jpg",
        caption: "Marvin Connected Home, in the wild.",
      },
      {
        type: "outcomes",
        heading: "What did we achieve?",
        items: [
          "Scene creation became significantly faster and easier, reducing cognitive load and decision friction",
          "Users gained confidence in automated behavior through clearer triggers and predictable patterns",
          "The system now scales naturally as new products, triggers, and security capabilities are added",
          "Dealers gained a compelling selling tool, helping the team reach 200% of the annual sales target",
        ],
      },
    ],
  },
  {
    slug: "window-design-tool",
    title: "Window Design Tool",
    client: "Marvin",
    tags: ["0→1 Product", "B2B", "Complex Systems"],
    status: "live",
    summary:
      "Designing an interactive window design tool for architects to explore, configure, and specify Marvin products with clarity and confidence.",
    cover: { from: "#1a2233", to: "#3a5a8c" },
    image: "/images/window-tool-cover.png",
    role: [
      "Partnered on UX strategy and all end-to-end UX and UI design",
      "Facilitated in-person research and testing with architects, dealers, builders, and Architectural Project Managers",
      "Built interactive prototypes, design-system components, and configuration logic",
      "Partnered with engineering early to align on product rules and feasibility",
    ],
    team: [
      "3 UX/UI Designers",
      "1 UI Designer",
      "3 Developers",
      "1 Design Manager",
    ],
    stats: [
      { value: "20", label: "architects, dealers & builders interviewed" },
      { value: "↓", label: "APM assistance requests" },
      { value: "↑", label: "specification accuracy" },
    ],
    blocks: [
      {
        type: "numbered",
        anchor: "problem",
        heading: "What problem were we solving?",
        intro:
          "Before this project, architects relied on static PDFs, manual conversations, and product catalogs. This led to:",
        items: [
          {
            title: "Frequent misinterpretation of design intent",
            body: "Architects' sketches and notes often didn't translate cleanly into dealer terminology, leading to incorrect assumptions about what they wanted.",
          },
          {
            title: "Specification errors late in projects",
            body: "Misaligned or incomplete specs weren't caught until late stages, causing rework, delays, and frustration across teams.",
          },
          {
            title: "Back-and-forth between dealers and APMs",
            body: "Simple configuration questions required multiple emails or calls, taking significant time away from higher-value support work.",
          },
          {
            title: "Difficulty visualizing assembly configurations",
            body: "Without a visual, interactive tool, architects struggled to understand how units fit together or whether configurations were feasible.",
          },
        ],
      },
      {
        type: "text",
        anchor: "solution",
        heading: "What is Marvin's window design tool?",
        paragraphs: [
          "The Marvin Design Tool is an interactive, web-based tool that lets architects experiment with Marvin windows and doors — change sizes, materials, configurations, and assemblies, and instantly see how those choices look and behave. It's designed to capture design intent clearly, reduce confusion, and help teams make smarter decisions earlier in the project.",
        ],
      },
      {
        type: "compare",
        before: {
          title: "Before: Order Management System (OMS)",
          body: "Text-based configuration with limited visual feedback and complex rule logic.",
          image: "/images/window-tool/shot-1.jpeg",
        },
        after: {
          title: "After: Window Visualizer Tool",
          body: "A visual, interactive experience with the same product rules, validation, and data as OMS.",
        },
      },
      {
        type: "video",
        src: "/images/window-tool/demo-1.mp4",
        caption: "The Window Visualizer Tool in action.",
      },
      {
        type: "numbered",
        heading: "Why did Marvin need a design tool?",
        intro:
          "Marvin's architectural customers — architects, dealers, and builders — needed a modern, intuitive way to explore window and door options, validate feasibility, and communicate design intent across teams. At the same time, Marvin's internal teams were overwhelmed by assistance requests, much of which came from repeated questions or basic configuration validation. We needed to create a flexible tool that:",
        items: [
          { title: "Teaches visually", body: "Visually teaches architects about Marvin products." },
          { title: "Validates accuracy", body: "Supports high accuracy and product-rule validation." },
          { title: "Handles complexity", body: "Handles complex assemblies and configurations." },
          { title: "Bridges teams", body: "Bridges communication across project stakeholders." },
          { title: "Supports every role", body: "Works for multiple user types with different permissions." },
        ],
      },
      {
        type: "numbered",
        heading: "What did we learn from architects and dealers while testing the tool?",
        intro:
          "After conducting interviews and testing with 7 architectural project managers (APMs), 7 architects, 3 dealers, and 3 design-builders, several themes emerged across the groups:",
        items: [
          {
            title: "Architects value self-directed, visual learning",
            body: "They want to “play,” explore options, and understand constraints intuitively — just as they do in design software.",
          },
          {
            title: "Accuracy is non-negotiable",
            body: "The tool must align with OMS rules and flag complex configurations that require dealer or APM review.",
          },
          {
            title: "Pricing needs context, not absolutes",
            body: "Architects want relative understanding (“what changes the price?”), not official quotes.",
          },
          {
            title: "Scale references matter",
            body: "Architects consistently requested human-shaped or dimensional references to judge proportion and real-world size.",
          },
          {
            title: "Assembly creation must support multiple workflows",
            body: "Some architects start with a shape or dimension; others start by combining known units. The tool must support both.",
          },
          {
            title: "Safety and performance information is essential",
            body: "Architects want quick visibility into egress, tempering, fall-protection needs, and performance metrics.",
          },
        ],
      },
      {
        type: "decisions",
        heading: "What were the key design decisions?",
        intro:
          "Through careful synthesis of our research and testing, we designed a tool that balanced creative exploration with accurate product validation, while supporting multiple user types and collaboration workflows.",
        items: [
          {
            title: "A visual-first configuration experience",
            why: "Architects think visually. Images reduce cognitive load and accelerate learning.",
            body: [
              "Replaced text-heavy dropdowns with visual option tiles, added operation arrows, hinge indicators, and glazing previews, avoided abbreviations and unclear terminology, and provided top-down views and section cuts for clarity.",
            ],
          },
          {
            title: "Rule-based product validation",
            why: "Architects want flexibility, but the system must prevent configurations that cannot be built.",
            body: [
              "All options pull from OMS product rules. Incompatible configurations are hidden or flagged. Complex assemblies trigger a “needs review” indicator, with clear, contextual feedback when manual review was required.",
            ],
          },
          {
            title: "Multi-path assembly creation",
            why: "Different architects work in different ways.",
            body: [
              "Path 1: start with dimension/shape constraints. Path 2: build an assembly by dragging individual units. Only compatible units appear in assembly mode, and alerts surface when structural support would be required.",
            ],
          },
          {
            title: "Pricing with context, not absolutes",
            why: "Architects use pricing to make trade-offs, but dealers feared losing control of the conversation.",
            body: [
              "Displayed MSRP-based ranges, not quotes, with disclaimers about multipliers, installation, and delivery. Pricing could be toggled on/off, and performance information was prioritized over pricing.",
            ],
          },
          {
            title: "Highly requested scale references",
            why: "Architects rely on scale to evaluate proportions.",
            body: [
              "Added adjustable human figure references, dimensional overlays around windows/assemblies, and the ability to compare scale to nearby units or adjacent assemblies.",
            ],
          },
          {
            title: "Safety, performance, and clarity features",
            why: "Safety and performance often drive configuration decisions.",
            body: [
              "Identified egress, fall protection, and temper requirements, added contextual performance metrics, and provided clear labeling for heights, heads, sills, and terminology — avoiding ambiguous abbreviations.",
            ],
          },
          {
            title: "A collaboration-ready project dashboard",
            why: "Projects require alignment across architects, dealers, APMs, builders, and clients.",
            body: [
              "Built a project timeline with status indicators, window schedule creation, notes/comments/file attachments, permission-based sharing (view, collaborate, own), support for global styles and spec-level adjustments, export formats for construction documents, and dealer handoff workflows.",
            ],
          },
        ],
      },
      {
        type: "outcomes",
        heading: "What did we achieve?",
        items: [
          "Improved architect clarity and reduced cognitive load through a visual-first, rule-based configuration flow",
          "Reduced APM support burden by preventing incompatible options and surfacing human-review flags",
          "Increased specification accuracy and reduced back-and-forth between architects and dealers",
          "Supported Marvin's goal of increasing project closing ratios through clearer design intent",
          "Positioned Marvin as a more competitive digital leader by providing tools not widely available in the window/door industry",
          "Created a foundation for future features like dynamic pricing, performance visualization, and multi-unit assemblies",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
