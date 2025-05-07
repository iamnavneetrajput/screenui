// Status types for team members
export type StatusType = 'available' | 'away' | 'in-meeting';

// Team member interface
export interface TeamMember {
  id: string;
  name: string;
  status: StatusType;
  initials: string;
}

// Navigation item interface
export interface NavigationItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  shortcut?: string;
  href?: string;
}

// Action item interface
export interface Components {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  href?: string; // Added href for navigation1
}

// Tool item interface
export interface SocialItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  link: string;
}

export interface CommandSearchProps {
  components: string[];
  onSelectComponent: (component: string) => void;
}