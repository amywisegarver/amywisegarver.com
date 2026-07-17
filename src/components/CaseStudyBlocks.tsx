import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import type { Block } from "@/lib/projects";

const DIMENSIONS: Record<string, { w: number; h: number }> = {
  "/images/scenes/shot-1.png": { w: 750, h: 1024 },
  "/images/scenes/shot-2.png": { w: 1024, h: 683 },
  "/images/scenes/shot-3.jpg": { w: 1024, h: 620 },
  "/images/scenes/shot-4.png": { w: 1024, h: 716 },
  "/images/scenes/shot-5.png": { w: 584, h: 1024 },
  "/images/scenes/shot-6.png": { w: 583, h: 1024 },
  "/images/scenes/shot-7.png": { w: 583, h: 1024 },
  "/images/scenes/shot-9.png": { w: 1024, h: 490 },
  "/images/window-tool/shot-1.jpeg": { w: 592, h: 631 },
};

function dims(src: string) {
  return DIMENSIONS[src] ?? { w: 1024, h: 683 };
}

function Num({ n }: { n: number }) {
  return (
    <span className="font-mono text-xs text-accent">
      {String(n).padStart(2, "0")}
    </span>
  );
}

export function ContainedSection({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-3xl border border-line bg-surface-raised/60 px-6 py-10 sm:px-10 sm:py-12"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6">
        {label}
      </p>
      {children}
    </section>
  );
}

