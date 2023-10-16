import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function sleep(ms: number): Promise<unknown> {
    return new Promise(resolve => setTimeout(resolve, ms) );
}

export async function minDelay<T>(promise: Promise<T>, ms: number) : Promise<T> {
    let [p] = await Promise.all([promise, sleep(ms)])

    return p;
}

export function cn(...args: ClassValue[]) {
    return twMerge(clsx(args));
}