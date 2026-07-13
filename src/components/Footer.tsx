import Link from "next/link";
import { contact } from "@/lib/experience";
import MagneticButton from "@/components/MagneticButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4">
          Let&apos;s talk
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl mb-10">
          Hiring, collaborating, or just want to talk shop? I&apos;d love to
          hear from you.
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <MagneticButton href={`mailto:${contact.email}`} tone="light">
            {contact.email}
          </MagneticButton>
          <Link
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/70 hover:text-white underline decoration-white/30 underline-offset-4 transition-colors"
          >
            LinkedIn ↗
          </Link>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs font-mono text-white/40">
          <span>© {year} Amy Wisegarver</span>
          <span>{contact.location}</span>
        </div>
      </div>
    </footer>
  );
}
