import { GithubIcon, FileText, Settings, User, PenTool as Tool } from 'lucide-react';
import { TeamMember, NavigationItem, Components, SocialItem } from '../ui/command-search/types';
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
    href: '/'
  },
  {
    id: 'docs',
    title: 'Documentation',
    description: 'Read our API and usage guides',
    icon: <FileText size={16} />,
    shortcut: '⌘D',
    href: '/docs'
  },
  {
    id: 'library',
    title: 'Library',
    description: 'Browse our component library',
    icon: <FileText size={16} />,
    shortcut: '⌘L',
    href: '/library'
  },
  {
    id: 'colors',
    title: 'Colors',
    description: 'Explore our color palette',
    icon: <FileText size={16} />,
    shortcut: '⌘C',
    href: '/color'
  },
  {
    id: 'awaken',
    title: 'Awaken',
    description: 'Discover new features and updates',
    icon: <FileText size={16} />,
    shortcut: '⌘A',
    href: '/awaken'
  },
];

export const Components_ITEMS: Components[] = [
  {
    id: 'button',
    title: 'Button',
    description: '',
    icon: <FileText size={16} />,
    category: 'Elements',
    href: '/library?component=elements/button'
  },
  {
    id: 'badge',
    title: 'Badge',
    description: '',
    icon: <FileText size={16} />,
    category: 'Elements',
    href: '/library?component=elements/badge'
  },
  {
    id: 'alert',
    title: 'Alert',
    description: '',
    icon: <Settings size={16} />,
    category: 'Feedback',
    href: '/library?component=feedback/alert'
  },
  {
    id: 'card',
    title: 'Card',
    description: '',
    icon: <Settings size={16} />,
    category: 'Layout',
    href: '/library?component=layout/card'
  },
  {
    id: 'setting',
    title: 'Setting',
    description: 'Open setting',
    icon: <Settings/>,
    category: 'ui',
  }
];

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    id: 'github',
    title: 'Github',
    description: 'Code sharing platform',
    icon: <GithubIcon size={16} />,
    category: 'Development',
    link: 'https://github.com/iamnavneetrajput'
  },

];

export const MOCK_RECENT_SEARCHES = [
  'Dashboard analytics',
  'User settings',
];