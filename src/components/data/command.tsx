import { Command, FileText, Settings, User, PenTool as Tool } from 'lucide-react';
import { TeamMember, NavigationItem, Components, ToolItem } from '../ui/command-search/types';
import { componentCategories } from '@/components/data/components';

export const MOCK_TEAM_MEMBERS: TeamMember[] = [
  { id: 'n', name: 'Navneet', status: 'available', initials: 'N' },
];

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { 
    id: 'home',
    title: 'Screen/UI',
    description: 'Explore our components and documentation',
    icon: <FileText size={16} />,
    shortcut: '⌘H',
    href: '/' // Added href for navigation
  },
  {
    id: 'docs',
    title: 'Documentation',
    description: 'Read our API and usage guides',
    icon: <FileText size={16} />,
    shortcut: '⌘D',
    href: '/docs' // Added href for navigation
  },
  {
    id: 'library',
    title: 'Library',
    description: 'Browse our component library',
    icon: <FileText size={16} />,
    shortcut: '⌘L',
    href: '/library' // Added href for navigation
  },
  {
    id: 'colors',
    title: 'Colors',
    description: 'Explore our color palette',
    icon: <FileText size={16} />,
    shortcut: '⌘C',
    href: '/color' // Added href for navigation
  },
  {
    id: 'awaken',
    title: 'Awaken',
    description: 'Discover new features and updates',
    icon: <FileText size={16} />,
    shortcut: '⌘A',
    href: '/awaken' // Added href for navigation
  },
];

export const Components_ITEMS: Components[] = [
  {
    id: 'button',
    title: 'Button',
    description: 'A clickable button component',
    icon: <FileText size={16} />,
    category: 'UI',
    href: '/library?component=elements/button'
  },
  {
    id: 'invite-team',
    title: 'Invite Team Member',
    description: 'Send an invitation to join your team',
    icon: <User size={16} />,
    category: 'Team'
  },
  {
    id: 'system-preferences',
    title: 'System Preferences',
    description: 'Modify system-wide settings',
    icon: <Settings size={16} />,
    category: 'System'
  }
];

export const TOOL_ITEMS: ToolItem[] = [
  {
    id: 'code-generator',
    title: 'Code Generator',
    description: 'Generate boilerplate code',
    icon: <Tool size={16} />,
    category: 'Development'
  },
  {
    id: 'api-tester',
    title: 'API Tester',
    description: 'Test API endpoints',
    icon: <Tool size={16} />,
    category: 'Development'
  },
  {
    id: 'database',
    title: 'Database Manager',
    description: 'Manage database connections',
    icon: <Tool size={16} />,
    category: 'Data'
  }
];

export const MOCK_RECENT_SEARCHES = [
  'Dashboard analytics',
  'User settings',
];