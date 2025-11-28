import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Coffee } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind Blu Koffee Studios, born from passion and early morning coffee.',
};

export default function AboutPage() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-photo');

  if (!profileImage) {
    // Fallback or error handling if the image is not found
    return <div>Error: Profile image not found.</div>;
  }
  
  return (
    <div className="container mx-auto max-w-5xl py-16 md:py-24 px-4">
      <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        <div className="md:col-span-2">
          <div className="relative aspect-square rounded-full overflow-hidden shadow-lg ring-4 ring-primary/20">
            <Image 
                src={profileImage.imageUrl} 
                alt="A portrait of the photographer" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
                data-ai-hint={profileImage.imageHint}
            />
          </div>
        </div>
        <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-4 text-primary">
                <Coffee className="h-6 w-6"/>
                <p className="font-semibold">The Story of Blu Koffee</p>
            </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">From Early Mornings to Lasting Moments.</h1>
          <div className="text-lg text-foreground/80 space-y-6 leading-relaxed">
            <p>
                The name "Blu Koffee" was born during the quiet, early morning hours—that magical time just before sunrise, often called the 'blue hour.' With a warm cup of coffee in hand, I found that this was when my creativity was at its peak. It was in these moments of peace and reflection that I honed my craft, dreaming up the photoshoots that would soon become cherished memories for my clients.
            </p>
            <p>
                The studio is built on that same principle: taking a simple, quiet moment and turning it into something beautiful and lasting. It’s about more than just taking pictures; it’s about capturing the feeling of a place, the emotion of an event, and the unique story of each person I work with. Just like that first sip of morning coffee, my goal is to create an experience that is both comforting and inspiring.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild>
                <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
