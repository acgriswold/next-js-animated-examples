"use client"

import { Log } from "@/components/ui/log";
import { config } from "@/lib/examples/ab-testing/config";
import { CurrentExperiment, getExperimentValues } from "@/lib/examples/ab-testing/experiments";
import { getCookie, deleteCookie } from "cookies-next";

export function ExperimentButton() {
    const cookie = getCookie(config.AB_TESTING_COOKIE_NAME)
    if (!cookie)
        return <>no cookie set</>

    const values = getExperimentValues<CurrentExperiment>(cookie);

    return (
        <>
            <div className="mb-4">
                <Log value={values}></Log>
            </div>

            <button {...values} onClick={() => deleteCookie(config.AB_TESTING_COOKIE_NAME)}>Reset cookie</button>
        </>
    )
}