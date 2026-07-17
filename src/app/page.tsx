import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import StatCounter from "@/components/StatCounter";
import MagneticButton from "@/components/MagneticButton";
import SlowMoneyReels from "@/components/SlowMoneyReels";
import { projects } from "@/lib/projects";
import { slowMoneyClub } from "@/lib/experience";

const headlineStats = [
  {
    value: "200%",
    label: "the annual sales target, driven by a feature I led",
    link: { text: "feature", href: "/work/scenes-automations" },
  },
  {
    value: "3 → 9",
    label: "core features scaled on native iOS and Android app",
    link: {
      text: "native iOS and Android app",
      href: "/work/scenes-automations",
    },
  },
  { value: "6+", label: "years designing end-to-end product experiences" },
];

export default function Home() {
  return (
    <div>
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-accent-soft/60 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6 md:px-8 relative">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
              Senior Product Designer · Bellingham, WA
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.03] tracking-tight text-ink max-w-4xl">
              I design systems people trust with the parts of life they
              can&apos;t afford to get wrong.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg text-muted max-w-xl leading-relaxed">
              Six-plus years shaping intuitive, trustworthy product
              experiences across complex hardware, IoT, native iOS and
              Android apps, and web platforms — from smart-home automations
              that control real locks and windows, to specification tools
              architects stake real projects on. Now bringing that same
              rigor to fintech.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href="/#work">See the work</MagneticButton>
              <a
                href="/about"
                className="text-sm text-ink underline decoration-line underline-offset-4 hover:decoration-accent transition-colors"
              >
                More about me →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-surface-raised/60">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-14 md:py-16">
          <Reveal>
            <StatCounter stats={headlineStats} />
          </Reveal>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 md:px-8 py-24 md:py-32">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-14">
            <h2 className="font-display text-3xl sm:text-4xl text-ink">
              Selected work
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              {String(projects.length).padStart(2, "0")} case studies
            </span>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.slug} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-8 pb-24 md:pb-32">
        <Reveal>
          <div className="rounded-3xl border border-accent/30 bg-accent-soft/25 px-8 py-12 md:px-10 md:py-14">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              Also building — {slowMoneyClub.handle}
            </p>
            <h2 className="font-display text-2xl leading-snug text-ink max-w-2xl">
              {slowMoneyClub.name}, a finance and investing education
              project for women, queer folks, and anyone else who
              doesn&apos;t usually get a seat at the financial table.
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href={slowMoneyClub.instagram} external>
                Instagram ↗
              </MagneticButton>
              <MagneticButton
                href={slowMoneyClub.tiktok}
                external
                tone="light"
              >
                TikTok ↗
              </MagneticButton>
            </div>
            <SlowMoneyReels />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
