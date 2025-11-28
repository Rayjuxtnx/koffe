'use client';
import { useState } from 'react';
import type { Project } from '@/lib/projects-data';
import { projects } from '@/lib/projects-data';
import { ImageModal } from '@/components/image-modal';
import { PhotoCard } from '@/components/photo-card';

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Portfolio</h1>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">A curated collection of moments, captured in time. Explore my projects across landscapes, portraits, and street photography.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <PhotoCard 
              key={project.slug} 
              project={project} 
              onClick={() => setSelectedProject(project)}
              index={index} 
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <ImageModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
