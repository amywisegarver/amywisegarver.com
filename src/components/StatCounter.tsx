"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import type { Stat } from "@/lib/projects";

const NUMERIC = /^(\D*?)(\d+(?:\.\d+)?)(.*)$/;

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState<string>(() => {
    const match = value.match(NUMERIC);
    return match ? `${match[1]}0${match[3]}` : value;
  });

  useEffect(() => {
    if (!inView) return;
    const match = value.match(NUMERIC);
    if (!match) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const isInt = !numStr.includes(".");
    const duration = 900;
    const start = performance.now();

    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = target * eased;
      setDisplay(`${prefix}${isInt ? Math.round(current) : current.toFixed(1)}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function StatCounter({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1">
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-display text-4xl sm:text-5xl text-ink">
            <AnimatedValue value={stat.value} />
          </dd>
          <dd className="text-sm text-muted leading-snug">
            {stat.label}
            {stat.source && (
              <span className="block text-xs text-muted/70 mt-1">
                — {stat.source}
              </span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
