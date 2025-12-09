import { Avatar } from "@/packages/Avatar";

export default function AvatarStatusDemo() {
  return (
    <div className="flex items-center gap-3">
            <Avatar name="Sarah" status="online" />
            <Avatar name="Jen" status="busy" />
            <Avatar name="Alex" status="away" />
            <Avatar name="John" status="offline" />
    </div>
  )
    ;
}
