
'use client';
import { Logo } from './logo';

export function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="relative flex items-center justify-center w-48 h-48">
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute inset-2 border-t-2 border-primary rounded-full animate-spin"></div>
        <div className="absolute">
            <div className="relative w-36 h-36 text-primary">
                <div className="absolute inset-0 rounded-full bg-background z-10"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 animate-pulse">
                    <Logo className="w-10 h-10" />
                    <span className="text-xs font-headline mt-2 text-foreground">Blu Koffee</span>
                </div>
                <div className="absolute inset-0.5 rounded-full z-0 animate-shutter-spin">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 w-[1px] bg-primary/50"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1/2 w-[1px] bg-primary/50"></div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-[1px] bg-primary/50"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[1px] bg-primary/50"></div>
                </div>
            </div>
        </div>
      </div>
      <p className="mt-8 text-lg text-muted-foreground animate-pulse">Capturing moments...</p>
    </div>
  );
}
