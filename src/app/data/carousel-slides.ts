export interface CarouselSlide {
  imageUrl: string;
  alt: string;
  label: string;
}

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  { imageUrl: '/assets/images/carrossel/p1.webp', alt: 'Trabalho 1', label: 'Trabalho 1' },
  { imageUrl: '/assets/images/carrossel/p2.webp', alt: 'Trabalho 2', label: 'Trabalho 2' },
  { imageUrl: '/assets/images/carrossel/p3.webp', alt: 'Trabalho 3', label: 'Trabalho 3' },
  { imageUrl: '/assets/images/carrossel/p4.webp', alt: 'Trabalho 4', label: 'Trabalho 4' },
  { imageUrl: '/assets/images/carrossel/p5.webp', alt: 'Trabalho 5', label: 'Trabalho 5' },
];
