import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { experience, contact } from "@/lib/experience";

export const metadata: Metadata = {
  title: "About — Amy Wisegarver",
};

export default function About() {
  return (
    <div className="pt-40 pb-28 md:pt-48 md:pb-36">
      <section className="mx-auto max-w-3xl px-6 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
            About
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight text-ink mb-10">
            Hi there, I&apos;m Amy.
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              I&apos;m a Senior Product Designer with 5+ years of end-to-end
              UX experience, progressing from agency product roles into
              leading all UX/UI design and design strategy for the Marvin
              Connected Home app.
            </p>
            <p>
              I have a proven track record of shipping complex features
              quickly, improving design and development efficiency, and
              delivering measurable business and operational impact across
              mobile, IoT, and web platforms — the kind of high-stakes,
              trust-sensitive systems that don&apos;t leave much room for
              guesswork.
            </p>
            <p>
              Alongside my product work, I serve as an adjunct professor of
              Interaction Design at Western Washington University, where I
              teach DSGN 310: Principles of Interaction Design, along with AI
              design tools and generative engine optimization — staying
              hands-on with how design practice is changing in real time.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 md:px-8 mt-24">
        <Reveal>
          <h2 className="font-display text-2xl text-ink mb-8">Experience</h2>
        </Reveal>
        <ol className="space-y-0">
          {experience.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.06}>
              <li className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-6 border-t border-line first:border-t-0 sm:first:border-t sm:first:py-0 sm:first:pt-6">
                <div>
                  <p className="font-display text-xl text-ink">
                    {item.company}
                  </p>
                  <p className="text-muted">{item.role}</p>
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted whitespace-nowrap">
                  {item.period}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-3xl px-6 md:px-8 mt-24">
        <Reveal>
          <div className="rounded-3xl border border-line bg-surface-raised/60 px-8 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-2">
                Get in touch
              </p>
              <p className="font-display text-xl text-ink">{contact.email}</p>
            </div>
            <MagneticButton href={contact.linkedin} external>
              LinkedIn ↗
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
