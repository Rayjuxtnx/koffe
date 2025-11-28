'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ImageManifestPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Image Manifest</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          A complete inventory of all placeholder images used throughout the application.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {PlaceHolderImages.map((image) => (
          <div key={image.id} className="group relative flex flex-col gap-4 rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
            <div className="relative aspect-video overflow-hidden rounded-md">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                data-ai-hint={image.imageHint}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-foreground truncate" title={image.description}>
                {image.description}
              </p>
              <p className="text-xs text-muted-foreground">
                ID: <code className="font-mono bg-muted px-1 py-0.5 rounded">{image.id}</code>
              </p>
               <p className="text-xs text-muted-foreground mt-1">
                Hint: <code className="font-mono bg-muted px-1 py-0.5 rounded">{image.imageHint}</code>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
