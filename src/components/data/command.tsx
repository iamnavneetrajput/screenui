import { GithubIcon, FileText, PenTool as Tool } from 'lucide-react';
import { TeamMember, NavigationItem, Components, SocialItem } from '../search/types';

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
    id: 'components',
    title: 'Components',
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
    href: '/components/button'
  },
  {
    id: 'alert',
    title: 'Alert',
    description: 'Alerts display short, important messages that attract the user`s attention without interrupting their task.',
    icon: <FileText size={16} />,
    category: 'Feedback',
    href: '/components/alert'
  },
  { 
    id: 'accordion',
    title: 'Accordion',
    description: 'Accordions are used to display collapsible content panels for presenting information in a limited amount of space.',
    icon: <FileText size={16} />,
    category: 'Layout',
    href: '/components/accordion'
  }
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