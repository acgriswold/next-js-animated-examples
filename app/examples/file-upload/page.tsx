"use client"

import { Icons } from "@/components/global/icons";
import { useState } from "react";

type Props = {
    onUpload: (files: File[]) => void;
};

export default function FileUploadExample({ onUpload = (_) => {} }: Props) {
    const [isDragActive, setIsDragActive] = useState<boolean>(false);

    const handleDragEnter = () => {
        setIsDragActive(true);
    };

    const handleDragLeave = () => {
        setIsDragActive(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragActive(false);
        const files = Array.from(e.dataTransfer.files);
        onUpload(files);
    };

    return (
        <div
            className={`relative flex flex-col w-2/3 text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer
                ${isDragActive ? "bg-sky-50/25 border-sky-400" : "border-gray-300"}
                `}>
            <input accept="*" type="file" multiple
                className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                title="" />

            <div
                className={`flex flex-col gap-3 items-center justify-center py-10 text-center text-sm 
                    ${isDragActive ? "text-sky-700" : "text-gray-400"}`}
            >
                <Icons.dropImage />
                <p>
                    {isDragActive
                        ? "Ready to drop!"
                        : "Drag your files here or click in this area."}
                </p>
            </div>
        </div>
    )
}