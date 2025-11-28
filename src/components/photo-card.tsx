'use client';
import Image from 'next/image';
import type { Project } from '@/lib/projects-data';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function PhotoCard({ project, onClick, index, isLink = false }: { project: Project; onClick?: () => void; index: number, isLink?: boolean }) {
  const CardContent = (
    <div
      className="group relative overflow-hidden rounded-lg shadow-xl bg-card animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
      aria-label={`View project: ${project.title}`}
    >
      <Image
        src={project.coverImage.src}
        alt={project.coverImage.alt}
        width={project.coverImage.width}
        height={project.coverImage.height}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-500 ease-in-out group-hover:scale-105"
        data-ai-hint={project.coverImage.hint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:opacity-100 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
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
      <Link href={`/portfolio/${project.slug}`} className="block">
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
      className="cursor-pointer"
    >
      {CardContent}
    </div>
  );
}
