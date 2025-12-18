'use client'
import React, {useState} from "react";
import { FileMeta, FileUpload } from "@/packages/FileUpload";

export function GalleryUploadDemo() {
  const [files, setFiles] = useState<FileMeta[]>([]);

  return (
    <div className="flex items-center justify-center p-8">
      <div className="rounded-2xl shadow-2xl p-8 max-w-3xl w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Photo Gallery</h2>
          <p>Upload multiple images to create your gallery</p>
        </div>

        <FileUpload
          label="Gallery Images"
          description="Upload JPG, PNG, or GIF images"
          accept="image/*"
          multiple={true}
          maxFiles={10}
          maxSize={5 * 1024 * 1024}
          showPreview={true}
          variant="outlined"
          onChange={setFiles}
        />

        {files.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium">
                {files.length} {files.length === 1 ? 'image' : 'images'} selected
              </p>
              <button 
                onClick={() => setFiles([])}
                className="text-sm"
              >
                Clear all
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {files.map((file) => (
                <div key={file.id} className="relative group aspect-square">
                  {file.preview && (
                    <>
                      <img 
                        src={file.preview} 
                        alt="" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        onClick={() => setFiles(files.filter(f => f.id !== file.id))}
                        className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
              Create Gallery
            </button>
          </div>
        )}
      </div>
    </div>
  );
}