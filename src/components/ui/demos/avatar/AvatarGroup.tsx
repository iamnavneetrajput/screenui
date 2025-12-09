import { Avatar, AvatarGroup } from "@/packages/Avatar";

export default function AvatarGroupDemo() {
    return (
        <AvatarGroup max={4}>
            <Avatar name="User 1" />
            <Avatar name="User 2" />
            <Avatar name="User 3" />
            <Avatar name="User 4" />
            <Avatar name="User 5" /> {/* Shows "+1" */}
        </AvatarGroup>
    )
        ;
}
