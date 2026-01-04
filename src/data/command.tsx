//components/data/command.tsx
import { Icons } from '@/utils/icons';
import { TeamMember, NavigationItem, ComponentItem, SocialItem } from '../components/search/types';

export const Components_ITEMS: ComponentItem[] = [

  // Elements

  {
    id: 'button',
    title: 'Button',
    description:
      'Buttons trigger actions such as submitting forms, opening dialogs, or performing operations.',
    icon: <Icons.power size={16} />,
    category: 'Elements',
    href: '/components/button',
    popular: true
  },
  {
    id: 'badge',
    title: 'Badge',
    description:
      'Badges show small counts or status indicators such as unread messages or notifications.',
    icon: <Icons.badge size={16} />,
    category: 'Elements',
    href: '/components/badge'
  },
  {
    id: 'avatar',
    title: 'Avatar',
    description:
      'Avatars represent users with images, initials, or placeholders.',
    icon: <Icons.userCircle size={16} />,
    category: 'Elements',
    href: '/components/avatar',
    // isNew: true
  },


  // Forms

  {
    id: 'fileupload',
    title: 'File Upload',
    description:
      'Allows users to upload one or more files from their device.',
    icon: <Icons.fileUpload size={16} />,
    category: 'Forms',
    href: '/components/fileupload'
  },
  {
    id: 'checkbox',
    title: 'Checkbox',
    description:
      'Checkboxes allow selecting one or multiple items.',
    icon: <Icons.squareCheck size={16} />,
    category: 'Forms',
    href: '/components/checkbox'
  },
  {
    id: 'input',
    title: 'Input',
    description:
      'Text inputs collect user information such as names, emails, or passwords.',
    icon: <Icons.inputCursorText size={16} />,
    category: 'Forms',
    href: '/components/input'
  },
  {
    id: 'textarea',
    title: 'Textarea',
    description:
      'A multi-line text input for long-form content such as comments or descriptions.',
    icon: <Icons.notepadTextDashed size={16} />,
    category: 'Forms',
    href: '/components/textarea'
  },
  {
    id: 'select',
    title: 'Select',
    description:
      'A dropdown for choosing one value from a list of options.',
    icon: <Icons.chevronDown size={16} />,
    category: 'Forms',
    href: '/components/select'
  },
  {
    id: 'toggle',
    title: 'Toggle',
    description:
      'A switch UI to enable or disable a setting instantly.',
    icon: <Icons.toggle size={16} />,
    category: 'Forms',
    href: '/components/toggle'
  },


  // Feedback

  {
    id: 'alert',
    title: 'Alert',
    description:
      'Lightweight banners used to communicate warnings, errors, or success messages.',
    icon: <Icons.badgeAlert size={16} />,
    category: 'Feedback',
    href: '/components/alert',
    popular: true
  },


  // Overlay

  {
    id: 'modal',
    title: 'Modal',
    description:
      'Overlays used to display dialogs, confirmations, and forms without leaving the page.',
    icon: <Icons.layoutGrid size={16} />,
    category: 'Overlay',
    href: '/components/modal'
  },


  // Layout

  {
    id: 'accordion',
    title: 'Accordion',
    description:
      'Expandable sections that help organize and reduce page clutter.',
    icon: <Icons.list size={16} />,
    category: 'Layout',
    href: '/components/accordion'
  },
  {
    id: 'card',
    title: 'Card',
    description:
      'Flexible containers for grouping related content and actions.',
    icon: <Icons.IdCard size={16} />,
    category: 'Layout',
    href: '/components/card'
  },
  {
    id: 'pagination',
    title: 'Pagination',
    description:
      'Navigation used to move through large sets of content.',
    icon: <Icons.pagination size={16} />,
    category: 'Layout',
    href: '/components/pagination'
  },
    {
    id: 'stepcard',
    title: 'Step Card',
    description:
    'A step-based layout for guiding users through multi-step processes.',
    icon: <Icons.workflow size={16} />,
    category: 'Layout',
    href: '/components/stepcard',
    isNew:true,
  },


  // Data Display

  {
    id: 'table',
    title: 'Table',
    description:
      'Displays structured data in rows and columns with sorting and interactive controls.',
    icon: <Icons.table size={16} />,
    category: 'Data Display',
    href: '/components/table',
    // popular: true
  },


  // Navigation


  {
    id: 'tab',
    title: 'Tabs',
    description:
      'Tabbed navigation to switch between different views or sections of related content.',
    icon: <Icons.panelTop size={16} />,
    category: 'Navigation',
    href: '/components/tab',
    isNew: true,
  }
];

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
    id: 'templates',
    title: 'Templates',
    description: 'Discover new features and updates',
    icon: <Icons.layoutGrid size={16} />,
    shortcut: '⌘A',
    href: '/templates'
  },
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