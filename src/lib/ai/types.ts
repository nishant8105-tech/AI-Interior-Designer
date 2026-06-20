export interface RoomAnalysis {
  designScore: number;
  layoutScore: number;
  lightingScore: number;
  storageScore: number;
  styleScore: number;
  spaceUtilizationScore: number;
  visualBalanceScore: number;
  findings: Finding[];
  recommendations: Recommendation[];
}

export interface Finding {
  category: string;
  issue: string;
  severity: 'low' | 'medium' | 'high';
}

export interface Recommendation {
  category: string;
  suggestion: string;
  impact: 'low' | 'medium' | 'high';
  estimatedCost: string;
}

export interface DesignGoal {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DesignStyle {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface DesignReport {
  summary: string;
  improvements: Improvement[];
  budgetEstimates: BudgetEstimate[];
  shoppingSuggestions: ShoppingItem[];
  newScore: number;
}

export interface Improvement {
  title: string;
  description: string;
  category: string;
}

export interface BudgetEstimate {
  tier: string;
  range: string;
  description: string;
}

export interface ShoppingItem {
  item: string;
  priority: 'must-have' | 'recommended' | 'optional';
  estimatedPrice: string;
  description: string;
}

export interface RoomType {
  id: string;
  label: string;
}

export const ROOM_TYPES: RoomType[] = [
  { id: 'bedroom', label: 'Bedroom' },
  { id: 'living_room', label: 'Living Room' },
  { id: 'office', label: 'Office' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'bathroom', label: 'Bathroom' },
  { id: 'dining_room', label: 'Dining Room' },
  { id: 'studio', label: 'Studio Apartment' },
];

export const DESIGN_GOALS: DesignGoal[] = [
  { id: 'luxury', title: 'Luxury Upgrade', description: 'Make room look luxurious', icon: '✦' },
  { id: 'space', title: 'Feel Larger', description: 'Make room feel larger', icon: '◎' },
  { id: 'productivity', title: 'Productivity', description: 'Improve productivity', icon: '⚡' },
  { id: 'comfort', title: 'Comfort', description: 'Improve comfort', icon: '◈' },
  { id: 'storage', title: 'Storage', description: 'Improve storage', icon: '▤' },
  { id: 'modern', title: 'Modernize', description: 'Modernize the space', icon: '◇' },
  { id: 'resale', title: 'Resale Appeal', description: 'Increase resale value', icon: '▲' },
];

export const DESIGN_STYLES: DesignStyle[] = [
  { id: 'modern_luxury', title: 'Modern Luxury', description: 'Clean lines with premium materials', image: '/styles/modern-luxury.jpg' },
  { id: 'scandinavian', title: 'Scandinavian', description: 'Minimal, functional, natural', image: '/styles/scandinavian.jpg' },
  { id: 'japandi', title: 'Japandi', description: 'Japanese-Scandinavian fusion', image: '/styles/japandi.jpg' },
  { id: 'minimalist', title: 'Minimalist', description: 'Less is more', image: '/styles/minimalist.jpg' },
  { id: 'contemporary', title: 'Contemporary', description: 'Current trends and styles', image: '/styles/contemporary.jpg' },
  { id: 'industrial', title: 'Industrial', description: 'Raw, urban, exposed elements', image: '/styles/industrial.jpg' },
  { id: 'mid_century', title: 'Mid-Century Modern', description: 'Retro with organic forms', image: '/styles/mid-century.jpg' },
  { id: 'coastal', title: 'Coastal', description: 'Light, airy, beach-inspired', image: '/styles/coastal.jpg' },
  { id: 'bohemian', title: 'Bohemian', description: 'Eclectic, colorful, layered', image: '/styles/bohemian.jpg' },
  { id: 'traditional', title: 'Traditional Luxury', description: 'Classic elegance and detail', image: '/styles/traditional.jpg' },
];
