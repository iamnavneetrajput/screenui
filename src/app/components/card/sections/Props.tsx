import React from "react";
import { PropsTable } from "@/components/ui/main/PropsTable";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const CardPropsData: PropItem[] = [
  { prop: "variant", type: "'elevated' | 'outlined' | 'filled' | 'ghost'", default: "'elevated'", description: "Visual style for the card surface." },

  { prop: "padding", type: "'none' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Controls internal padding of the card." },

  { prop: "interactive", type: "boolean", default: "false", description: "Enables keyboard + click interactions when onClick is provided." },

  { prop: "hover", type: "boolean", default: "false", description: "Adds an additional hover shadow layer." },

  { prop: "fullWidth", type: "boolean", default: "false", description: "Stretches card to fill container width." },

  { prop: "as", type: "'div' | 'article' | 'section'", default: "'div'", description: "Polymorphic root element." },

  { prop: "className", type: "string", description: "Custom classes applied to the card container." },
];

const CardHeaderPropsData: PropItem[] = [
  { prop: "spacing", type: "'none' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Vertical spacing below the header." },
  { prop: "align", type: "'start' | 'center' | 'end' | 'between'", default: "'start'", description: "Alignment of header content." },
  { prop: "as", type: "'div' | 'header'", default: "'div'", description: "Element to render as." },
  { prop: "className", type: "string", description: "Overrides styling of the header container." }
];

const CardTitlePropsData: PropItem[] = [
  { prop: "size", type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", default: "'md'", description: "Heading size scale." },
  { prop: "truncate", type: "boolean", default: "false", description: "Prevents title from wrapping onto multiple lines." },
  { prop: "as", type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'", default: "'h3'", description: "Element to render as." },
  { prop: "className", type: "string", description: "Overrides title styling." },
];

const CardDescriptionPropsData: PropItem[] = [
  { prop: "size", type: "'xs' | 'sm' | 'md' | 'lg'", default: "'sm'", description: "Font size of the description text." },
  { prop: "spacing", type: "'none' | 'xs' | 'sm' | 'md' | 'lg'", default: "'sm'", description: "Margin-top spacing relative to the title." },
  { prop: "truncate", type: "boolean", default: "false", description: "Prevents text from wrapping." },
  { prop: "as", type: "'p' | 'span' | 'div'", default: "'p'", description: "Element to render as." },
  { prop: "className", type: "string", description: "Styling override." },
];

const CardContentPropsData: PropItem[] = [
  { prop: "size", type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", description: "Text size inside the content body." },
  { prop: "spacing", type: "'none' | 'sm' | 'md' | 'lg'", default: "'none'", description: "Vertical spacing between child elements." },
  { prop: "as", type: "'div' | 'section'", default: "'div'", description: "Element wrapper type." },
  { prop: "className", type: "string", description: "Styling override." },
];

const CardFooterPropsData: PropItem[] = [
  { prop: "spacing", type: "'none' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Margin-top relative to content." },
  { prop: "align", type: "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'", default: "'start'", description: "Flex alignment of footer content." },
  { prop: "direction", type: "'row' | 'col'", default: "'row'", description: "Layout direction of footer items." },
  { prop: "gap", type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'sm'", description: "Spacing between footer elements." },
  { prop: "wrap", type: "boolean", default: "false", description: "Allows flex wrapping if true." },
  { prop: "as", type: "'div' | 'footer'", default: "'div'", description: "Element to render as." },
  { prop: "className", type: "string", description: "Styling override." }
];

const CardImagePropsData: PropItem[] = [
  { prop: "height", type: "'sm' | 'md' | 'lg' | 'xl' | 'auto'", default: "'md'", description: "Fixed height or auto." },
  { prop: "aspectRatio", type: "'square' | 'video' | 'auto'", default: "'auto'", description: "Constrains image aspect ratio." },
  { prop: "position", type: "'top' | 'center' | 'bottom'", default: "'center'", description: "Object-fit alignment." },
  { prop: "alt", type: "string", description: "Image alt text." },
  { prop: "loading", type: "'lazy' | 'eager'", default: "'lazy'", description: "Browser image loading behavior." },
  { prop: "className", type: "string", description: "Styling override." }
];

const CardDividerPropsData: PropItem[] = [
  { prop: "spacing", type: "'none' | 'sm' | 'md' | 'lg'", default: "'md'", description: "Vertical spacing around the divider." },
  { prop: "orientation", type: "'horizontal' | 'vertical'", default: "'horizontal'", description: "Divider direction." },
  { prop: "className", type: "string", description: "Styling override." },
];

export function CardPropsTable() {
  return (
    <ExpandSection previewHeight={400}>
      <main className="min-h-screen w-full flex flex-col gap-12 mx-auto">

        <PropsTable title="Card Properties" propsData={CardPropsData} description="Root container properties for the Card component." />

        <PropsTable title="CardHeader Properties" propsData={CardHeaderPropsData} description="Header section of the card." />

        <PropsTable title="CardTitle Properties" propsData={CardTitlePropsData} description="Heading/title text inside card header." />

        <PropsTable title="CardDescription Properties" propsData={CardDescriptionPropsData} description="Supporting text below the title." />

        <PropsTable title="CardContent Properties" propsData={CardContentPropsData} description="Main content section of the card." />

        <PropsTable title="CardFooter Properties" propsData={CardFooterPropsData} description="Footer actions/content area." />

        <PropsTable title="CardImage Properties" propsData={CardImagePropsData} description="Image utility component for cards." />

        <PropsTable title="CardDivider Properties" propsData={CardDividerPropsData} description="Visual separator for card sections." />

      </main>
    </ExpandSection>
  );
}
