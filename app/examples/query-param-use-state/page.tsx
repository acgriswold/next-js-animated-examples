import { Badge } from "@/components/ui/badge";

type NextJsPage = {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }

export default function QueryParamUseState({ searchParams }: NextJsPage) {
    return (
        <div className="flex flex-row gap-4">
            {searchParams && Object.keys(searchParams).map((key, index) => {
                return (
                    <Badge key={index} variant={"indigo"}>{key}:{searchParams[key]}</Badge>
                )}
            )}
        </div>
    )
}