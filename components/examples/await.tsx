export type AwaitProps<TPromise> = {
    promise: Promise<TPromise>;
    children: (result: TPromise) => React.JSX.Element;
}

export async function Await<TPromise>({children: createChildren, promise}: AwaitProps<TPromise>) {
    const result = await promise;

    return (
        createChildren(result)
    )
}