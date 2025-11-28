import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2 text-foreground">
            <Logo className="h-8 w-auto text-primary" />
            <span className="font-bold font-headline hidden sm:inline-block">Blu Koffee Studios</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left md:ml-4">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <Link href="/contact" className="hover:text-primary transition-colors">
            Get in Touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
