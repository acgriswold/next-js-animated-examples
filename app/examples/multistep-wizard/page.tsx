import { MultiStageWizard } from "@/components/examples/multistage-wizard";

export default function MultiStageWizardExample() {
    return (
        <MultiStageWizard 
            steps={[
                <div key={1} className="space-y-2">
                    <div className="h-4 w-5/6 rounded bg-neutral-100" />
                    <div className="h-4 rounded bg-neutral-100" />
                    <div className="h-4 w-4/6 rounded bg-neutral-100" />
                </div>,
                <div key={2} className="space-y-2">
                    <div className="h-4 w-5/6 rounded bg-neutral-100" />
                    <div className="h-4 w-4/6 bg-neutral-100" />
                    <div className="h-4 rounded bg-neutral-100" />
                </div>,
                <div key={3} className="space-y-2">
                    <div className="h-4 w-4/6 rounded bg-neutral-100" />
                    <div className="h-4 w-3/6 bg-neutral-100" />
                    <div className="h-4 rounded bg-neutral-100" />
                </div>,
            ]} 
            
        />
    )
}