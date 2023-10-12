import { randomInt } from "crypto";
import { Suspense } from "react";

import { Await } from "@/components/examples/await";
import { Spinner } from "@/components/global/spinner";

import { sleep } from "@/lib/utils";

export default function AwaitComponentExample() {
    async function longRunningFunction() : Promise<number> {
        await sleep(5000)

        return randomInt(100)
    }
    
    return (
        <Suspense fallback={<Spinner />}>
            <Await promise={longRunningFunction()}>
                {(num) => (
                    <div>{num}</div>
                )}
            </Await>
        </Suspense>
    )
}