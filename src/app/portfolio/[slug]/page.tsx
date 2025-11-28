import { projects, type Project } from '@/lib/projects-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, MapPin, Camera } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { Metadata } from 'next';

type ProjectPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found'
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [
        {
          url: project.coverImage.src,
          width: project.coverImage.width,
          height: project.coverImage.height,
          alt: project.coverImage.alt,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <Image 
            src={project.coverImage.src} 
            alt={project.coverImage.alt} 
            fill 
            className="object-cover" 
            priority 
            data-ai-hint={project.coverImage.hint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="container mx-auto max-w-4xl -mt-16 md:-mt-24 relative z-10 px-4 pb-16 md:pb-24">
        <div className="bg-card/80 backdrop-blur-sm p-6 md:p-8 rounded-t-lg">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-primary mb-4 transition-opacity hover:opacity-80">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
             <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{project.location}</span>
             </div>
             <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{project.date}</span>
             </div>
             {project.equipment && (
                <div className="flex items-center gap-2">
                    <Camera size={16} />
                    <span>{project.equipment}</span>
                </div>
             )}
          </div>
        </div>
        
        <div className="bg-card p-6 md:p-8 rounded-b-lg shadow-2xl">
          <h2 className="text-2xl font-headline mb-4">The Story</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">{project.fullDescription}</p>
        </div>

        {project.galleryImages.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="text-3xl font-headline text-center mb-8">More from this series</h2>
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {project.galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                        <div className="p-1">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                                <Image 
                                    src={image.src} 
                                    alt={image.alt} 
                                    fill
                                    className="object-cover" 
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    data-ai-hint={image.hint}
                                />
                            </div>
                        </div>
                    </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:inline-flex" />
              <CarouselNext className="hidden md:inline-flex" />
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}
