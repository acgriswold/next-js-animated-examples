import { ExampleLink, type ExampleLinkProps } from '@/components/examples/example-link';

const examples: ExampleLinkProps[] = [
  {
    href: '/examples/animated-dock',
    header: 'Dock Animation',
    description: 'Simple animated dock using framer motion.'
  },
  {
    href: '/examples/await-component',
    header: 'Await Component',
    description: 'Example to explore potential solutions for long running code without blocking the UI.'
  },
  {
    href: '/examples/multistep-wizard',
    header: 'Multistep Wizard',
    description: 'Simple animation with a simple steps wizard updating descriptions.'
  },
  {
    href: '/examples/artificial-delay',
    header: 'Artificial delay',
    description: "Experiments with adding artificial delay. A \"flash of loading state\" that's too fast doesn't inspire confidence that the operation completed successfully. Wrap a `minDelay` for non-optimistic UI patterns"
  },
  {
    href: '/examples/spotlight',
    header: 'Spotlight',
    description: "Modern UI experiment tracking mouse movement with Neo-futuristic lighting"
  },
  {
    href: {pathname: '/examples/query-param-use-state', query: { greetings: 'hello', size: 'sm', color: 'black' }},
    header: 'Use state query params',
    description: "Handling state through query params benefits tracability, customization, and better discoverability/shareability between users."
  },
  {
    href: '/examples/live-charts',
    header: 'Responsive Line Charts',
    description: "Charts and graphs using D3 library to create a responsive layout."
  },
  {
    href: '/examples/sonner-toast',
    header: 'Animated toast',
    description: "Use sonner third-party toast library which integrates with shadcn/ui non-library."
  },
  {
    href: '/examples/ab-testing',
    header: 'Ab Testing',
    description: "Simple example of ab testing through code. Migrate to external source for better results!"
  },
  {
    href: '/examples/interactive-calendar',
    header: 'Interactive Calendar',
    description: "Calendar based on the Tailwind UI example, with working dates and more."
  },
  {
    href: '/examples/file-upload',
    header: 'Drag & drop files',
    description: "Simple typescript and tailwind css file upload."
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Navigate through the site to explore&nbsp;
          <code className="font-mono font-bold">
            best practices and examples
          </code>
        </p>
      </div>

      <div className="relative flex place-items-center pt-12 pb-8 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="text-4xl relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
          Examples
        </div>
      </div>

      <div className="mb-32 grid text-center gap-4 lg:gap-12 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {examples.map(example => (
            <ExampleLink key={example.header} {...example} />  
          ))
        }       
      </div>
    </main>
  );
}
