
'use client';
import { useMemo } from 'react';
import type { Project } from '@/lib/projects-data';
import { projects } from '@/lib/projects-data';
import { PhotoCard } from '@/components/photo-card';

export default function PortfolioPage() {
  const groupedProjects = useMemo(() => {
    return projects.reduce((acc, project) => {
      const { category } = project;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(project);
      return acc;
    }, {} as Record<Project['category'], Project[]>);
  }, []);

  const categories = Object.keys(groupedProjects) as Array<keyof typeof groupedProjects>;

  return (
    <>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Portfolio</h1>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">A curated collection of moments, captured in time. Explore my projects across landscapes, portraits, and street photography.</p>
        </div>
        
        <div className="space-y-16">
            {categories.map((category) => (
                <section key={category}>
                    <h2 className="text-3xl font-headline mb-8 text-center md:text-left">{category}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {groupedProjects[category].map((project, index) => (
                            <div key={project.slug} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}>
                                <PhotoCard 
                                    project={project} 
                                    index={index} 
                                    isLink
                                />
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
      </div>
    </>
  );
}
