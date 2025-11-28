import { Camera, Heart, Cake, Users, Baby, GraduationCap, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Explore the variety of professional photography services we offer, tailored to capture your most precious moments.',
};

const services = [
    {
        Icon: Camera,
        title: 'Studio Portraits',
        description: 'Professional headshots and portraits in a controlled studio environment.',
    },
    {
        Icon: Heart,
        title: 'Weddings & Proposals',
        description: 'Capturing the magic of your special day with timeless photos.',
    },
    {
        Icon: Cake,
        title: 'Birthdays',
        description: 'Fun and memorable photoshoots to celebrate another year of life.',
    },
    {
        Icon: Users,
        title: 'Family Photos',
        description: 'Beautifully composed photos to cherish your family\'s bond.',
    },
    {
        Icon: Baby,
        title: 'Maternity & Baby Bump',
        description: 'Elegant photoshoots to celebrate the journey of motherhood.',
    },
    {
        Icon: GraduationCap,
        title: 'Graduations',
        description: 'Commemorate your academic achievements with distinguished portraits.',
    },
    {
        Icon: Sparkles,
        title: 'And More...',
        description: 'Have a unique event? Contact us for a custom photography package.',
    }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto max-w-6xl py-16 md:py-24 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We offer a wide range of photography services designed to capture the essence of your most important moments. Each session is tailored to your unique needs and vision.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ Icon, title, description }) => (
          <div key={title} className="bg-card p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-primary/20">
            <div className="flex-shrink-0 mb-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Icon className="h-8 w-8" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-xl font-headline mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </div>
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
