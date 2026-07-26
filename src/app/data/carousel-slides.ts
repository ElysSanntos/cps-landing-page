export interface CarouselSlide {
  imageUrl: string;
  alt: string;
  label: string;
}

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  { imageUrl: '/assets/images/carrossel/p1.png', alt: 'Trabalho 1', label: 'Trabalho 1' },
  { imageUrl: '/assets/images/carrossel/p2.png', alt: 'Trabalho 2', label: 'Trabalho 2' },
  { imageUrl: '/assets/images/carrossel/p3.png', alt: 'Trabalho 3', label: 'Trabalho 3' },
  { imageUrl: '/assets/images/carrossel/p4.png', alt: 'Trabalho 4', label: 'Trabalho 4' },
  { imageUrl: '/assets/images/carrossel/p5.png', alt: 'Trabalho 5', label: 'Trabalho 5' },
];
