import { LucideProps } from "lucide-react";
import { Icons } from "./icons";

export function Spinner({className, ...props}: LucideProps) {
    return <Icons.spinner className={className ? className : "animate-spin"} {...props} />
}