import { Avatar } from "@/packages/Avatar";

export default function AvatarChatDemo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="lg" name="Sarah" status="online" notification={3} />
      <div>
        <h3>Sarah Chen</h3>
        <p>Hey! How's it going?</p>
      </div>
    </div>
  )
    ;
}
