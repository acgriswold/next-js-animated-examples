import { SpotlightCard } from "@/components/examples/spotlight-card";

const cards = [
    {
        header: "Branding Mockup",
        subHeader: "General UX design",
        description: "Create a branding mockup kit for Pinterest. Ignore requirements for unity of current brand guidelines.",
    },
    {
        header: "Label Design",
        description: "Design a label for a casual restaurant in NYC. Generate content for the entire process and match styling of designated areas.",
    },
]

export default function Spotlight() {
    return (
        <div className="flex flex-col gap-8">
            {cards?.map((c, index) => {
                return (
                    <SpotlightCard key={index} {...c} />
                )
            })}
        </div>
    )

}