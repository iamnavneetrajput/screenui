import { MainLayout } from '@/components/layout/main-layout';
import { ComponentHeader } from '@/app/library/component/component-header';
import { ComponentDemo } from '@/app/library/component/component-demo';
import Accordion from '@/components/ui/Accordion';

const accordionTsCode = `import Accordion from "@/components/ui/accordion";

export default function Demo() {
  const items = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'How does React work?',
      content: 'React creates a virtual DOM in memory, instead of manipulating the browser\'s DOM directly.',
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

const accordionJsCode = `import Accordion from "@/components/ui/accordion";

export default function Demo() {
  const items = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'How does React work?',
      content: 'React creates a virtual DOM in memory, instead of manipulating the browser\'s DOM directly.',
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

const accordionNextjsCode = `import Accordion from "@/components/ui/accordion";

export default function Demo() {
  const items = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'How does React work?',
      content: 'React creates a virtual DOM in memory, instead of manipulating the browser\'s DOM directly.',
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

const items = [
  {
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces.',
  },
  {
    title: 'How does React work?',
    content: 'React creates a virtual DOM in memory, instead of manipulating the browser\'s DOM directly.',
  },
  {
    title: 'What are React components?',
    content: 'Components are the building blocks of any React application. They let you split the UI into independent, reusable pieces.',
  },
];


export default function ButtonPage() {

  return (
    <MainLayout>
      <div className="pt-12 md:p-10 max-w-5xl mx-auto space-y-10">
        <ComponentHeader
          title="Accordion"
          description="Accordions are used to display collapsible content panels for presenting information in a limited amount of space. They are useful for FAQs, menus, and other content that can be expanded or collapsed."
        />

        <ComponentDemo
          title="Accordion with Single Item"
          description="This example shows how to use the Accordion component with a single item that can be expanded or collapsed."
          component="Accordion"
          dependencyCommand="npm install lucide-react"
          npmCommand="screenui add accordion --lang js --path src/components/ui"
          tsCode={accordionTsCode}
          jsCode={accordionJsCode}
          nextjsCode={accordionNextjsCode}
        >
          <div className="flex flex-wrap gap-4">
            <Accordion items={items} />
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Accordion with Multiple Items"
          description="This example shows how to use the Accordion component with multiple items that can be expanded or collapsed."
          component="Accordion"
          dependencyCommand=""
          npmCommand=""
          tsCode={`import Accordion from "@/components/ui/accordion";
                    export default function Demo() {
                     const items = [
                     {
                                title: "What is React?",
                                content: "React is a JavaScript library for building user interfaces.",
                            },
                            {
                                title: "How does React work?",
                                content: "React creates a virtual DOM in memory, instead of manipulating the browser's DOM directly.",
                            },
                            {
                                title: "What are React components?",
                                content: "Components are the building blocks of any React application. They let you split the UI into independent, reusable pieces.",
                            },
                        ];
                        return (
                            <div className="max-w-2xl mx-auto p-6">
                            <Accordion items={items} allowMultiple />
                        </div>
                    }`}
          jsCode={accordionJsCode}
          nextjsCode={accordionNextjsCode}
        >
          <div className="flex flex-wrap gap-4">
            <Accordion items={items} allowMultiple />
          </div>
        </ComponentDemo>

        <div className="border border-dashed border-[hsl(var(--border))]  rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Usage Notes</h2>
          <p className="text-muted-foreground mb-4">
            Accordions are useful for organizing content in a way that allows users to focus on one section at a time. They can help reduce clutter and improve the user experience by allowing users to expand or collapse sections as needed.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Use <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Accordion items={'{items}'}</code> to show one item at a time </li>
            <li>Use <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Accordion items={'{items}'} allowMultiple </code> to show multiple items at a time</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}