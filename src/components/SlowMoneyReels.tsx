import Image from "next/image";
import { slowMoneyClubReels } from "@/lib/experience";

export default function SlowMoneyReels() {
  return (
    <div className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
      {slowMoneyClubReels.map((reel) => (
        <a
          key={reel.tiktokUrl}
          href={reel.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative shrink-0 w-[160px] sm:w-[200px] aspect-[4/5] rounded-2xl overflow-hidden snap-start"
        >
          <Image
            src={reel.image}
            alt={reel.alt}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 200px, 160px"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-0.5 fill-ink">
                <path d="M6 4.5v15l14-7.5-14-7.5z" />
              </svg>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
