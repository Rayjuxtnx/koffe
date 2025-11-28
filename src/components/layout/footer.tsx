import { Instagram, Mail, Camera } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2 text-foreground">
            <Camera className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Aperture</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left md:ml-4">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="/contact" aria-label="Contact">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
