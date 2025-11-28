'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function SplashScreen() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'landscape-1');

  if (!heroImage) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background animate-fade-in">
       <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt="A stunning landscape photograph"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-background/80 backdrop-brightness-75 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-headline drop-shadow-2xl animate-fade-in-up animate-text-gradient" style={{ animationDelay: '0.2s' }}>
            Blu Koffee Studios
          </h1>
        </div>
    </div>
  );
}
