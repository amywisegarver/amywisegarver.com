"use client";

import { useState } from "react";

export default function CopyField({
  value,
  href,
}: {
  value: string;
  href: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable, ignore
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <a
        href={href}
        className="font-display text-xl sm:text-3xl text-ink hover:text-accent transition-colors break-all"
      >
        {value}
      </a>
      <button
        type="button"
        onClick={onCopy}
        className="shrink-0 text-xs font-mono uppercase tracking-widest text-muted border border-line rounded-full px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
