import { ContactForm } from '@/components/contact-form';
import { Instagram, Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch for collaborations, bookings, or just to say hello.',
};

const contactMethods = [
    {
        Icon: Mail,
        title: 'Send an Email',
        description: 'Best for project inquiries and detailed questions.',
        href: 'mailto:hello@aperture.com',
        label: 'hello@aperture.com'
    },
    {
        Icon: Instagram,
        title: 'Direct Message',
        description: 'For quick questions and to see my latest work.',
        href: '#',
        label: '@aperture'
    },
    {
        Icon: Linkedin,
        title: 'Connect on LinkedIn',
        description: 'For professional networking and collaborations.',
        href: '#',
        label: 'Aperture Photography'
    }
]

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl py-16 md:py-24 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind, a story to tell, or just want to say hello? I&apos;d love to hear from you.
        </p>
      </div>
      <div className="grid md:grid-cols-5 gap-16">
        <div className="md:col-span-3 bg-card p-8 rounded-lg shadow-lg">
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
                       <Link href={href} target={href.startsWith('http') || href.startsWith('mailto') ? '_blank' : undefined} className="text-sm text-primary hover:underline">
                            {label}
                       </Link>
                   </div>
               </div>
           ))}
        </div>
      </div>
    </div>
  );
}
