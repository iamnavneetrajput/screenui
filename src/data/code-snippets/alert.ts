// --- Main Examples ---
export const TsCode1 = `
import { Alert, AlertTitle, AlertDescription } from "@/components/Alert";
export function Example() {
  return (
    <Alert dismissible className="border-blue-500 text-blue-700">
      <AlertTitle>Info</AlertTitle>
      <AlertDescription>This is an informational alert.</AlertDescription>
    </Alert>
);
}
`;

export const TsCode2 = `
import { Alert, AlertTitle, AlertDescription } from "@/components/Alert";
export function Example() {
return (
<Alert 
  variant="filled" 
  className="bg-red-500 text-white" 
  dismissible
>
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong!</AlertDescription>
</Alert>
);
}
`;

export const TsCode3 = `
import { Alert, AlertTitle, AlertDescription } from "@/components/Alert";
export function Example() {
return (
<Alert 
  variant="soft" 
  className="bg-green-100 text-green-800 border-green-200"
>
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Operation completed successfully.</AlertDescription>
</Alert>
);
}
`;

export const TsCode4 = `
import { Alert, AlertTitle, AlertDescription } from "@/components/Alert";
export function Example() {
return (
<Alert 
  variant="outlined" 
  className="border-yellow-400 text-yellow-700 hover:bg-yellow-50"
>
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Please review your settings.</AlertDescription>
</Alert>
);
}
`;

// Reuse TS code for JS
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;
export const JsCode3 = TsCode3;
export const JsCode4 = TsCode4;

// NPM Commands
export const CommandTs = "npx screenui add alert --lang ts --path src/components";
export const CommandJs = "npx screenui add alert --lang js --path src/components";

// Component Metadata
export const Component = "Alert";
export const Title = "Alert";
export const Description = "Alerts display important messages to the user and can be dismissible or contain icons.";
export const Lastupdated = "2025-09-19";
export const Version = "1.0.0";
