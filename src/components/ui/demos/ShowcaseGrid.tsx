import { Panel } from "./Panel";

// Button variants
import DefaultButtonDemo from "./button/DefaultButtonDemo";
import OutlineButtonDemo from "./button/OutlineButtonDemo";
import IconButtonDemo from "./button/IconButtonDemo";

// Alert 
import DismissAlert from "./alert/dismissAlert";
import ErrorAlert from "./alert/errorAlert"
import SuccessAlert from "./alert/successAlert";

// Avatar
import AvatarGroupDemo from "./avatar/AvatarGroup";
import AvatarChatDemo from "./avatar/AvatarChat";
import AvatarStatusDemo from "./avatar/AvatarStatus";

// Toggle
import BasicToggle from "./toggle/BasicToggle";

// Pagination
import PaginationDemo from "./Pagination/Pagination";
import SimplePaginationDemo from "./Pagination/SimplePagination";
import CompactPaginationDemo from "./Pagination/CompactPagination";

// Checkbox
import CheckboxDemo from "./checkbox/Checkbox";

export default function ShowcaseGrid() {
  return (
    <div className="
      w-full max-w-7xl mx-auto mt-10
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      border border-[hsl(var(--border))]
      rounded-xl
      overflow-hidden
    ">
      {/* BUTTONS */}
      <div className="border-b border-[hsl(var(--border))] md:border-r">
        <Panel
          label="Buttons"
          variants={[
            { label: "Default", component: <DefaultButtonDemo /> },
            { label: "Outline", component: <OutlineButtonDemo /> },
            { label: "Icon", component: <IconButtonDemo /> },
          ]}
        />
      </div>

      {/* ALERT */}
      <div className="border-b border-[hsl(var(--border))] lg:border-r md:border-r">
        <Panel
          label="Alert"
          variants={[
            { label: "Success", component: <SuccessAlert /> },
            { label: "Dismiss", component: <DismissAlert /> },
            { label: "Error", component: <ErrorAlert /> }
          ]}
        />
      </div>

      {/* AVATAR GROUP */}
      <div className="border-b border-[hsl(var(--border))]">
        <Panel
          label="Avatar"
          variants={[
            { label: "Group", component: <AvatarGroupDemo /> },
            { label: "Chat", component: <AvatarChatDemo /> },
            { label: "Status", component: <AvatarStatusDemo /> }
          ]}
        />
      </div>

      {/* BADGES */}
      <div className="border-b border-[hsl(var(--border))] md:border-r lg:border-r">
        <Panel label="Toggle">
          <BasicToggle />
        </Panel>
      </div>

      {/* PAGINATION */}
      <div className="border-b border-[hsl(var(--border))] md:border-r">
        <Panel
          label="Pagination"
          variants={[
            { label: "Basic", component: <PaginationDemo /> },
            { label: "Compact", component: <CompactPaginationDemo /> },
            { label: "Simple", component: <SimplePaginationDemo /> }
          ]}
        />
      </div>

      {/* SUBSCRIBE */}
      <div className="">
        <Panel label="Checkbox">
          <CheckboxDemo />
        </Panel>
      </div>
    </div>
  );
}
