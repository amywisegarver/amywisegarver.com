import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CopyField from "@/components/CopyField";
import { contact } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Contact — Amy Wisegarver",
};

export default function Contact() {
  return (
    <div className="pt-40 pb-28 md:pt-48 md:pb-36">
      <section className="mx-auto max-w-3xl px-6 md:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
            </span>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Open to new opportunities
            </p>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight text-ink max-w-xl">
            Whether you&apos;re hiring, collaborating, or want to talk about a
            project, I&apos;d love to hear from you.
          </h1>
        </Reveal>

        <div className="mt-16 divide-y divide-line border-t border-b border-line">
          <Reveal>
            <div className="py-8 grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-8 items-center">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Email
              </p>
              <CopyField value={contact.email} href={`mailto:${contact.email}`} />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="py-8 grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-8 items-center">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Phone
              </p>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="font-display text-2xl sm:text-3xl text-ink hover:text-accent transition-colors"
              >
                {contact.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="py-8 grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-8 items-center">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Location
              </p>
              <p className="font-display text-2xl sm:text-3xl text-ink">
                {contact.location}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="py-8 grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-8 items-center">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                LinkedIn
              </p>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl sm:text-3xl text-ink hover:text-accent transition-colors"
              >
                in/amy-wisegarver ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
