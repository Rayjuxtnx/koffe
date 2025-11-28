import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Mail, Linkedin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about the photographer, their passion, and their work.',
};

const socialLinks = [
    {
        Icon: Instagram,
        href: '#',
        label: 'Instagram'
    },
    {
        Icon: Linkedin,
        href: '#',
        label: 'LinkedIn'
    },
    {
        Icon: Mail,
        href: '/contact',
        label: 'Email'
    }
]

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
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">Capturing the world, one frame at a time.</h1>
          <div className="text-lg text-foreground/80 space-y-6 leading-relaxed">
            <p>
              I’m a freelance photographer specializing in atmospheric portraits and travel photography. For me, photography is not just about capturing a moment, but about telling a story. It's about finding the extraordinary in the ordinary and revealing the emotion that lies just beneath the surface.
            </p>
            <p>
              With a background in cinematic arts, I bring a unique perspective to my work, focusing on light, composition, and narrative to create images that are both beautiful and evocative. Whether I'm on a remote mountain top or in the heart of a bustling city, my goal is always the same: to create an image that resonates.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Button asChild>
                <Link href="/contact">Get in Touch</Link>
            </Button>
            <div className="flex items-center gap-2">
                {socialLinks.map(({ Icon, href, label }) => (
                    <Button key={label} variant="ghost" size="icon" asChild>
                        <Link href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined}>
                            <Icon className="h-5 w-5" />
                        </Link>
                    </Button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
