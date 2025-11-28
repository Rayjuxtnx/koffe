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
  category: 'Portraits' | 'Landscapes' | 'Street';
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
    slug: 'canyon-light',
    title: 'Canyon Light',
    category: 'Landscapes',
    shortDescription: 'The last light of day paints the canyon walls in gold.',
    fullDescription: 'Captured during a stormy sunset in the deserts of Utah. The light broke through the clouds for only a few precious seconds, creating a dramatic and unforgettable scene. This series explores the interplay of light and shadow on ancient rock formations.',
    date: 'October 2023',
    location: 'Utah, USA',
    equipment: 'Sony A7R IV | 24-70mm f/2.8 GM',
    coverImage: getImageData('landscape-1', 'Golden hour light over a vast canyon.'),
    galleryImages: [
        getImageData('gallery-l1-1', 'Detail shot of the canyon rock formations.'),
        getImageData('gallery-l1-2', 'Wide shot of the canyon from a different angle.')
    ],
  },
  {
    slug: 'city-reflections',
    title: 'City Reflections',
    category: 'Portraits',
    shortDescription: 'A man\'s quiet contemplation against the vibrant city nightlife.',
    fullDescription: 'This portrait series was shot in downtown Chicago, focusing on moments of introspection amidst the urban chaos. Using window reflections and ambient city light, I aimed to create a sense of cinematic melancholy and connection to the environment.',
    date: 'December 2023',
    location: 'Chicago, USA',
    equipment: 'Fujifilm X-T4 | 56mm f/1.2',
    coverImage: getImageData('portrait-1', 'A man looking thoughtfully out a window with city lights reflecting.'),
    galleryImages: [
        getImageData('gallery-p1-1', 'Close up of the man\'s reflection in the window.'),
        getImageData('gallery-p1-2', 'A different pose of the man by the window.')
    ],
  },
  {
    slug: 'tokyo-glow',
    title: 'Tokyo Glow',
    category: 'Street',
    shortDescription: 'The electric energy of Tokyo\'s streets after dark.',
    fullDescription: 'Tokyo is a city that never sleeps, and its nights are a symphony of light and movement. This collection captures the essence of areas like Shinjuku and Shibuya, focusing on the vibrant neon signs, bustling crowds, and hidden alleyways that define the city\'s nocturnal landscape.',
    date: 'July 2023',
    location: 'Tokyo, Japan',
    equipment: 'Leica Q2',
    coverImage: getImageData('street-1', 'A busy street corner in Tokyo at night, with neon signs glowing.'),
    galleryImages: [
        getImageData('gallery-s1-1', 'A close-up of a neon sign in Tokyo.'),
        getImageData('gallery-s1-2', 'People crossing the street in Shibuya.')
    ],
  },
  {
    slug: 'autumn-road',
    title: 'Autumn Road',
    category: 'Landscapes',
    shortDescription: 'A journey through the fiery colors of an autumn forest.',
    fullDescription: 'There is a certain magic to autumn, a fleeting beauty that I sought to capture in this series. Shot in the Blue Ridge Mountains, these images follow a single, winding road as it cuts through a landscape ablaze with color.',
    date: 'November 2023',
    location: 'Blue Ridge Mountains, USA',
    coverImage: getImageData('landscape-2', 'A winding road through a forest in autumn.'),
    galleryImages: [],
  },
  {
    slug: 'painted-faces',
    title: 'Painted Faces',
    category: 'Portraits',
    shortDescription: 'Exploring identity through color and form.',
    fullDescription: 'A studio project in collaboration with a makeup artist. Each portrait is an exploration of character and emotion, using the face as a canvas. The bold colors and abstract patterns are designed to evoke a feeling rather than a specific identity.',
    date: 'September 2023',
    location: 'Studio',
    equipment: 'Canon R5 | 85mm f/1.2L',
    coverImage: getImageData('portrait-2', 'A woman with striking face paint in a studio setting.'),
    galleryImages: [],
  },
  {
    slug: 'rainy-walk',
    title: 'Rainy Walk',
    category: 'Street',
    shortDescription: 'A solitary figure finds beauty in a rain-soaked evening.',
    fullDescription: 'Rain transforms a city, washing the streets clean and reflecting the lights in a thousand different ways. This image, taken on a quiet cobblestone street in Prague, captures a moment of peaceful solitude and the romantic atmosphere of a European city in the rain.',
    date: 'May 2023',
    location: 'Prague, Czech Republic',
    coverImage: getImageData('street-2', 'A lone person with an umbrella walking on a cobblestone street in the rain.'),
    galleryImages: [],
  },
];

    