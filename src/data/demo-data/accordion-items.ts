// data/demo-data/accordion-items.ts

export type AccordionItem = {
  title: string;
  content: string;
};

export const accordionItems: AccordionItem[] = [
  {
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces.',
  },
  {
    title: 'How does React work?',
    content:
      "React creates a virtual DOM in memory, instead of manipulating the browser's DOM directly.",
  },
  {
    title: 'What are React components?',
    content:
      'Components are the building blocks of any React application. They let you split the UI into independent, reusable pieces.',
  },
];
