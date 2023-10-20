import { config } from "@/lib/examples/ab-testing/config"
import { CurrentExperiment, getCurrentExperiment, getCurrentVariant } from "@/lib/examples/ab-testing/experiments"

import Link from "next/link"

const Log = ({ value, replacer = null, space = 2 }) => (
    <pre>
      <code>{JSON.stringify(value, replacer, space)}</code>
    </pre>
  )
  

export default async function ABTesting() {
    const experiment = getCurrentExperiment<CurrentExperiment>()
    const variant = getCurrentVariant(experiment)

    return (
        <div className="lg:max-w-[1000px]">
            <div className="mb-6">
                Basic AB testing through cookies.
            </div>
            <div className="mb-4">
                Once you load this page, there&apos;s a new <b>{config.AB_TESTING_COOKIE_NAME}</b>{' '}
                cookie set in the browser, it has the shape of{' '}
                <span>{'${experimentId}.${variantId}'}</span>. You&apos;re assigned to:{' '}
                <b>{variant.name}</b>
                <div>Experiments using tailwind need to ensure `safelist` of used values. Refreshing will update on 
                    refresh; instead store that externally based on user and only get experiment for that user.</div>
            </div>

            <div className="mb-4">
                <Log value={variant.values}></Log>
            </div>

            <button {...variant.values}>test button</button>
        </div>
    )
}