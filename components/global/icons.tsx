import { ArrowLeft, Shell, type LucideProps } from "lucide-react"

const themeColor = "black"
const themeSize = 20

export const Icons = {
    back: (props: LucideProps) => {
        return <ArrowLeft {...{fill: themeColor, width: themeSize, height: themeSize, ...props}} />
    },
    spinner: (props: LucideProps) => {
        return <Shell {...{fill: themeColor, width: themeSize, height: themeSize, ...props}} />
    }
}