
'use client';

import { ContactForm } from '@/components/contact-form';
import { Instagram, Mail, Linkedin, Phone } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useMemo } from 'react';

// export const metadata: Metadata = {
//     title: 'Contact',
//     description: 'Get in touch for collaborations, bookings, or just to say hello.',
// };

const contactMethods = [
    {
        Icon: Mail,
        title: 'Send an Email',
        description: 'Best for project inquiries and detailed questions.',
        href: 'mailto:blukoffee1@gmail.com',
        label: 'blukoffee1@gmail.com'
    },
    {
        Icon: Phone,
        title: 'Give us a Call',
        description: 'For urgent matters and direct conversation.',
        href: 'tel:0795107535',
        label: '0795107535'
    }
]

export default function ContactPage() {
  const heroImage = useMemo(() => PlaceHolderImages.find(img => img.id === 'street-1'), []);

  if (!heroImage) {
    return <div>Loading...</div>;
  }

  return (
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
      <div className="relative container mx-auto max-w-6xl py-16 md:py-24 px-4">
        <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind, a story to tell, or just want to say hello? I&apos;d love to hear from you.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-headline mb-6">Send a Message</h2>
              <ContactForm />
            </div>
            <div className="md:col-span-2 space-y-8">
               <h2 className="text-3xl font-headline mb-6">Other ways to connect</h2>
               {contactMethods.map(({ Icon, title, description, href, label }) => (
                   <div key={title} className="flex gap-4">
                       <div className="flex-shrink-0">
                           <div className="h-12 w-12 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                               <Icon className="h-6 w-6" />
                           </div>
                       </div>
                       <div>
                           <h3 className="font-semibold text-lg">{title}</h3>
                           <p className="text-muted-foreground text-sm mb-1">{description}</p>
                           <Link href={href} target={href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') ? '_blank' : undefined} className="text-sm text-primary hover:underline">
                                {label}
                           </Link>
                       </div>
                   </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
