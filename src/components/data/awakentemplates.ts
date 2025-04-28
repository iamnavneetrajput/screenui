import { Template } from '@/types';

export const templates: Template[] = [
  {
    id: '1',
    title: 'Modern Portfolio',
    category: 'portfolio',
    url: 'https://screenui.vercel.app/',
    description: 'A sleek, modern portfolio template for developers and designers.',
    features: ['Responsive design', 'Dark mode', 'Project showcase', 'Contact form'],
    isFeatured: true
  },
  {
    id: '2',
    title: 'E-commerce Store',
    category: 'ecommerce',
    url: 'https://bolt.new',
    description: 'Complete e-commerce solution with product listings and cart functionality.',
    features: ['Product catalog', 'Shopping cart', 'Checkout process', 'User accounts'],
    isFeatured: false
  },
  {
    id: '3',
    title: 'Minimal Blog',
    category: 'blog',
    url: 'https://chat.openai.com',
    description: 'Clean and minimal blog template with excellent typography.',
    features: ['Article layout', 'Category filtering', 'Search functionality', 'Newsletter signup'],
    isFeatured: false
  },
  {
    id: '4',
    title: 'Agency Landing',
    category: 'landing',
    url: 'https://github.com',
    description: 'Professional landing page template for agencies and startups.',
    features: ['Hero section', 'Services showcase', 'Team profiles', 'Testimonials'],
    isFeatured: false
  },
  {
    id: '5',
    title: 'Analytics Dashboard',
    category: 'dashboard',
    url: 'https://stripe.com',
    description: 'Comprehensive analytics dashboard with charts and data visualization.',
    features: ['Data charts', 'User management', 'Report generation', 'Real-time updates'],
    isFeatured: false
  },
  {
    id: '6',
    title: 'Photo Portfolio',
    category: 'photo',
    url: 'https://unsplash.com',
    description: 'Beautiful portfolio template for photographers and visual artists.',
    features: ['Gallery layout', 'Lightbox viewer', 'Category filtering', 'Contact information'],
    isFeatured: false
  },
  {
    id: '7',
    title: 'Professional Resume',
    category: 'resume',
    url: 'https://www.linkedin.com',
    description: 'Clean and professional resume template for job seekers.',
    features: ['Skills section', 'Experience timeline', 'Education details', 'Contact information'],
    isFeatured: false
  },
  {
    id: '8',
    title: 'SaaS Website',
    category: 'landing',
    url: 'https://www.figma.com',
    description: 'Modern SaaS website template with pricing plans and feature showcase.',
    features: ['Feature highlights', 'Pricing tables', 'FAQ section', 'Call-to-action buttons'],
    isFeatured: false
  }
];