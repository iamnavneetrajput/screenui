"use client"
import React, { useState } from 'react'
import { FileMeta, FileUpload } from '@/packages/FileUpload';

export function DocumentUploadDemo() {
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
    )
}
