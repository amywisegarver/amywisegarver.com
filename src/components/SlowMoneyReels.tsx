"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { slowMoneyClubReels } from "@/lib/experience";

const AUTO_ADVANCE_MS = 4500;

export default function SlowMoneyReels() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    const len = slowMoneyClubReels.length;
    setIndex(((i % len) + len) % len);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slowMoneyClubReels.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused, index]);

  const reel = slowMoneyClubReels[index];

  return (
    <div
      className="mx-auto w-full max-w-[220px] sm:max-w-[260px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.a
            key={reel.tiktokUrl}
            href={reel.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="group absolute inset-0 block"
          >
            <Image
              src={reel.image}
              alt={reel.alt}
              fill
              className="object-cover"
              sizes="260px"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-0.5 fill-ink">
                  <path d="M6 4.5v15l14-7.5-14-7.5z" />
                </svg>
              </span>
            </div>
          </motion.a>
        </AnimatePresence>

        <button
          type="button"
          aria-label="Previous video"
          onClick={() => goTo(index - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white transition-colors hover:bg-black/55"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
            <path d="M15 4.5 6.5 12l8.5 7.5v-15z" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next video"
          onClick={() => goTo(index + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white transition-colors hover:bg-black/55"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
            <path d="m9 4.5 8.5 7.5-8.5 7.5v-15z" />
          </svg>
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {slowMoneyClubReels.map((r, i) => (
          <button
            key={r.tiktokUrl}
            type="button"
            aria-label={`Go to video ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-5 bg-accent" : "w-1.5 bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
