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
  icon: string;
  title: string;
  description: string;
}

export interface LevelBadge {
  level: string;
  description: string;
  color: string;
}

export interface HeroData {
  title: string;
  headline: string;
  highlight: string;
  description: string;
}