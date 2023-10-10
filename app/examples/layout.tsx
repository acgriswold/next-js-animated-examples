export default function ExampleLayout({children,}: {children: React.ReactNode;}) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        {children}
      </div>
    );
  }
  