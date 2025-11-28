
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Coffee, ArrowRight } from 'lucide-react';
import { projects } from '@/lib/projects-data';
import { PhotoCard } from '@/components/photo-card';
import { useState, useEffect } from 'react';

// export const metadata: Metadata = {
//   title: 'About',
//   description: 'The story behind Blu Koffee Studios, born from passion and early morning coffee.',
// };

export default function AboutPage() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-photo');
  const heroImage = PlaceHolderImages.find(img => img.id === 'street-1');
  const featuredProjects = projects.slice(0, 3);
  
  const [isStoryVisible, setIsStoryVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsStoryVisible(true);
    }, 500); // Short delay for animation
    return () => clearTimeout(timer);
  }, []);

  if (!profileImage || !heroImage) {
    // Fallback or error handling if the image is not found
    return <div>Error: Profile image not found.</div>;
  }
  
  return (
    <div className="animate-fade-in">
        {/* Story Section */}
        <div className="relative overflow-hidden">
             <div className="absolute inset-0">
                <Image
                    src={heroImage.imageUrl}
                    alt="Blurred city background"
                    fill
                    className="object-cover blur-md scale-110"
                    data-ai-hint={heroImage.imageHint}
                />
                <div className="absolute inset-0 bg-background/70" />
            </div>
            <div className="relative container mx-auto max-w-5xl py-16 md:py-24 px-4">
                <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4 flex items-center justify-center gap-4">
                            <Coffee className="h-10 w-10 text-primary" /> The Story of Blu Koffee
                        </h2>
                        <h3 className="text-xl text-muted-foreground mb-6 font-headline">From Early Mornings to Lasting Moments.</h3>
                        <div className="space-y-4 text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                            <p>
                            The name &quot;Blu Koffee&quot; was born during the quiet, early morning hours—that magical time just before sunrise, often called the 'blue hour.' With a warm cup of coffee in hand, I found that this was when my creativity was at its peak. It was in these moments of peace and reflection that I honed my craft, dreaming up the photoshoots that would soon become cherished memories for my clients.
                            </p>
                            <p>
                            The studio is built on that same principle: taking a simple, quiet moment and turning it into something beautiful and lasting. It’s about more than just taking pictures; it’s about capturing the feeling of a place, the emotion of an event, and the unique story of each person I work with. Just like that first sip of morning coffee, my goal is to create an experience that is both comforting and inspiring.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* About Me Section */}
        <div className="bg-background">
            <div className="container mx-auto max-w-6xl py-16 md:py-24 px-4">
            <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
                <div className="relative aspect-[4/5] md:col-span-2 rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={profileImage.imageUrl}
                    alt="The photographer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 40vw"
                    data-ai-hint={profileImage.imageHint}
                />
                </div>
                <div className="md:col-span-3">
                <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">
                    The Story of Blu Koffee
                </h2>
                <h3 className="text-xl text-muted-foreground mb-6 font-headline">From Early Mornings to Lasting Moments.</h3>
                <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                    <p>
                    The name &quot;Blu Koffee&quot; was born during the quiet, early morning hours—that magical time just before sunrise, often called the 'blue hour.' With a warm cup of coffee in hand, I found that this was when my creativity was at its peak. It was in these moments of peace and reflection that I honed my craft, dreaming up the photoshoots that would soon become cherished memories for my clients.
                    </p>
                    <p>
                    The studio is built on that same principle: taking a simple, quiet moment and turning it into something beautiful and lasting. It’s about more than just taking pictures; it’s about capturing the feeling of a place, the emotion of an event, and the unique story of each person I work with. Just like that first sip of morning coffee, my goal is to create an experience that is both comforting and inspiring.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Featured Work Section */}
        <div className="bg-card">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold font-headline">
                    My Work
                </h2>
                <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Here is a selection of projects that reflect my passion for storytelling.
                </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {featuredProjects.map((project, index) => (
                        <div key={project.slug} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}>
                            <PhotoCard 
                                project={project}
                                index={index}
                                isLink
                            />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button asChild variant="outline">
                        <Link href="/portfolio">
                            View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>

        {/* Contact Section */}
        <div className="relative overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={heroImage.imageUrl}
                    alt="Blurred city background"
                    fill
                    className="object-cover blur-md scale-110"
                    data-ai-hint={heroImage.imageHint}
                />
                <div className="absolute inset-0 bg-background/70" />
            </div>
            <div className="relative container mx-auto px-4 py-16 md:py-24 text-center">
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-headline">
                    Have a Project in Mind?
                    </h2>
                    <p className="text-lg text-muted-foreground mt-2 mb-8 max-w-2xl mx-auto">
                    Let's collaborate to bring your vision to life. I'm available for commissions and creative projects worldwide.
                    </p>
                    <Button asChild size="lg">
                    <Link href="/contact">
                        Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}
