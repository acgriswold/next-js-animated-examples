import { Calendar } from "@/components/examples/interactive-calendar/calendar";

export default function InteractiveCalendar() {
    return (
    <>
        <Calendar visibility={{showNextMonth: true, showPreviousMonth: true}} />
        <Calendar />
    </>
    )
}