import { BackArrow } from "@/components/ui/back-arrow";

export default function ExampleLayout({children}: {children: React.ReactNode;}) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <BackArrow className="absolute left-12 top-12 h-12 w-12 rounded-full" />

        {children}
      </div>
    );
  }
  