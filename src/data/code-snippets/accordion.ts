// data/code-snippets/accordion.ts

// --- Single Item Examples ---

export const accordionTsCode = `import Accordion from "@/components/ui/accordion";

export default function Demo() {
  const items = [
    {
      title: 'How does React work?',
      content: 'React creates a virtual DOM in memory, instead of manipulating the browser\\'s DOM directly.',
    },
    {
      title: 'What are React components?',
      content: 'Components are the building blocks of any React application. They let you split the UI into independent, reusable pieces.',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Accordion items={items} />
    </div>
  );
}`;


export const accordionJsCode = `import Accordion from "@/components/ui/accordion";

export default function Demo() {
  const items = [
    {
      title: 'How does React work?',
      content: 'React creates a virtual DOM in memory, instead of manipulating the browser\\'s DOM directly.',
    },
    {
      title: 'What are React components?',
      content: 'Components are the building blocks of any React application. They let you split the UI into independent, reusable pieces.',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Accordion items={items} />
    </div>
  );
}`;

export const accordionNextjsCode = 'No Next.js specific code needed for single item Accordion.';


// --- Multiple Items Examples ---

export const accordionMultipleTsCode = `import Accordion from "@/components/ui/accordion";

export default function Demo() {
  const items = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'How does React work?',
      content: 'React creates a virtual DOM in memory, instead of manipulating the browser\\'s DOM directly.',
    },
    {
      title: 'What are React components?',
      content: 'Components are the building blocks of any React application. They let you split the UI into independent, reusable pieces.',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Accordion items={items} allowMultiple />
    </div>
  );
}`;


export const accordionMultipleJsCode = `import Accordion from "@/components/ui/accordion";

export default function Demo() {
  const items = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'How does React work?',
      content: 'React creates a virtual DOM in memory, instead of manipulating the browser\\'s DOM directly.',
    },
    {
      title: 'What are React components?',
      content: 'Components are the building blocks of any React application. They let you split the UI into independent, reusable pieces.',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Accordion items={items} allowMultiple />
    </div>
  );
}`;

export const accordionMultipleNextjsCode = 'No Next.js specific code needed for multiple item Accordion.';
