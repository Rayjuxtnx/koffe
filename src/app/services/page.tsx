'use client';
import { Camera, Heart, Cake, Users, Baby, GraduationCap, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


const services = [
    {
        Icon: Camera,
        title: 'Studio Portraits',
        shortDescription: 'Professional headshots and portraits in a controlled studio environment.',
        longDescription: 'Our studio sessions are designed to capture your best side. We work with you to create stunning portraits for professional profiles, portfolios, or personal use. With controlled lighting and a variety of backdrops, we ensure a high-quality, polished result.'
    },
    {
        Icon: Heart,
        title: 'Weddings & Proposals',
        shortDescription: 'Capturing the magic of your special day with timeless photos.',
        longDescription: 'From the intimate moments of a proposal to the grand celebration of a wedding, we are there to document your love story. Our style is cinematic and emotional, focusing on the authentic interactions that make your day unique.'
    },
    {
        Icon: Cake,
        title: 'Birthdays',
        shortDescription: 'Fun and memorable photoshoots to celebrate another year of life.',
        longDescription: 'Mark another milestone with a personalized birthday photoshoot. Whether it\'s a cake smash for a first birthday or a stylish session for your 30th, we create a fun and relaxed atmosphere to capture your personality.'
    },
    {
        Icon: Users,
        title: 'Family Photos',
        shortDescription: 'Beautifully composed photos to cherish your family\'s bond.',
        longDescription: 'Family is everything. Our family sessions are about capturing the connection and love you share. We aim for natural, heartfelt images that you will treasure for generations, whether it\'s at our studio, your home, or a favorite outdoor location.'
    },
    {
        Icon: Baby,
        title: 'Maternity & Baby Bump',
        shortDescription: 'Elegant photoshoots to celebrate the journey of motherhood.',
        longDescription: 'The journey to motherhood is a beautiful and transformative experience. Our maternity sessions are designed to make you feel comfortable and radiant, creating elegant and artistic images that celebrate this special time in your life.'
    },
    {
        Icon: GraduationCap,
        title: 'Graduations',
        shortDescription: 'Commemorate your academic achievements with distinguished portraits.',
        longDescription: 'You\'ve worked hard to get here. Commemorate your graduation with distinguished portraits that reflect your achievement and personality. We offer sessions on-campus or in-studio to celebrate this major life accomplishment.'
    },
    {
        Icon: Sparkles,
        title: 'And More...',
        shortDescription: 'Have a unique event? Contact us for a custom photography package.',
        longDescription: 'Don\'t see what you\'re looking for? We love creative challenges! From corporate events and product photography to editorial shoots and passion projects, contact us to discuss your vision, and we\'ll create a custom package just for you.'
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
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {services.map(({ Icon, title, shortDescription, longDescription }) => (
            <AccordionItem key={title} value={title} className="bg-card border border-border/50 rounded-lg shadow-lg overflow-hidden">
              <AccordionTrigger className="p-6 text-left hover:no-underline">
                <div className="flex items-center gap-6 w-full">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl font-headline mb-1">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{shortDescription}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0">
                <div className="border-t border-border/50 pt-4 ml-[calc(4rem+1.5rem)] text-foreground/80">
                  <p className="leading-relaxed">{longDescription}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