function TextBlock({ block }: { block: Extract<Block, { type: "text" }> }) {
  return (
    <Reveal className="max-w-2xl">
      <h2 className="font-display text-2xl sm:text-3xl text-ink mb-5">
        {block.heading}
      </h2>
      <div className="space-y-4 text-muted leading-relaxed">
        {block.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Reveal>
  );
}

function TextImageBlock({
  block,
}: {
  block: Extract<Block, { type: "text-image" }>;
}) {
  return (
    <Reveal>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-ink mb-5">
            {block.heading}
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            {block.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        {block.video ? (
          <div className="max-w-[240px] mx-auto rounded-2xl overflow-hidden">
            <video
              src={block.video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-auto"
            />
          </div>
        ) : (
          block.image &&
          (() => {
            const { w, h } = dims(block.image);
            return (
              <div className="rounded-2xl overflow-hidden border border-line bg-surface-raised/40">
                <Image
                  src={block.image}
                  alt={block.heading}
                  width={w}
                  height={h}
                  className="w-full h-auto"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            );
          })()
        )}
      </div>
    </Reveal>
  );
}

function NumberedBlock({
  block,
}: {
  block: Extract<Block, { type: "numbered" }>;
}) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <h2 className="font-display text-2xl sm:text-3xl text-ink mb-5">
          {block.heading}
        </h2>
        {block.intro && (
          <p className="text-muted leading-relaxed mb-8 max-w-2xl">
            {block.intro}
          </p>
        )}
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-6">
        {block.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <div className="border-t border-line pt-4">
              <Num n={i + 1} />
              <h3 className="font-display text-lg text-ink mt-2 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function QuoteBlock({ block }: { block: Extract<Block, { type: "quote" }> }) {
  return (
    <Reveal className="max-w-2xl">
      <blockquote className="relative border-l-2 border-accent pl-6 py-1">
        <p className="font-display italic text-2xl sm:text-3xl text-ink leading-snug">
          &ldquo;{block.text}&rdquo;
        </p>
        {block.attribution && (
          <cite className="mt-3 block font-mono text-xs uppercase tracking-widest text-muted not-italic">
            {block.attribution}
          </cite>
        )}
      </blockquote>
    </Reveal>
  );
}

function CompareBlock({
  block,
}: {
  block: Extract<Block, { type: "compare" }>;
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
      <Reveal>
        <div className="rounded-2xl border border-line bg-surface-raised/60 p-6 h-full">
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
            {block.before.title}
          </p>
          <p className="text-muted leading-relaxed">{block.before.body}</p>
          {block.before.image && (
            <div className="mt-5 rounded-lg overflow-hidden border border-line">
              <Image
                src={block.before.image}
                alt={block.before.title}
                width={dims(block.before.image).w}
                height={dims(block.before.image).h}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="rounded-2xl border border-accent/40 bg-accent-soft/30 p-6 h-full">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
            {block.after.title}
          </p>
          <p className="text-ink/80 leading-relaxed">{block.after.body}</p>
          {block.after.image && (
            <div className="mt-5 rounded-lg overflow-hidden border border-line">
              <Image
                src={block.after.image}
                alt={block.after.title}
                width={dims(block.after.image).w}
                height={dims(block.after.image).h}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}

function ImageBlock({ block }: { block: Extract<Block, { type: "image" }> }) {
  const { w, h } = dims(block.src);
  return (
    <Reveal className={block.full ? "w-full" : "max-w-3xl"}>
      <div className="rounded-2xl overflow-hidden border border-line bg-surface-raised/40">
        <Image
          src={block.src}
          alt={block.caption ?? ""}
          width={w}
          height={h}
          className="w-full h-auto"
          sizes={block.full ? "100vw" : "(min-width: 1024px) 768px, 100vw"}
        />
      </div>
    </Reveal>
  );
}

function GalleryBlock({
  block,
}: {
  block: Extract<Block, { type: "gallery" }>;
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
      {block.images.map((img, i) => {
        const { w, h } = dims(img.src);
        return (
          <Reveal key={img.src} delay={i * 0.06}>
            <div className="rounded-2xl overflow-hidden border border-line bg-surface-raised/40">
              <Image
                src={img.src}
                alt={img.caption ?? ""}
                width={w}
                height={h}
                className="w-full h-auto"
                sizes="(min-width: 640px) 384px, 100vw"
              />
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

function VideoBlock({ block }: { block: Extract<Block, { type: "video" }> }) {
  return (
    <Reveal className="max-w-3xl">
      <div className="rounded-2xl overflow-hidden bg-ink">
        <video
          src={block.src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
        />
      </div>
    </Reveal>
  );
}

function DecisionsBlock({
  block,
}: {
  block: Extract<Block, { type: "decisions" }>;
}) {
  return (
    <div className="max-w-5xl">
      <Reveal>
        <h2 className="font-display text-2xl sm:text-3xl text-ink mb-5">
          {block.heading}
        </h2>
        {block.intro && (
          <p className="text-muted leading-relaxed mb-10 max-w-2xl">
            {block.intro}
          </p>
        )}
      </Reveal>
      <div className="space-y-14">
        {block.items.map((item, i) => {
          const text = (
            <div>
              <Num n={i + 1} />
              <h3 className="font-display text-xl text-ink mt-2 mb-1">
                {item.title}
              </h3>
              {item.why && (
                <p className="text-sm italic text-accent mb-3">
                  Why: {item.why}
                </p>
              )}
              <div className="space-y-3 text-muted leading-relaxed">
                {item.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          );

          if (item.image) {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={item.title} delay={i * 0.04}>
                <div className="rounded-3xl border border-line bg-surface-raised/60 px-6 py-8 sm:px-10 sm:py-10">
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    <div
                      className={`relative min-h-[260px] rounded-2xl overflow-hidden border border-line bg-surface-raised/40 ${
                        reversed ? "md:order-2" : ""
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div className={reversed ? "md:order-1" : undefined}>
                      {text}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          }

          return (
            <Reveal key={item.title} delay={i * 0.04}>
              <div className="rounded-3xl border border-line bg-surface-raised/60 px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid sm:grid-cols-[64px_1fr] gap-3 sm:gap-6">
                  <Num n={i + 1} />
                  <div>
                    <h3 className="font-display text-xl text-ink mb-1">
                      {item.title}
                    </h3>
                    {item.why && (
                      <p className="text-sm italic text-accent mb-3">
                        Why: {item.why}
                      </p>
                    )}
                    <div className="space-y-3 text-muted leading-relaxed">
                      {item.body.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

function OutcomesBlock({
  block,
}: {
  block: Extract<Block, { type: "outcomes" }>;
}) {
  return (
    <div className="max-w-2xl rounded-3xl bg-ink text-white px-8 py-10 sm:px-10 sm:py-12">
      <Reveal>
        <h2 className="font-display text-2xl sm:text-3xl mb-6">
          {block.heading}
        </h2>
      </Reveal>
      <ul className="space-y-4">
        {block.items.map((item, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <li className="flex gap-3 text-white/85 leading-relaxed">
              <span className="font-mono text-accent shrink-0">✓</span>
              <span>{item}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return <TextBlock block={block} />;
    case "text-image":
      return <TextImageBlock block={block} />;
    case "numbered":
      return <NumberedBlock block={block} />;
    case "quote":
      return <QuoteBlock block={block} />;
    case "compare":
      return <CompareBlock block={block} />;
    case "decisions":
      return <DecisionsBlock block={block} />;
    case "outcomes":
      return <OutcomesBlock block={block} />;
    case "image":
      return <ImageBlock block={block} />;
    case "gallery":
      return <GalleryBlock block={block} />;
    case "video":
      return <VideoBlock block={block} />;
    default:
      return null;
  }
}
