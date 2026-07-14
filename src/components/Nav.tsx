"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group whitespace-nowrap shrink-0">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-white text-[11px] font-display tracking-tight group-hover:bg-accent transition-colors">
            AW
          </span>
          <span className="font-display text-base sm:text-lg tracking-tight text-ink group-hover:text-accent transition-colors">
            Amy Wisegarver
          </span>
        </Link>
        <ul className="flex items-center gap-0.5 sm:gap-1">
          {links.map((link) => {
            const active =
              link.href !== "/#work" && pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-2.5 sm:px-3 py-2 text-sm rounded-full transition-colors whitespace-nowrap ${
                    active
                      ? "text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-surface-raised"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="h-px w-full bg-line/60 overflow-hidden">
        <div
          className="h-full bg-accent origin-left transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </header>
  );
}
