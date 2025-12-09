// src/data/code-snippets/file-upload.ts

// --- Installation Commands (structured) ---
export const InstallCommands = {
  dependency: '',
  ts: "npx screenui add fileupload --lang ts --path src/components",
  js: "npx screenui add fileupload --lang js --path src/components",
};

// --- TypeScript Examples ---

export const TsCode1 =`'use client'
import { FileUpload } from '@/components/FileUpload';

export function Example() {
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
`;

export const TsCode2 = `'use client'
import { FileUpload } from '@/components/FileUpload';
import { useState } from 'react';

export function Example() {
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
`;

export const TsCode3 = `'use client'
import { FileUpload } from '@/components/FileUpload';
import { useState } from 'react';

export function Example() {
  const [files, setFiles] = useState<FileMeta[]>([]);

  return (
    <div className="flex items-center justify-center p-8">
        <div className="rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
            <FileUpload
              label="Project Files"
              description="PDF, DOC, DOCX files only"
              accept=".pdf,.doc,.docx"
              multiple={true}
              maxFiles={5}
              maxSize={10 * 1024 * 1024}
              showPreview={false}
              variant="filled"
              onChange={setFiles}
              />

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
              <p className="text-sm font-medium text-blue-900">File Upload Tips</p>
              <p className="text-sm text-blue-700 mt-1">
              • Maximum 5 files • Each file up to 10MB • Supported formats: PDF, DOC, DOCX
              </p>
        </div>
          </div>
      </div>

          {files.length > 0 && (
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setFiles([])}
                className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                 >
                Clear All
                </button>
                <button className="flex-1 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Upload {files.length} {files.length === 1 ? 'File' : 'Files'}
                </button>
              </div>
          )}
          </div>
        </div>
  );
}
`;

export const TsCode4 = `'use client'
import { FileUpload } from '@/components/FileUpload';
import { useState } from 'react';

export function Example() {
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
`;

// --- JavaScript Examples ---
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;
export const JsCode3 = TsCode3;
export const JsCode4 = TsCode4;

// --- Meta Data ---
export const Component = "FileUpload";
export const Title = "Advanced File Upload Component";
export const Description =
  "A powerful file upload system with previews, validation, drag & drop, custom icons, and premium styling support.";
export const Lastupdated = "2025-11-24";
export const Version = "1.0.0";
