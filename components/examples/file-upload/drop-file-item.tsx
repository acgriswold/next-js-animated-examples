import { Icons } from "@/components/global/icons";

export function DropFileItem({file, index, removeItem}: {file: File, index: number, removeItem: (id: number) => void}) {
    return (
        <li
            className="px-5 py-3 w-full my-2 rounded-lg border border-gray-100/50"
            key={index}
        >
            <div className="flex justify-between items-center w-full">
                {file.type.startsWith("image/") ? (
                    <div className="flex gap-5 items-center">
                        <img
                            src={URL.createObjectURL(file)}
                            alt="avatar"
                            className="image-input-wrapper w-12 h-12 rounded-full cursor-pointer hover:opacity-75"
                        />
                        <span>{file.name}</span>
                    </div>
                ) : (
                    <div className="flex gap-5 items-center">
                        <div className="w-12 h-12 rounded-full cursor-pointer"></div>
                        <span>{file.name}</span>
                    </div>
                )}
                <span
                    onClick={() => removeItem(file.lastModified)}
                    className="cursor-pointer"
                >
                    <Icons.delete opacity={80} />
                </span>
            </div>
        </li>
    )
}