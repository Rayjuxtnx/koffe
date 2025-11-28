import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/projects-data';
import { PhotoCard } from '@/components/photo-card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default async function HomePage() {
  const featuredProjects = projects.slice(0, 4);
  const heroImage = PlaceHolderImages.find(img => img.id === 'street-1');
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-photo');
  
  if (!heroImage || !profileImage) {
    return <div>Error: Required images not found.</div>;
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
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
          <div className="absolute inset-0 bg-background/60 backdrop-brightness-75" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-headline drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Blu Koffee Studios
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            A minimal, cinematic photography portfolio. Welcome to a curated collection of moments, captured in time.
          </p>
          <Button asChild size="lg" className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link href="/portfolio">
              Explore Portfolio <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Featured Work Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            A glimpse into my creative world. See what I've been capturing lately.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
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
                    View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>

      {/* About Me Section */}
      <div className="bg-card">
        <div className="container mx-auto max-w-6xl py-16 md:py-24 px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-square max-w-md mx-auto md:max-w-none">
              <Image
                src={profileImage.imageUrl}
                alt="The photographer"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 90vw, 45vw"
                data-ai-hint={profileImage.imageHint}
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">
                A Story in Every Frame
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a freelance photographer driven by a passion for visual storytelling. My work focuses on capturing authentic moments, whether it's the raw emotion of a portrait or the serene beauty of a landscape.
              </p>
              <Button asChild>
                <Link href="/about">
                  More About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
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
  );
}

    