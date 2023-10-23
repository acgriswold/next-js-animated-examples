export type LogProps = {value: any, replacer?: (number | string)[] | null, space?: string | number}

export function Log({ value, replacer = null, space = 2 }: LogProps) {
    return (
        <pre>
            <code>{JSON.stringify(value, replacer, space)}</code>
        </pre>
    )
}