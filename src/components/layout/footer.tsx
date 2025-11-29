import Link from 'next/link';
import { Logo } from '@/components/logo';
import { navLinks } from './header';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 text-foreground mb-4">
              <Logo className="h-8 w-auto text-primary" />
              <span className="font-bold font-headline typewriter">Blu Koffee Studios</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Capturing moments, creating memories.
            </p>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map(({ href, label }) => (
                <Link key={label} href={href} className="text-muted-foreground hover:text-primary transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
             <h3 className="font-headline text-lg font-semibold mb-4">Connect</h3>
             <div className="flex flex-col space-y-2">
                <a href="mailto:blukoffee1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Email</a>
             </div>
          </div>

        </div>
        <div className="border-t border-border/40 mt-8 pt-6 text-center text-sm text-muted-foreground">
           <p>&copy; {new Date().getFullYear()} Blu Koffee Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
