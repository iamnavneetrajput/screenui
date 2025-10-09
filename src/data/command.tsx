//components/data/command.tsx
import { Icons } from '@/utils/icons';
import { TeamMember, NavigationItem, Components, SocialItem } from '../components/search/types';
import { Badge } from '@/components/ui/badge';

export const MOCK_TEAM_MEMBERS: TeamMember[] = [
  { id: 'n', name: 'Navneet', status: 'available', initials: 'N' },
];

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'home',
    title: 'Screen/UI',
    description: 'Explore our components and documentation',
    icon: <Icons.house size={16} />,
    shortcut: '⌘H',
    href: '/'
  },
  {
    id: 'docs',
    title: 'Documentation',
    description: 'Read our API and usage guides',
    icon: <Icons.fileText size={16} />,
    shortcut: '⌘D',
    href: '/docs'
  },
  {
    id: 'components',
    title: 'Components',
    description: 'Browse our component library',
    icon: <Icons.component size={16} />,
    shortcut: '⌘L',
    href: '/library'
  },
  {
    id: 'colors',
    title: 'Colors',
    description: 'Explore our color palette',
    icon: <Icons.palette size={16} />,
    shortcut: '⌘C',
    href: '/color'
  },
  {
    id: 'awaken',
    title: 'Awaken',
    description: 'Discover new features and updates',
    icon: <Icons.layoutGrid size={16} />,
    shortcut: '⌘A',
    href: '/awaken'
  },
];

export const Components_ITEMS: Components[] = [
  {
    id: 'button',
    title: 'Button',
    description: 'Buttons are used to trigger actions or events, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.',
    icon: <Icons.power size={16} />,
    category: 'Elements',
    href: '/components/button'
  },
  {
    id: 'badge',
    title: 'Badge',
    description: 'Badges are used to display small counts or status indicators, such as unread messages, notifications, or status labels.',
    icon: <Icons.badge size={16} />,
    category: 'Elements',
    href: '/components/badge'
  },
  {
    id: 'avatar',
    title: 'Avatar',
    description: 'Avatars are used to represent users or entities, typically displaying a profile picture or initials.',
    icon: <Icons.userCircle size={16} />,
    category: 'Elements',
    href: '/components/avatar'
  },
  {
    id: 'checkbox',
    title: 'Checkbox',
    description: 'Checkboxes allow users to select one or more options from a set. They are typically used in forms, settings, and filters.',
    icon: <Icons.squareCheck size={16} />,
    category: 'Forms',
    href: '/components/checkbox'
  },
  {
    id: 'alert',
    title: 'Alert',
    description: 'Alerts display short, important messages that attract the user`s attention without interrupting their task.',
    icon: <Icons.badgeAlert size={16} />,
    category: 'Feedback',
    href: '/components/alert'
  }
];

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    id: 'github',
    title: 'Github',
    description: 'Code sharing platform',
    icon: <Icons.github size={16} />,
    category: 'Development',
    href: 'https://github.com/iamnavneetrajput'
  },
  {
    id: 'instagram',
    title: 'Instagram',
    description: 'Photo and video sharing social network',
    icon: <Icons.instagram size={16} />,
    category: 'Social',
    href: 'https://www.instagram.com/thescreenui'
  }
];

export const MOCK_RECENT_SEARCHES = [
  'Dashboard analytics',
  'User settings',
];