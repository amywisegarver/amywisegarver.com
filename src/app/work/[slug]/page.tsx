import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import BlockRenderer from "@/components/CaseStudyBlocks";
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

  return (
    <div>
      <section
        className="relative pt-40 pb-20 md:pt-48 md:pb-24"
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
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-8 -mt-8 md:-mt-12 relative">
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

      <section className="mx-auto max-w-4xl px-6 md:px-8 mt-14 md:mt-20 relative">
        <Reveal>
          <div className="rounded-2xl bg-surface border border-line shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] px-6 py-8 sm:px-10 sm:py-10">
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
              Results
            </p>
            <StatCounter stats={project.stats} />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 md:px-8 py-24 md:py-32 space-y-24 md:space-y-28">
        {project.blocks.map((block, i) => (
          <BlockRenderer block={block} key={i} />
        ))}
      </section>

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
