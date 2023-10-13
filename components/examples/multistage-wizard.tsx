"use client"

import React, { useEffect, useState } from "react";
import { Step } from "./multistage-step";


export type MultiStageWizardProps = {
    steps: React.JSX.Element[],
}

export function MultiStageWizard({ steps }: MultiStageWizardProps) {
    const [stepIndex, setStepIndex] = useState(0)

    useEffect(() => {
        setStepIndex(0)
    }, [steps, steps.length])

    return (
      <div className="mx-auto w-full max-w-md rounded-lg bg-white shadow-xl">
        <div className="flex justify-between rounded p-8">
            {
                [...Array(steps.length)].map((_, index) => {
                    return (
                       <Step key={index} step={index+1} currentStep={stepIndex+1} />
                    )
                })
            }
        </div>

        {/* Dynamic content based on `step` */}
        <div className="px-8">
            {
                stepIndex >= steps.length 
                    ? <div className="text-gray-500">✨ Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis autem cum et molestias architecto repellendus consequuntur totam quaerat, odio officia fuga amet tenetur, blanditiis similique. Amet, ipsa? Animi, impedit sint?!</div>
                    : steps[stepIndex]}
        </div>

        <div className="px-8 pb-8">
          <div className="mt-10 flex justify-between">
            <button
              onClick={() => setStepIndex(stepIndex < 1 ? stepIndex : stepIndex - 1)}
              className={`${
                stepIndex === 0 ? "pointer-events-none opacity-50" : ""
              } duration-350 rounded px-2 py-1 text-neutral-400 transition hover:text-neutral-700`}
            >
              Back
            </button>
            <button
              onClick={() => setStepIndex(stepIndex >= steps.length ? stepIndex : stepIndex + 1)}
              className={`${
                stepIndex >= steps.length ? "pointer-events-none opacity-50" : ""
              } bg duration-350 flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-blue-600 active:bg-blue-700`}
            >
              Continue
            </button>
          </div>
        </div>
    </div>
    )
}