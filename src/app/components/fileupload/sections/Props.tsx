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
  { prop: "variant", type: "'default' | 'filled' | 'outlined' | 'ghost'", default: "'default'", description: "Controls dropzone visual style." },

  { prop: "size", type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Controls padding and spacing." },

  { prop: "label", type: "React.ReactNode", description: "Label displayed above the uploader." },

  { prop: "description", type: "React.ReactNode", description: "Helper description shown above the dropzone." },

  { prop: "helperText", type: "React.ReactNode", description: "Optional helper text when no error exists." },

  { prop: "error", type: "string | boolean", description: "Displays error text and sets error visuals." },

  { prop: "accept", type: "string", description: "Accepted file types, e.g. 'image/*, application/pdf'." },

  { prop: "multiple", type: "boolean", default: "false", description: "Enables selecting multiple files." },

  { prop: "maxSize", type: "number", description: "Maximum allowed file size in bytes." },

  { prop: "maxFiles", type: "number", description: "Limits total number of files." },

  { prop: "disabled", type: "boolean", default: "false", description: "Disables all interactions." },

  { prop: "required", type: "boolean", default: "false", description: "Marks uploader as required in forms." },

  { prop: "showPreview", type: "boolean", default: "true", description: "Shows image thumbnails when possible." },

  { prop: "showFileSize", type: "boolean", default: "true", description: "Displays a readable file size." },

  { prop: "allowRemove", type: "boolean", default: "true", description: "Allows removing uploaded files." },

  { prop: "validateFile", type: "(file: File) => string | null", description: "Returns error string or null to validate files." },

  { prop: "browseText", type: "string", default: "'Browse files'", description: "Text shown when clicking to open file dialog." },

  { prop: "dragActiveText", type: "string", default: "'Drop files here'", description: "Text shown while dragging files over." },

  { prop: "containerClassName", type: "string", description: "Class override for the root wrapper." },

  { prop: "dropzoneClassName", type: "string", description: "Class override for the dropzone container." },

  { prop: "labelClassName", type: "string", description: "Class override for the label element." },

  { prop: "descriptionClassName", type: "string", description: "Class override for description text." },

  {
    prop: "onChange",
    type: "(files: FileMeta[]) => void",
    description: "Called whenever the internal file list changes."
  },

  {
    prop: "render",
    type: "(ctx: { files: FileMeta[]; addFiles: (fl: FileList | null) => void; removeFile: (id: string) => void; open: () => void; inputRef: RefObject<HTMLInputElement>; }) => React.ReactNode",
    description: "Replaces the entire UI with a custom renderer while maintaining FileUpload logic."
  }
];

export function FileUploadPropsTable() {
  return (
    <ExpandSection previewHeight={300}>
      <main className="min-h-screen w-full flex items-center justify-center">
        <div className="w-full mx-auto">
          <PropsTable
            title="File Upload Properties"
            description="Comprehensive list of props supported by the FileUpload component, including validation, previews, drag-and-drop, and upload progress handling."
            propsData={Props}
            tip="Combine these features to build powerful file upload experiences that handle progress, deletion, previews, and validation."
          />
        </div>
      </main>
    </ExpandSection>
  );
}
