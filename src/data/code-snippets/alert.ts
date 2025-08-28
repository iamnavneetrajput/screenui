// --- Main Examples ---

export const alertTsCode = `import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export function Demo() {
  return 
  <Alert variant="success" dismissible>
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your changes have been saved.
  </AlertDescription>
</Alert>
  ;
};`;

export const alertJsCode = `import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export function Demo() {
  return 
  <Alert variant="success" dismissible>
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your changes have been saved.
  </AlertDescription>
</Alert>
  ;
};`;


export const CommandTs = "npx screenui@latest add alert --lang ts --path src/components/ui";
export const CommandJs = "npx screenui@latest add alert --lang js --path src/components/ui";

export const Description = "Alerts are used to provide feedback to users about the status of an action or process. They can be dismissible and come in various variants to indicate different states.";
export const Component = "Alert";
export const Title = "Alert";
export const Lastupdated = "Aug 1";
