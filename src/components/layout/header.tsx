'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Camera, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Camera className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Aperture</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={cn(
                  'transition-colors hover:text-foreground',
                  pathname === href ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
           <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full py-6">
                    <Link href="/" className="mb-8 flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Camera className="h-6 w-6 text-primary" />
                        <span className="font-bold font-headline text-lg">Aperture</span>
                    </Link>
                    <nav className="flex flex-col gap-6">
                        {navLinks.map(({ href, label }) => (
                        <Link
                            key={label}
                            href={href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                            'text-lg font-medium transition-colors hover:text-primary',
                            pathname === href ? 'text-primary' : 'text-foreground'
                            )}
                        >
                            {label}
                        </Link>
                        ))}
                    </nav>
                </div>
              </SheetContent>
            </Sheet>
           </div>
        </div>
      </div>
    </header>
  );
}
