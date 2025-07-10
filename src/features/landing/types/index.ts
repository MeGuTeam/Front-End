export type Shape = {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  type: 'circle' | 'sakura';
};

export type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  char: string;
  size: number;
};

export interface TeamMember {
  id: string;
  name: string;
  role: string[];
  photo: string;
  linkedin?: string;
  github?: string;
}

export interface FeatureData {
  title: string;
  description: string;
}

export interface LevelBadge {
  level: string;
  description: string;
  color: string;
}

export interface FaqData {
  id: number;
  question: string;
  answer: string;
}

export interface NavigationLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface ContactInfo {
  type: 'email' | 'phone';
  value: string;
  icon: React.ReactNode;
}

export interface LegalLink {
  name: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavigationLink[] | LegalLink[];
  color: string;
}
