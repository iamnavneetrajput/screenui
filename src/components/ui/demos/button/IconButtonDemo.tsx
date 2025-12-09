import { Button } from "@/packages/Button";
import { ArrowRight } from "lucide-react";

export default function IconButtonDemo() {
  return (
    <Button icon={<ArrowRight />} iconPosition="right">
      Next
    </Button>
  );
}
