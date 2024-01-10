import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/global/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Examples',
  description:
    'Various experiments with Next.js best practices and animation examples',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='min-h-screen'>
      <body className={inter.className}>
        <ThemeProvider 
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
