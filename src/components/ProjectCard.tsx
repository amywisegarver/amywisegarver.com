"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div
          className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5"
          style={{
            background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})`,
          }}
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/10" />
          <motion.div
            className="absolute inset-0 flex items-end p-6"
            initial={false}
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/80">
              {project.client}
            </span>
          </motion.div>
          <div className="absolute top-5 right-5 h-9 w-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-45">
            ↗
          </div>
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-ink group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted max-w-md">{project.summary}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono uppercase tracking-wide text-muted border border-line rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
