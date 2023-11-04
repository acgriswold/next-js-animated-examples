import { 
    type LucideProps,
    ArrowLeft, 
    Shell, 
    Dot,
    ChevronLeft,
    ChevronRight,
    ChevronDown
} from "lucide-react"

const themeColor = "black"
const themeSize = 20

export const Icons = {
    back: (props: LucideProps) => {
        return <ArrowLeft {...{fill: themeColor, width: themeSize, height: themeSize, ...props}} />
    },
    spinner: (props: LucideProps) => {
        return <Shell {...{fill: themeColor, width: themeSize, height: themeSize, ...props}} />
    },
    calendar: {
        nextMonth: (props: LucideProps) => {
            return <ChevronRight {...{fill: themeColor, width: themeSize, height: themeSize, ...props}} />
        },
        previousMonth: (props: LucideProps) => {
            return <ChevronLeft {...{fill: themeColor, width: themeSize, height: themeSize, ...props}} />
        },
        meetingIndicator: (props: LucideProps) => {
            return <Dot {...{fill: themeColor, width: themeSize, height: themeSize, ...props}} />
        },
        meetingEdit: (props: LucideProps) => {
            return <ChevronDown {...{fill: themeColor, width: themeSize, height: themeSize, ...props}} />
        },
    }
}