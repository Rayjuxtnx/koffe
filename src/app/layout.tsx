'use client';
import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import { Inter, Lato } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { SplashScreen } from '@/components/splash-screen';
import { usePathname } from 'next/navigation';

const fontHeadline = Inter({
  subsets: ['latin'],
  variable: '--font-headline',
});

const fontBody = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

// export const metadata: Metadata = {
//   title: {
//     default: 'Blu Koffee Studios',
//     template: '%s | Blu Koffee Studios',
//   },
//   description: 'A minimal, cinematic photography portfolio.',
//   icons: [{ rel: 'icon', url: '/favicon.ico' }],
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
          <title>Blu Koffee Studios</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="A minimal, cinematic photography portfolio." />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontHeadline.variable,
          fontBody.variable
        )}
      >
        {isLoading ? (
          <SplashScreen />
        ) : (
          <div className="relative flex min-h-dvh flex-col animate-fade-in">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        )}
        <Toaster />
      </body>
    </html>
  );
}
