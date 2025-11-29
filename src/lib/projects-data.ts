
import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  hint: string;
};

export type Project = {
  slug: string;
  title: string;
  category: 'Portraits' | 'Landscapes' | 'Street' | 'Weddings';
  shortDescription: string;
  fullDescription: string;
  date: string;
  location: string;
  equipment?: string;
  coverImage: ProjectImage;
  galleryImages: ProjectImage[];
};

const getImageData = (id: string, alt: string): ProjectImage => {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) {
        console.error(`Image with id "${id}" not found.`);
        return { src: 'https://picsum.photos/seed/error/800/600', width: 800, height: 600, alt: 'Error: Image not found', hint: 'error' };
    }
    
    let width = 800;
    let height = 600;

    try {
        const url = new URL(image.imageUrl);
        if (url.hostname === 'images.unsplash.com') {
            const w = url.searchParams.get('w');
            if (w) {
                width = parseInt(w, 10);
            }
        } else if (url.hostname === 'picsum.photos') {
            const parts = url.pathname.split('/');
            width = parseInt(parts[parts.length - 2], 10);
            height = parseInt(parts[parts.length - 1], 10);
        }
    } catch(e) {
      // Ignore invalid urls
    }

    // Unsplash images from the generator have a width but not height, so we calculate it.
    if (image.imageUrl.includes('unsplash')) {
      height = Math.round(width * (5/4)); // Assuming 4:5 aspect ratio for cover images
    }


    return {
        src: image.imageUrl,
        width,
        height,
        alt,
        hint: image.imageHint,
    };
};

export const projects: Project[] = [
  {
    slug: 'rift-valley-vista',
    title: 'Random studio shots',
    category: 'Landscapes',
    shortDescription: 'Just random shots in the studio.',
    fullDescription: 'These are random shots taken in our studio.',
    date: 'January 2025',
    location: 'Nairobi, Kenya',
    equipment: 'Nikon | 24-70mm f/2.8 GM',
    coverImage: getImageData('landscape-1', 'A view of the Great Rift Valley from a high vantage point.'),
    galleryImages: [
        getImageData('gallery-l1-1', 'Detail shot of the valley escarpment.'),
        getImageData('gallery-l1-2', 'Wide shot of the valley floor.'),
        getImageData('gallery-l1-3', 'Wide shot of the valley floor.'),
        getImageData('gallery-l1-4', 'Wide shot of the valley floor.'),
        getImageData('gallery-l1-5', 'Wide shot of the valley floor.')
    ],
  },
  {
    slug: 'urban-contemplation',
    title: 'portraits',
    category: 'Portraits',
    shortDescription: "A man's quiet contemplation against the vibrant city nightlife of Nairobi.",
    fullDescription: "Some of our studio portraits.",
    date: 'October 2025',
    location: 'Nairobi, Kenya',
    equipment: 'Canon D7 | 56mm f/1.2',
    coverImage: getImageData('portrait-1', 'A man looking thoughtfully out a window with city lights reflecting.'),
    galleryImages: [
        getImageData('gallery-p1-1', "A happy man."),
        getImageData('gallery-p1-2', 'A smiling black man.'),
        getImageData('gallery-p1-3', 'A smiling image.'),
        getImageData('gallery-p1-4', 'A smiling image.'),
        getImageData('gallery-p1-5', 'A smiling image.')
    ],
  },
  {
    slug: 'nairobi-nights',
    title: 'Nairobi Nights',
    category: 'Street',
    shortDescription: "The vibrant, electric energy of Nairobi's streets after dark.",
    fullDescription: "Nairobi is a city that buzzes with life, and its nights are a symphony of light and movement. This collection captures the essence of the city, focusing on the vibrant city lights, bustling traffic, and the unique energy that defines Nairobi's nocturnal landscape.",
    date: 'July 2023',
    location: 'Nairobi, Kenya',
    equipment: 'Leica Q2',
    coverImage: getImageData('street-1', "A busy street corner in Nairobi at night, with glowing city lights."),
    galleryImages: [
        getImageData('gallery-s1-1', 'A shot of Nairobi traffic from a high-rise building.'),
        getImageData('gallery-s1-2', 'The skyline of Nairobi during the day.')
    ],

  },
  {
    slug: 'timeless-vows',
    title: 'Timeless Vows',
    category: 'Weddings',
    shortDescription: 'Capturing the intimate moments of a lifelong promise.',
    fullDescription: 'A wedding is a collection of fleeting, beautiful moments. This series focuses on capturing the raw emotion and quiet connection between the couple, preserving the story of their day in a timeless, cinematic style.',
    date: 'September 2025',
    location: 'Nairobi, Kenya',
    equipment: 'Canon R5 | 85mm f/1.2L',
    coverImage: getImageData('portrait-2', 'A bride and groom in a tender embrace.'),
    galleryImages: [
        getImageData('gallery-W1-1', 'A shot of Nairobi traffic from a high-rise building.'),
        getImageData('gallery-W1-2', 'A shot of Nairobi traffic from a high-rise building.')
    ],

  },
  {
    slug: 'nakuru-streets',
    title: 'Nakuru Streets',
    category: 'Street',
    shortDescription: 'The dynamic flow of daily life on the streets of Nakuru.',
    fullDescription: "This series captures the everyday rhythm of Nakuru. From the bustling market stalls to the quiet side streets, these images document the city's unique character and the stories of the people who call it home.",
    date: 'May 2023',
    location: 'Nakuru, Kenya',
    coverImage: getImageData('street-2', 'A busy street scene in Nakuru, Kenya.'),
    galleryImages: [],
  },
];

    