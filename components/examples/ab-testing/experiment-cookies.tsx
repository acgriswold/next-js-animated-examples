"use client"

import { config } from "@/lib/examples/ab-testing/config"
import { getExperimentVariant } from "@/lib/examples/ab-testing/experiments"

import Cookies from 'js-cookie'

export default function ExperimentCookies() {
    const cookie = Cookies.get(config.AB_TESTING_COOKIE_NAME)
    if (!cookie)
        throw new Error("no cookie is set");

    const variant = getExperimentVariant(cookie)

    return (
        <div className="mb-4">
            Once you load this page, there&apos;s a new <b>{config.AB_TESTING_COOKIE_NAME}</b>{' '}
            cookie set in the browser, it has the shape of{' '}
            <span>{'${experimentId}.${variantId}'}</span>. You&apos;re assigned to:{' '}
            <b>{variant.name}</b>
            <div>Experiments using tailwind need to ensure `safelist` of used values. Refreshing will update on 
                refresh; instead store that externally based on user and only get experiment for that user.</div>
        </div>
    )
}