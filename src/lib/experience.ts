type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  note?: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "Consumer Reports",
    role: "Senior Product Designer",
    period: "January 2026 — June 2026",
    note: "6-month contract",
  },
  {
    company: "Marvin",
    role: "UX Designer → Senior UX/UI Designer",
    period: "March 2022 — November 2025",
  },
  {
    company: "Western Washington University",
    role: "Adjunct Professor of Interaction Design",
    period: "September 2023 — Present",
  },
  {
    company: "Mentor Creative Group",
    role: "Product Designer",
    period: "September 2020 — March 2022",
  },
];

export const contact = {
  email: "amywisegarver@gmail.com",
  location: "Bellingham, WA",
  openTo: "Open to remote roles and Seattle-area hybrid",
  linkedin: "https://www.linkedin.com/in/amy-wisegarver",
};

export const slowMoneyClub = {
  name: "The Slow Money Club",
  handle: "@theslowmoneyclub",
  description:
    "A finance and investing education project for women, queer folks, and anyone else who doesn't usually get a seat at the financial table — easy, accessible money and investing tips, no gatekeeping.",
  instagram: "https://www.instagram.com/theslowmoneyclub/",
  tiktok: "https://www.tiktok.com/@theslowmoneyclub",
};

export type SlowMoneyReel = { image: string; alt: string; tiktokUrl: string };

export const slowMoneyClubReels: SlowMoneyReel[] = [
  {
    image: "/images/slow-money-club/stock-market-crash.png",
    alt: "I'm not scared of a stock market crash",
    tiktokUrl: "https://www.tiktok.com/@theslowmoneyclub/video/7662999720868039950",
  },
  {
    image: "/images/slow-money-club/stop-using-debit-card.png",
    alt: "Stop using your debit card",
    tiktokUrl: "https://www.tiktok.com/@theslowmoneyclub/video/7664346342847761677",
  },
  {
    image: "/images/slow-money-club/invest-even-if-broke.png",
    alt: "Why you should invest even if you're broke",
    tiktokUrl: "https://www.tiktok.com/@theslowmoneyclub/video/7655065701501160718",
  },
];
