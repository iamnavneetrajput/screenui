// --- Main Examples ---

export const buttonTsCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return <Button variant="default">Primary</Button>;
};`;

export const buttonJsCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return <Button variant="default">Primary</Button>;
};`;

export const sizebuttonTsCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return  <Button size="lg">Large</Button>;
};`;

export const sizebuttonJsCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return  <Button size="lg">Large</Button>;
};`;

export const iconbuttonTsCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return  
   
  <Button variant="outline" icon={<ExternalLink className="h-4 w-4" />}>
  Open Link
  </Button>;
           
};`;

export const iconbuttonJsCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return   

  <Button variant="outline" icon={<ExternalLink className="h-4 w-4" />}>
  Open Link
  </Button>;
            
};`;

export const loadingbuttonTsCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return  

  <Button loading variant="destructive" onClick={handleLoadingTest}>
  Delete
  </Button>
           
};`;

export const loadingbuttonJsCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return   

  <Button loading variant="destructive" onClick={handleLoadingTest}>
  Delete
  </Button>
            
};`;


export const DependencyCommand = `npm install lucide-react
npm install class-variance-authority`;
export const CommandTs = "npx screenui add button --lang ts --path src/components/ui";
export const CommandJs = "npx screenui add button --lang js --path src/components/ui";

export const Description = "Buttons support multiple variants and sizes. Use the appropriate variant based on the importance of the action.";
export const Component = "Button";
export const Title = "Button Variants";
export const Lastupdated = "Jul 17";
