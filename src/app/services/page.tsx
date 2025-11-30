
'use client';
import { Camera, Heart, Cake, Users, Baby, GraduationCap, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useMemo } from 'react';


const servicesData = [
    {
        Icon: Camera,
        title: 'Studio Portraits',
        shortDescription: 'Professional headshots and portraits in a controlled studio environment.',
        longDescription: 'Our studio sessions are designed to capture your best side. We work with you to create stunning portraits for professional profiles, portfolios, or personal use. With controlled lighting and a variety of backdrops, we ensure a high-quality, polished result.',
        imageId: 'portrait-1',
        projectSlug: 'studio-portraits'
    },
    {
        Icon: Heart,
        title: 'Weddings & Proposals',
        shortDescription: 'Capturing the magic of your special day with timeless photos.',
        longDescription: 'From the intimate moments of a proposal to the grand celebration of a wedding, we are there to document your love story. Our style is cinematic and emotional, focusing on the authentic interactions that make your day unique.',
        imageId: 'portrait-2',
        projectSlug: 'timeless-vows'
    },
    {
        Icon: Cake,
        title: 'Birthdays',
        shortDescription: 'Fun and memorable photoshoots to celebrate another year of life.',
        longDescription: 'Mark another milestone with a personalized birthday photoshoot. Whether it\'s a cake smash for a first birthday or a stylish session for your 30th, we create a fun and relaxed atmosphere to capture your personality.',
        imageId: 'portrait-3',
        projectSlug: 'birthday-cakes'
    },
    {
        Icon: GraduationCap,
        title: 'Graduations',
        shortDescription: 'Commemorate your academic achievements with distinguished portraits.',
        longDescription: 'You\'ve worked hard to get here. Commemorate your graduation with distinguished portraits that reflect your achievement and personality. We offer sessions on-campus or in-studio to celebrate this major life accomplishment.',
        imageId: 'graduation-photo',
        projectSlug: 'graduation-day'
    },
    {
        Icon: Sparkles,
        title: 'And More...',
        shortDescription: 'Have a unique event? Contact us for a custom photography package.',
        longDescription: 'Don\'t see what you\'re looking for? We love creative challenges! From corporate events and product photography to editorial shoots and passion projects, contact us to discuss your vision, and we\'ll create a custom package just for you.',
        imageId: 'landscape-3',
        projectSlug: 'contact'
    }
];

export default function ServicesPage() {

  const services = useMemo(() => {
    return servicesData.map(service => {
        const image = PlaceHolderImages.find(img => img.id === service.imageId);
        return {
            ...service,
            image: image ? { src: image.imageUrl, alt: image.description, hint: image.imageHint } : null,
        }
    });
  }, []);

  return (
    <div className="container mx-auto max-w-7xl py-16 md:py-24 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We offer a wide range of photography services designed to capture the essence of your most important moments. Each session is tailored to your unique needs and vision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ Icon, title, shortDescription, image, projectSlug }) => (
          <Link 
            key={title} 
            href={projectSlug === 'contact' ? '/contact' : `/portfolio/${projectSlug}`} 
            className="group relative aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-lg bg-card block"
          >
            {image && (
                <Image 
                    src={image.src} 
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    data-ai-hint={image.hint}
                />
            )}
            <div className="absolute inset-0 bg-black/50 transition-all duration-300 group-hover:bg-black/70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-4">
                    <Icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="font-bold text-2xl font-headline mb-2">{title}</h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 pt-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:delay-200">
                    <p className="text-foreground/80 leading-relaxed text-sm">{shortDescription}</p>
                </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-4">Ready to book a session or have a question?</p>
            <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
            </Button>
      </div>
    </div>
  );
}
