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
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
          <title>Blu Koffee Studios</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="A minimal, cinematic photography portfolio." />
           <meta name="keywords" content="photography, photographer, portfolio, cinematic photography, minimal photography, Blu Koffee Studios, Nairobi photographer, Kenya photographer, African photography, portrait photography, landscape photography, street photography, wedding photography, event photography, professional photographer, creative photography, visual storytelling, photo studio, Naivasha photography, Nakuru photography, studio portraits, headshots, proposal photography, engagement photos, birthday photoshoot, family photos, maternity photography, baby bump photos, graduation portraits, commercial photography, freelance photographer, art photography, photo gallery, book a photographer, contact photographer, hire photographer, best photographers in Nairobi, kenyan wedding photographer, african landscape photos, urban photography, lifestyle photography, Nairobi, Kenya, Africa" />
          <meta name="author" content="Blu Koffee Studios" />
          <meta name="creator" content="Blu Koffee Studios" />
          <meta name="publisher" content="Blu Koffee Studios" />
          <meta property="og:title" content="Blu Koffee Studios" />
          <meta property="og:description" content="A minimal, cinematic photography portfolio specializing in portrait, landscape, and wedding photography." />
          <meta property="og:url" content="https://blu-koffee-studios.com" />
          <meta property="og:site_name" content="Blu Koffee Studios" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Blu Koffee Studios" />
          <meta name="twitter:description" content="A minimal, cinematic photography portfolio." />
          <meta name="twitter:creator" content="@blukoffeestudios" />
          <meta name="robots" content="index, follow" />
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
