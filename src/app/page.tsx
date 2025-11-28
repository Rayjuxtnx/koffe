
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'landscape-1');

  if (!heroImage) {
    return <div>Error: Hero image not found.</div>;
  }
  
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-theme(height.14))] -mt-14">
       <div className="absolute inset-0 z-0">
         <Image 
            src={heroImage.imageUrl} 
            alt="A stunning landscape photograph"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
         />
         <div className="absolute inset-0 bg-background/60 backdrop-brightness-75"></div>
       </div>
       <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold font-headline drop-shadow-2xl">Aperture</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 drop-shadow-lg">
            A minimal, cinematic photography portfolio. Welcome to a curated collection of moments, captured in time.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/portfolio">
                Explore Portfolio <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
       </div>
    </div>
  )
}
