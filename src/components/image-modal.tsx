'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/projects-data';
import { ArrowRight } from 'lucide-react';

export function ImageModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 border-0 gap-0">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={project.coverImage.src}
              alt={project.coverImage.alt}
              fill
              className="object-cover md:rounded-l-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint={project.coverImage.hint}
            />
          </div>
          <div className="flex flex-col p-8 bg-card md:rounded-r-lg">
            <DialogHeader className="text-left">
              <DialogTitle className="text-3xl font-headline mb-2">{project.title}</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                {project.shortDescription}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-auto sm:justify-start pt-8">
              <Button asChild className="w-full md:w-auto">
                <Link href={`/portfolio/${project.slug}`}>
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
