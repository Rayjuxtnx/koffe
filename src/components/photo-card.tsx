'use client';
import Image from 'next/image';
import type { Project } from '@/lib/projects-data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type PhotoCardProps = { 
    project: Project;
    index: number;
    onClick?: () => void;
    isLink?: boolean;
}

export function PhotoCard({ project, onClick, index, isLink = false }: PhotoCardProps) {

  const content = (
    <div
      className="group relative block aspect-[4/5] overflow-hidden rounded-lg bg-card shadow-lg"
      aria-label={`View project: ${project.title}`}
    >
      <Image
        src={project.coverImage.src}
        alt={project.coverImage.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        data-ai-hint={project.coverImage.hint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity opacity-100 group-hover:opacity-80" />

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
        <h3 className="text-lg md:text-xl font-bold font-headline drop-shadow-md">{project.title}</h3>
        <p className="text-sm text-gray-200">{project.category}</p>
      </div>

      <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Button size="sm" variant="secondary" className="h-8 w-auto px-3">
          View <ArrowRight className="ml-2 h-3 w-3" />
        </Button>
      </div>
    </div>
  );
  
  if (isLink) {
    return (
        <Link href={`/portfolio/${project.slug}`} className="cursor-pointer">
            {content}
        </Link>
    )
  }

  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick?.()}
      tabIndex={0}
      className="cursor-pointer"
    >
      {content}
    </div>
  );
}
