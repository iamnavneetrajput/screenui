"use client"
import React, {useState} from "react";
import { FileUpload, type FileMeta } from "@/packages/FileUpload";

export function ProfilePictureDemo() {
  const [files, setFiles] = useState<FileMeta[]>([]);

  return (
    <div className="flex items-center justify-center p-8">
            <div className="rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <FileUpload
          label="Profile Photo"
          description="Recommended: Square image, at least 400x400px"
          accept="image/*"
          multiple={false}
          maxSize={5 * 1024 * 1024}
          showPreview={true}
          onChange={setFiles}
        />

        {files.length > 0 && (
          <button className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Save Profile Picture
          </button>
        )}
      </div>
      </div>
  );
}