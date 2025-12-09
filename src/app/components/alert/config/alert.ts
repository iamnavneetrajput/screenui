// --- Main Examples ---
export const TsCode1 = `
import { Alert, AlertTitle, AlertDescription, AlertActions } from '@/components/Alert';
import { Button } from '@/components/Button';
export function Example() {
  return (
     <Alert color="success" showIcon>
            <AlertTitle>Payment successful</AlertTitle>
            <AlertDescription>Your payment has been processed.</AlertDescription>
            <AlertActions>
              <Button className='cursor-pointer' variant="soft">View Receipt</Button>
              <Button className='cursor-pointer' variant="soft">Download</Button>
            </AlertActions>
      </Alert>
);
}
`;

export const TsCode2 = `
import { Alert, AlertTitle, AlertDescription, AlertActions } from '@/components/Alert';
export function Example() {
  return (
          <Alert color="info" showIcon dismissible>
            <AlertTitle>New features available</AlertTitle>
            <AlertDescription>Check out the changelog...</AlertDescription>
          </Alert>
);
}
`;

export const TsCode3 = `
import { Alert, AlertTitle, AlertDescription, AlertActions } from '@/components/Alert';
export function Example() {
return (
          <Alert variant="outlined" color="warning" showIcon>
            <AlertTitle>Build warning detected</AlertTitle>
            <AlertDescription>
              <ul>
                <li>Unused CSS classes</li>
                <li>Large bundle size</li>
              </ul>
            </AlertDescription>
          </Alert>
);
}
`;

export const TsCode4 = `
import { Alert, AlertTitle, AlertDescription, AlertActions } from '@/components/Alert';
import { Button } from '@/components/Button';
export function Example() {
return (
        <Alert variant="soft" color="success" showIcon>
            <AlertTitle>Item added to cart</AlertTitle>
            <AlertActions>
              <Button variant="link" className='cursor-pointer'>View Cart</Button>
              <Button variant="link" className='cursor-pointer'>Continue Shopping</Button>
            </AlertActions>
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
