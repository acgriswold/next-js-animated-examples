import { ArtificialLoadingState } from "@/components/examples/artificial-loading-state";

export default function ArtificialDelayExample() {
    return (
        <div className="flex flex-wrap justify-center gap-8">
            <ArtificialLoadingState delay={0} />
            <ArtificialLoadingState delay={250} />
            <ArtificialLoadingState delay={1000} />
            <ArtificialLoadingState delay={1500} />
            <ArtificialLoadingState delay={2000} />
        </div>
    )
}

