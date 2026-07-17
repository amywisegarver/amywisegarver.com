import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import SlowMoneyReels from "@/components/SlowMoneyReels";
import { experience, slowMoneyClub } from "@/lib/experience";

export const metadata: Metadata = {
  title: "About — Amy Wisegarver",
};

export default function About() {
  return (
    <div className="relative pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-accent-soft/60 blur-3xl" />
      <section className="mx-auto max-w-3xl px-6 md:px-8 relative">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
            About
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight text-ink mb-4">
            Hi there, I&apos;m Amy.
          </h1>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-10">
            Bellingham, WA · Open to remote &amp; Seattle hybrid
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              I&apos;m a Senior Product Designer with 6+ years of end-to-end
              UX experience, progressing from agency product roles into
              leading all UX/UI design and design strategy for the Marvin
              Connected Home app.
            </p>
            <p>
              Outside of product work, I run The Slow Money Club, a finance
              and investing education project born out of my own love of
              demystifying money — turning investing, budgeting, and
              long-term wealth-building into something approachable for
              people who don&apos;t usually get a seat at the financial
              table.
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
        <Reveal delay={0.12}>
          <div className="mt-10 pt-8 border-t border-line">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Other skills
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Certified backyard chicken wrangler",
                "Resident dahlia-whisperer",
                "25-year tenured tap dancer",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono uppercase tracking-wide text-muted border border-line rounded-full px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
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
              <li className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pt-6 pb-8 border-t border-line first:border-t-0 sm:first:border-t sm:first:pt-6">
                <div className="space-y-1.5">
                  <p className="font-display text-xl text-ink">
                    {item.company}
                  </p>
                  <p className="text-muted">{item.role}</p>
                </div>
                <div className="sm:text-right">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted whitespace-nowrap">
                    {item.period}
                  </p>
                  {item.note && (
                    <p className="mt-1 text-xs text-muted/70 whitespace-nowrap">
                      {item.note}
                    </p>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-3xl px-6 md:px-8 mt-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-2">
            Also building
          </p>
          <div className="rounded-3xl border border-accent/30 bg-accent-soft/25 px-8 py-10 sm:py-12">
            <div className="grid md:grid-cols-[1fr_220px] gap-10 items-center">
              <div>
                <h2 className="font-display text-2xl text-ink mb-1">
                  {slowMoneyClub.name}
                </h2>
                <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
                  {slowMoneyClub.handle}
                </p>
                <p className="text-muted leading-relaxed max-w-md">
                  {slowMoneyClub.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <MagneticButton href={slowMoneyClub.instagram} external>
                    Instagram ↗
                  </MagneticButton>
                  <MagneticButton href={slowMoneyClub.tiktok} external tone="light">
                    TikTok ↗
                  </MagneticButton>
                </div>
              </div>
              <SlowMoneyReels />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
