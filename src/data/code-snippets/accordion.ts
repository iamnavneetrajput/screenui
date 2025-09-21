// src/data/code-snippets/accordion.ts

// --- TypeScript Examples ---
export const TsCode1 = `
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/Accordion";

export function Example() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that can be customized with Tailwind CSS.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It includes smooth expand/collapse animations out of the box.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
`;

export const TsCode2 = `
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/Accordion";

export function Example() {
  return (
    <Accordion type="multiple" variant="separated" size="lg" className="w-full">
      <AccordionItem value="features">
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent>
          Our product includes advanced analytics, real-time collaboration, 
          and enterprise-grade security features.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="pricing">
        <AccordionTrigger>Pricing</AccordionTrigger>
        <AccordionContent>
          We offer flexible pricing plans starting from $9/month with a 
          14-day free trial for all new users.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>Support</AccordionTrigger>
        <AccordionContent>
          24/7 customer support via chat, email, and phone. Plus comprehensive 
          documentation and video tutorials.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
`;

export const TsCode3 = `
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/Accordion";
import { Plus, Minus } from "lucide-react";

export function Example() {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const customIcon = (isOpen: boolean) => 
    isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />;

  return (
    <Accordion 
      type="multiple" 
      variant="ghost" 
      value={openItems}
      onValueChange={setOpenItems}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger icon={customIcon(openItems.includes("item-1"))}>
          Custom Icon Example
        </AccordionTrigger>
        <AccordionContent>
          This accordion uses custom plus/minus icons instead of the default chevron.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger hideIcon>
          No Icon Example
        </AccordionTrigger>
        <AccordionContent>
          This accordion item has no expand/collapse icon.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
`;

export const TsCode4 = `
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/Accordion";

export function Example() {
  return (
    <Accordion type="single" collapsible defaultValue="faq-1">
      <AccordionItem value="faq-1">
        <AccordionTrigger>How do I get started?</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p>Getting started is easy:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Create your free account</li>
              <li>Complete the onboarding tutorial</li>
              <li>Import your existing data</li>
              <li>Invite your team members</li>
            </ol>
            <p className="text-sm text-gray-500">
              Need help? Contact our support team anytime.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2" disabled>
        <AccordionTrigger>Coming Soon Feature</AccordionTrigger>
        <AccordionContent>
          This feature is currently under development.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent forceMount>
          We accept all major credit cards, PayPal, and bank transfers. 
          Enterprise customers can also set up invoicing.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
`;

export const TsCode5 = `
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/Accordion";

export function Example() {
  const [value, setValue] = React.useState<string>("");

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    // Track analytics
    console.log(\`Accordion opened: \${newValue}\`);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Currently open: {value || "None"}
      </p>
      
      <Accordion 
        type="single" 
        collapsible
        value={value}
        onValueChange={handleValueChange}
        className="border-2 border-blue-200 rounded-xl"
      >
        <AccordionItem value="terms">
          <AccordionTrigger className="text-blue-700 hover:bg-blue-50">
            Terms of Service
          </AccordionTrigger>
          <AccordionContent className="text-blue-600">
            Please read our terms of service carefully before using our platform.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="privacy">
          <AccordionTrigger className="text-blue-700 hover:bg-blue-50">
            Privacy Policy  
          </AccordionTrigger>
          <AccordionContent className="text-blue-600">
            Your privacy is important to us. Learn how we protect your data.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
`;

// --- JavaScript Examples ---
// Most examples are identical, so we reuse them
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;
export const JsCode3 = `
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/Accordion";
import { Plus, Minus } from "lucide-react";

export function Example() {
  const [openItems, setOpenItems] = React.useState([]);

  const customIcon = (isOpen) => 
    isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />;

  return (
    <Accordion 
      type="multiple" 
      variant="ghost" 
      value={openItems}
      onValueChange={setOpenItems}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger icon={customIcon(openItems.includes("item-1"))}>
          Custom Icon Example
        </AccordionTrigger>
        <AccordionContent>
          This accordion uses custom plus/minus icons instead of the default chevron.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger hideIcon>
          No Icon Example
        </AccordionTrigger>
        <AccordionContent>
          This accordion item has no expand/collapse icon.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
`;
export const JsCode4 = TsCode4;
export const JsCode5 = `
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/Accordion";

export function Example() {
  const [value, setValue] = React.useState("");

  const handleValueChange = (newValue) => {
    setValue(newValue);
    // Track analytics
    console.log(\`Accordion opened: \${newValue}\`);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Currently open: {value || "None"}
      </p>
      
      <Accordion 
        type="single" 
        collapsible
        value={value}
        onValueChange={handleValueChange}
        className="border-2 border-blue-200 rounded-xl"
      >
        <AccordionItem value="terms">
          <AccordionTrigger className="text-blue-700 hover:bg-blue-50">
            Terms of Service
          </AccordionTrigger>
          <AccordionContent className="text-blue-600">
            Please read our terms of service carefully before using our platform.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="privacy">
          <AccordionTrigger className="text-blue-700 hover:bg-blue-50">
            Privacy Policy  
          </AccordionTrigger>
          <AccordionContent className="text-blue-600">
            Your privacy is important to us. Learn how we protect your data.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
`;

// --- Commands ---
export const CommandTs = "npx screenui@latest add accordion --lang ts --path src/components";
export const CommandJs = "npx screenui@latest add accordion --lang js --path src/components";

// --- Meta Data ---
export const Component = "Accordion";
export const Title = "Accordion Component";
export const Description = "A fully-featured accordion component with support for single/multiple modes, custom styling variants, controlled/uncontrolled state, custom icons, disabled states, and smooth animations.";
export const Lastupdated = "2025-09-20";
export const Version = "1.0.0";