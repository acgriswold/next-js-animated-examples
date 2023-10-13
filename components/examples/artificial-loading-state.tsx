"use client"

import { minDelay, sleep } from "@/lib/utils";
import { FormEvent, useState } from "react";
import { Spinner } from "../global/spinner";

export type ArtificialLoadingStateProps = {
    delay: number
}

export function ArtificialLoadingState({delay}: ArtificialLoadingStateProps) {
    let [isSaving, setIsSaving] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        console.log("submit")
        e.preventDefault();
        setIsSaving(true);

        let data = Object.entries(new FormData(e.currentTarget));

        const quickEvent = sleep(25);
        await minDelay(quickEvent, delay);

        setIsSaving(false);
    }

    
    return (
        <div className="mb-8 flex flex-col gap-2">
           <form className="bg-white shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-500 disabled:opacity-75 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={isSaving}>
                        {isSaving
                            ? <Spinner className="fill-blue-500 animate-spin" />
                            : <div className="text-sm font-medium">Sign in</div>
                        }
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                Example of simple {delay}ms delay.
            </p>
        </div>

    )
}