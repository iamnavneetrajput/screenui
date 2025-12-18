'use client'
import React, {useState} from "react";
import { FileMeta, FileUpload } from "@/packages/FileUpload";


export function SimpleDropDemo() {
  const [files, setFiles] = useState<FileMeta[]>([]);

  return (
    <div className="flex items-center justify-center p-8">
      <div className="rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Quick Upload</h2>
          <p>Drop any file to get started</p>
        </div>

        <FileUpload
          description="Any file type, up to 50MB"
          multiple={true}
          maxSize={50 * 1024 * 1024}
          showPreview={true}
          variant="default"
          onChange={setFiles}
        />

        {files.length > 0 && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm font-medium text-green-900">
                {files.length} file{files.length !== 1 ? 's' : ''} ready to upload
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}