import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import BlockRenderer, { ContainedSection } from "@/components/CaseStudyBlocks";
import CaseStudyNav from "@/components/CaseStudyNav";
import MagneticButton from "@/components/MagneticButton";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Amy Wisegarver`,
    description: project.summary,
  };
}

export default async function CaseStudy(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const otherProject = projects.find((p) => p.slug !== project.slug);

  const navSections = [{ id: "overview", label: "Overview" }];
  if (project.blocks.some((b) => b.anchor === "problem")) {
    navSections.push({ id: "problem", label: "The Problem" });
  }
  if (project.blocks.some((b) => b.anchor === "solution")) {
    navSections.push({ id: "solution", label: "The Solution" });
  }
  if (project.blocks.some((b) => b.type === "decisions")) {
    navSections.push({ id: "decisions", label: "Key Decisions" });
  }
  if (project.blocks.some((b) => b.type === "outcomes")) {
    navSections.push({ id: "outcomes", label: "Results" });
  }

  return (
    <div className="bg-surface">
      <section
        className="relative pt-40 pb-40 md:pt-48 md:pb-56 overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${project.cover.from}, ${project.cover.to})`,
        }}
      >
        <div className="mx-auto max-w-4xl px-6 md:px-8 text-white">
          <Reveal>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8"
            >
              ← All work
            </Link>
            <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-4">
              {project.client}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight max-w-2xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono uppercase tracking-wide text-white/80 border border-white/25 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48 md:h-64"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--surface))",
          }}
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-8 -mt-40 md:-mt-52 relative">
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
            <Image
              src={project.image}
              alt={`${project.title} interface preview`}
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl px-6 md:px-8 mt-14 md:mt-20 lg:grid lg:grid-cols-[160px_1fr] lg:gap-16">
        <CaseStudyNav sections={navSections} />

        <div className="space-y-24 md:space-y-28 pb-24 md:pb-32">
          <Reveal>
            <section
              id="overview"
              className="scroll-mt-28 rounded-2xl bg-surface border border-line shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] px-6 py-8 sm:px-10 sm:py-10"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-5">
                My role
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-10">
                {project.role.map((r) => (
                  <li key={r} className="flex gap-2 text-sm text-muted leading-relaxed">
                    <span className="text-accent">—</span>
                    {r}
                  </li>
                ))}
              </ul>
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-5">
                Team
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-10">
                {project.team.map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-muted leading-relaxed">
                    <span className="text-accent">—</span>
                    {t}
                  </li>
                ))}
              </ul>
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-5">
                Results
              </p>
              <StatCounter stats={project.stats} />
            </section>
          </Reveal>

          {project.blocks.map((block, i) => {
            if (block.anchor === "problem") {
              return (
                <ContainedSection key={i} id="problem" label="The Problem">
                  <BlockRenderer block={block} />
                </ContainedSection>
              );
            }
            if (block.anchor === "solution") {
              return (
                <ContainedSection key={i} id="solution" label="The Solution">
                  <BlockRenderer block={block} />
                </ContainedSection>
              );
            }
            if (block.type === "decisions" || block.type === "outcomes") {
              return (
                <section key={i} id={block.type} className="scroll-mt-28">
                  <BlockRenderer block={block} />
                </section>
              );
            }
            return <BlockRenderer block={block} key={i} />;
          })}
        </div>
      </div>

      {otherProject && (
        <section className="border-t border-line">
          <div className="mx-auto max-w-4xl px-6 md:px-8 py-20 md:py-28">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
                Next case study
              </p>
              <Link href={`/work/${otherProject.slug}`} className="group inline-flex flex-col">
                <span className="font-display text-3xl sm:text-4xl text-ink group-hover:text-accent transition-colors">
                  {otherProject.title} →
                </span>
                <span className="mt-2 text-muted">{otherProject.summary}</span>
              </Link>
              <div className="mt-10">
                <MagneticButton href="/contact">Let&apos;s talk</MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </div>
  );
}
