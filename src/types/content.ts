import type { IconType } from 'react-icons';

export type Bonus = {
  id: number;
  title: string;
  description: string;
  value: string;
  highlight: string;
  icon: IconType;
  borderClass: string;
  backgroundClass: string;
};

export type PainPoint = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  borderClass: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  initials: string;
  delay?: number;
};

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export type Stat = {
  id: number;
  value: string;
  label: string;
  accentClass: string;
};

export type OfferSummary = {
  id: number;
  label: string;
  icon: IconType;
};
