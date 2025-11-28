
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Coffee, ArrowRight } from 'lucide-react';
import { projects } from '@/lib/projects-data';
import { PhotoCard } from '@/components/photo-card';

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind Blu Koffee Studios, born from passion and early morning coffee.',
};

export default function AboutPage() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-photo');
  const heroImage = PlaceHolderImages.find(img => img.id === 'street-1');
  const featuredProjects = projects.slice(0, 3);


  if (!profileImage || !heroImage) {
    // Fallback or error handling if the image is not found
    return <div>Error: Profile image not found.</div>;
  }
  
  return (
    <div className="animate-fade-in">
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
