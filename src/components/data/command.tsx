import { GithubIcon, FileText, PenTool as Tool } from 'lucide-react';
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
    description: 'Buttons are used to trigger actions or events, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.',
    icon: <FileText size={16} />,
    category: 'Elements',
    href: '/library?component=elements/button'
  },
  {
    id: 'badge',
    title: 'Badge',
    description: 'Badges are small elements that represent a status, category, or count. They are commonly used in navigation, notifications, and labels.',
    icon: <FileText size={16} />,
    category: 'Elements',
    href: '/library?component=elements/badge'
  },
  {
    id: 'alert',
    title: 'Alert',
    description: 'Alerts display short, important messages that attract the user`s attention without interrupting their task.',
    icon: <FileText size={16} />,
    category: 'Feedback',
    href: '/library?component=feedback/alert'
  },
  {
    id: 'card',
    title: 'Card',
    description: 'Cards are flexible containers that group related content and actions. They can contain text, images, buttons, and other UI components.',
    icon: <FileText size={16} />,
    category: 'Layout',
    href: '/library?component=layout/card'
  },
];

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    id: 'github',
    title: 'Github',
    description: 'Code sharing platform',
    icon: <GithubIcon size={16} />,
    category: 'Development',
    href: 'https://github.com/iamnavneetrajput'
  },

];

export const MOCK_RECENT_SEARCHES = [
  'Dashboard analytics',
  'User settings',
];