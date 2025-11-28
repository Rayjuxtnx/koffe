'use client';
import Image from 'next/image';
import type { Project } from '@/lib/projects-data';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function PhotoCard({ project, onClick, index, isLink = false }: { project: Project; onClick?: () => void; index: number, isLink?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  const CardContent = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-lg shadow-xl bg-card animate-fade-in-up custom-shape"
      style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
      aria-label={`View project: ${project.title}`}
    >
      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10" />
      <div style={{ transform: isHovered ? 'scale(1.15)' : 'scale(1)', transition: 'transform 6s ease-in-out' }} className="h-full w-full">
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'translateY(-20px)' : 'translateY(0px)', transition: 'transform 4s ease-in-out' }}
          data-ai-hint={project.coverImage.hint}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="text-white drop-shadow-md">
            <h3 className="text-xl font-bold font-headline ">{project.title}</h3>
            <p className="text-sm text-gray-200">{project.category}</p>
        </div>
        <div className="mt-4 overflow-hidden">
            <p className="text-sm text-gray-300 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                {project.shortDescription}
            </p>
        </div>
      </div>
    </div>
  );

  if (isLink) {
    return (
      <Link href={`/portfolio/${project.slug}`} className="block aspect-[4/5]">
        {CardContent}
      </Link>
    );
  }

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick?.()}
      className="cursor-pointer aspect-[4/5]"
    >
      {CardContent}
    </div>
  );
}