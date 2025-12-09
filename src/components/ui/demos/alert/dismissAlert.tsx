
import { Alert, AlertTitle} from '@/packages/Alert';
export default function DismissAlert() {
  return (
          <Alert variant='glass' color="info" showIcon dismissible>
            <AlertTitle>New features available</AlertTitle>
          </Alert>
);
}
