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
    role: "UX Designer → Senior UX/UI Designer, Marvin Connected Home",
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
