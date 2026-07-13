"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

type Props = {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  external?: boolean;
};

export default function MagneticButton({
  href,
  children,
  tone = "dark",
  external = false,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.45 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const toneClasses =
    tone === "light"
      ? "bg-white text-ink"
      : "bg-ink text-white";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium ${toneClasses} shadow-[0_1px_0_rgba(0,0,0,0.04)]`}
    >
      {children}
    </motion.a>
  );
}
