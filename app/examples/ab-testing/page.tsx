import { ExperimentButton } from "@/components/examples/ab-testing/experiment-button"
import ExperimentCookies from "@/components/examples/ab-testing/experiment-cookies"
  

export default async function ABTesting() {

    return (
        <div className="lg:max-w-[1000px]">
            <div className="mb-6">
                Basic AB testing through cookies.
            </div>
            
            <ExperimentCookies />
            <ExperimentButton />
        </div>
    )
}