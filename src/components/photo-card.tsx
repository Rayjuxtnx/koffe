'use client';
import Image from 'next/image';
import type { Project } from '@/lib/projects-data';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type PhotoCardProps = { 
    project: Project;
    index: number;
    onClick?: () => void;
    isLink?: boolean;
}

export function PhotoCard({ project, onClick, index, isLink = false }: PhotoCardProps) {

  const content = (
    <div
      className="group relative cursor-pointer aspect-[4/5] overflow-hidden rounded-lg shadow-xl bg-card"
      style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-xl font-bold font-headline text-white drop-shadow-md">{project.title}</h3>
        <p className="text-sm text-gray-200">{project.category}</p>
      </div>
    </div>
  );
  
  if (isLink) {
    return (
        <Link href={`/portfolio/${project.slug}`} className="block animate-fade-in-up">
            {content}
        </Link>
    )
  }

  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick?.()}
      tabIndex={0}
      className="animate-fade-in-up"
    >
      {content}
    </div>
  );
}
