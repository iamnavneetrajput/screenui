import React from "react";
import { Avatar, AvatarGroup } from "@/packages/Avatar";

export default function AvatarVariants() {
  const imgSrc = "https://github.com/evilrabbit.png";
  
  return (
    <div>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Avatar Variants</h3>
          <p>Explore different avatar configurations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sizes */}
          <div className="space-y-4">
            <h4 className="font-medium">Sizes</h4>
            <div className="flex items-center space-x-4">
              <Avatar size="sm" src={imgSrc} />
              <Avatar size="md" src={imgSrc} />
              <Avatar size="lg" src={imgSrc} />
            </div>
          </div>

          {/* Shapes */}
          <div className="space-y-4">
            <h4 className="font-medium">Shapes</h4>
            <div className="flex items-center space-x-4">
              <Avatar shape="circle" src={imgSrc} />
              <Avatar shape="square" src={imgSrc} />
            </div>
          </div>

          {/* Clickable */}
          <div className="space-y-4">
            <h4 className="font-medium">Clickable</h4>
            <div className="flex items-center space-x-4">
              <Avatar clickable src={imgSrc} />
            </div>
          </div>

          {/* With Ring */}
          <div className="space-y-4">
            <h4 className="font-medium">With Ring</h4>
            <div className="flex items-center space-x-4">
              <Avatar src={imgSrc} ring={true} ringColor="ring-blue-500" />
              <Avatar src={imgSrc} ring={true} ringColor="ring-purple-500" />
              <Avatar src={imgSrc} ring={true} ringColor="ring-green-500" />
            </div>
          </div>

          {/* Status Indicators */}
          <div className="space-y-4">
            <h4 className="font-medium">Status Indicators</h4>
            <div className="flex items-center space-x-4">
              <Avatar src={imgSrc} status="online" />
              <Avatar src={imgSrc} status="busy" />
              <Avatar src={imgSrc} status="away" />
              <Avatar src={imgSrc} status="offline" />
            </div>
          </div>

          {/* Notifications */}
          <div className="space-y-4">
            <h4 className="font-medium">Notifications</h4>
            <div className="flex items-center space-x-4">
              <Avatar src={imgSrc} notification={3} />
              <Avatar src={imgSrc} notification={12} />
              <Avatar src={imgSrc} notification={99} />
              <Avatar src={imgSrc} notification={true} />
            </div>
          </div>

          {/* Combined Features */}
          <div className="space-y-4">
            <h4 className="font-medium">Status + Notification</h4>
            <div className="flex items-center space-x-4">
              <Avatar src={imgSrc} status="online" notification={5} />
              <Avatar src={imgSrc} status="busy" notification={2} />
              <Avatar src={imgSrc} status="away" notification={true} />
            </div>
          </div>

          {/* Different Sizes with Features */}
          <div className="space-y-4">
            <h4 className="font-medium">Sizes with Status</h4>
            <div className="flex items-center space-x-4">
              <Avatar src={imgSrc} size="sm" status="online" notification={2} />
              <Avatar src={imgSrc} size="md" status="online" notification={5} />
              <Avatar src={imgSrc} size="lg" status="online" notification={12} />
            </div>
          </div>

          {/* Square with Features */}
          <div className="space-y-4">
            <h4 className="font-medium">Square with Features</h4>
            <div className="flex items-center space-x-4">
              <Avatar src={imgSrc} shape="square" status="online" />
              <Avatar src={imgSrc} shape="square" notification={7} />
              <Avatar
                src={imgSrc}
                shape="square"
                ring={true}
                ringColor="ring-indigo-500"
              />
            </div>
          </div>

          {/* Notification Positions */}
          <div className="space-y-4">
            <h4 className="font-medium">Notification Positions</h4>
            <div className="flex items-center space-x-4">
              <Avatar src={imgSrc} notification={1} notificationPosition="top-left" />
              <Avatar src={imgSrc} notification={2} notificationPosition="top-right" />
              <Avatar src={imgSrc} notification={3} notificationPosition="bottom-left" />
              <Avatar src={imgSrc} notification={4} notificationPosition="bottom-right" />
            </div>
          </div>

          {/* Status Positions */}
          <div className="space-y-4">
            <h4 className="font-medium">Status Positions</h4>
            <div className="flex items-center space-x-4">
              <Avatar src={imgSrc} status="online" statusPosition="top-left" />
              <Avatar src={imgSrc} status="online" statusPosition="top-right" />
              <Avatar src={imgSrc} status="online" statusPosition="bottom-left" />
              <Avatar src={imgSrc} status="online" statusPosition="bottom-right" />
            </div>
          </div>

          {/* Clickable with Features */}
          <div className="space-y-4">
            <h4 className="font-medium">Clickable with Features</h4>
            <div className="flex items-center space-x-4">
              <Avatar src={imgSrc} clickable status="online" notification={5} />
              <Avatar src={imgSrc} clickable ring={true} ringColor="ring-pink-500" />
              <Avatar src={imgSrc} clickable shape="square" status="busy" />
            </div>
          </div>
        </div>

        {/* Avatar Group */}
        <div className="space-y-4">
          <h4 className="font-medium">Avatar Group</h4>
          <AvatarGroup max={4} size="md">
            <Avatar src={imgSrc} />
            <Avatar src={imgSrc} />
            <Avatar src={imgSrc} />
            <Avatar src={imgSrc} />
            <Avatar src={imgSrc} />
            <Avatar src={imgSrc} />
          </AvatarGroup>
        </div>
      </div>
    </div>
  );
}
