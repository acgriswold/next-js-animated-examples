"use client"

import { Log } from "@/components/ui/log";
import { config } from "@/lib/examples/ab-testing/config";
import { CurrentExperiment, getExperimentValues } from "@/lib/examples/ab-testing/experiments";

import Cookies from 'js-cookie'
import { useRouter } from "next/navigation"

export function ExperimentButton() {
    const router = useRouter()

    const cookie = Cookies.get(config.AB_TESTING_COOKIE_NAME)
    if (!cookie)
        return <>no cookie set</>

    const values = getExperimentValues<CurrentExperiment>(cookie);

    return (
        <>
            <div className="mb-4">
                <Log value={values}></Log>
            </div>

            <button {...values} onClick={() => {
                    Cookies.remove(config.AB_TESTING_COOKIE_NAME)
                    router.refresh()
                }}>
                Reset cookie
            </button>
        </>
    )
}