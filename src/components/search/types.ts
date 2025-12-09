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
export interface ComponentItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  href: string;     // required
  isNew?: boolean;  // optional
  popular?: boolean; // optional
}


// Tool item interface
export interface SocialItem {
  href: string;
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

export interface CommandSearchProps {
  components: string[];
  onSelectComponent: (component: string) => void;
}