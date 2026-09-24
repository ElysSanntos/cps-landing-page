export interface CarouselSlide {
  imageUrl: string;
  label: string;
  alt: string;
  width: number;
  height: number;
}

const slides: CarouselSlide[] = [
  { imageUrl: 'assets/images/carrossel/p1.webp', label: 'Trabalho 1',   alt: 'Trabalho 1',   width: 768, height: 1376 },
  { imageUrl: 'assets/images/carrossel/p2.webp', label: 'Trabalho 2',   alt: 'Trabalho 2',   width: 768, height: 1376 },
  { imageUrl: 'assets/images/carrossel/p3.webp', label: 'Trabalho 3',   alt: 'Trabalho 3',   width: 768, height: 1376 },
  { imageUrl: 'assets/images/carrossel/p4.webp', label: 'Trabalho 4',   alt: 'Trabalho 4',   width: 768, height: 1376 },
  { imageUrl: 'assets/images/carrossel/p5.webp', label: 'Trabalho 5',   alt: 'Trabalho 5',   width: 864, height: 1536 },
];

export const carouselSlides: CarouselSlide[] = slides;
export const CAROUSEL_SLIDES: CarouselSlide[] = slides;
