import React from 'react';
import { PropsTable } from '@/components/ui/main/PropsTable';
import { ExpandSection } from '@/components/ui/main/ExpandSection';

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const Props: PropItem[] = [

  { prop: "open", type: "boolean", description: "Controls whether the modal is visible." },

  { prop: "onClose", type: "() => void", description: "Fired when the modal requests to close (overlay click, escape key, close button)." },

  { prop: "children", type: "React.ReactNode", description: "Modal content including header, body, and footer." },

  { prop: "size", type: "'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full'", default: "'md'", description: "Controls modal width and full-screen behavior." },

  { prop: "centered", type: "boolean", default: "true", description: "Centers the modal vertically. If false, aligns near the top." },

  { prop: "closeOnOverlayClick", type: "boolean", default: "true", description: "Allows dismissing the modal when clicking outside the content." },

  { prop: "closeOnEscape", type: "boolean", default: "true", description: "Closes the modal when pressing Escape." },

  { prop: "showCloseButton", type: "boolean", default: "true", description: "Shows the close button in the top-right corner." },

  { prop: "preventScroll", type: "boolean", default: "true", description: "Locks background scrolling and adjusts body padding to prevent layout shift." },

  { prop: "blur", type: "boolean", default: "false", description: "Applies a backdrop blur behind the modal." },

  { prop: "className", type: "string", description: "Custom class for the modal content wrapper." },

  { prop: "overlayClassName", type: "string", description: "Custom class for the overlay background." },

  { prop: "title", type: "string", description: "Accessible modal title (screen reader only)." },

  { prop: "description", type: "string", description: "Accessible modal description (screen reader only)." },

  { prop: "container", type: "HTMLElement", description: "Custom portal mount point. Defaults to document.body." }
];

const ModalHeaderProps: PropItem[] = [
  { prop: "children", type: "React.ReactNode", description: "Content inside the header, typically a title." },
  { prop: "size", type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Adjusts padding and spacing." },
  { prop: "className", type: "string", description: "Custom classes for header styling." }
];

const ModalBodyProps: PropItem[] = [
  { prop: "children", type: "React.ReactNode", description: "Main content of the modal." },
  { prop: "size", type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Padding size." },
  { prop: "noPadding", type: "boolean", default: "false", description: "Removes padding for custom layouts." },
  { prop: "className", type: "string", description: "Custom classes for the body wrapper." }
];

const ModalFooterProps: PropItem[] = [
  { prop: "children", type: "React.ReactNode", description: "Footer actions such as buttons." },
  { prop: "size", type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Padding size." },
  { prop: "align", type: "'left' | 'center' | 'right' | 'between'", default: "'right'", description: "Button alignment behavior." },
  { prop: "className", type: "string", description: "Custom classes for the footer wrapper." }
];

const ConfirmDialogProps: PropItem[] = [
  { prop: "open", type: "boolean", description: "Controls visibility." },
  { prop: "onClose", type: "() => void", description: "Closes the dialog." },
  { prop: "onConfirm", type: "() => void", description: "Called when confirm button is pressed." },
  { prop: "title", type: "string", description: "Dialog title." },
  { prop: "message", type: "string", description: "Confirmation message." },
  { prop: "confirmText", type: "string", default: "'Confirm'", description: "Text for confirm button." },
  { prop: "cancelText", type: "string", default: "'Cancel'", description: "Text for cancel button." },
  { prop: "variant", type: "'danger' | 'warning' | 'info'", default: "'danger'", description: "Sets confirm button color." },
  { prop: "confirmButtonRef", type: "RefObject<HTMLButtonElement>", description: "Auto-focus target or external access to confirm button." }
];

export function ComponentPropsTable() {
  return (
    <ExpandSection previewHeight={400}>
      <main className="min-h-screen w-full flex flex-col gap-12 mx-auto">

        <PropsTable
          title="Modal Properties"
          description="Props available for the main Modal component."
          propsData={Props}
        />

        <PropsTable
          title="ModalHeader Properties"
          description="Props for the header subcomponent."
          propsData={ModalHeaderProps}
        />

        <PropsTable
          title="ModalBody Properties"
          description="Props for the modal body section."
          propsData={ModalBodyProps}
        />

        <PropsTable
          title="ModalFooter Properties"
          description="Props for the footer section."
          propsData={ModalFooterProps}
        />

        <PropsTable
          title="ConfirmDialog Properties"
          description="Props for the ConfirmDialog built on top of Modal."
          propsData={ConfirmDialogProps}
        />

      </main>
    </ExpandSection>
  );
}

