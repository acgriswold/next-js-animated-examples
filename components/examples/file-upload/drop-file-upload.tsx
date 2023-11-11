"use client"

import { useState } from "react";
import { DropZone } from "./drop-zone";
import { DropFileItem } from "./drop-file-item";


export function DropFileUpload() {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const [isUploading, setIsUploading] = useState(false);
    const removeItem = (id: number) => {
        const filterd = uploadedFiles.filter((f) => f.lastModified !== id);
        setUploadedFiles(filterd);
    };
    const handleUpload = (files: File[]) => {
        try {
            setIsUploading(true);
            setUploadedFiles(uploadedFiles.concat(files));
        } catch (error) {
            console.log(error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <DropZone onUpload={handleUpload} />

            {uploadedFiles.length > 0 && (
                <ul className="w-2/3  my-5">
                    {uploadedFiles.map((file: File, index: number) => (
                        <DropFileItem file={file} index={index} removeItem={removeItem} />
                    ))}
                </ul>
            )}

            {isUploading && (
                <div className="flex justify-center items-center w-1/3 h-48 border-2 border-dashed rounded-lg p-4">
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );

}