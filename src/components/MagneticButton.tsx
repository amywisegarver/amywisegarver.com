import type { ReactNode } from "react";

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
  const toneClasses =
    tone === "light"
      ? "bg-white text-ink hover:bg-surface-raised"
      : "bg-ink text-white hover:bg-ink-soft";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 shadow-[0_1px_0_rgba(0,0,0,0.04)] ${toneClasses}`}
    >
      {children}
    </a>
  );
}
