import { CommonModule } from '@angular/common';
import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { CarouselSlide } from '../../data/carousel-slides';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent implements AfterViewInit, OnDestroy {
  @Input() slides: CarouselSlide[] = [];
  @Input() autoPlayInterval = 4000;

  activeSlide = 0;
  skipTransition = false;
  private autoPlayTimer: any;

  ngAfterViewInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    if (this.autoPlayTimer) return;
    this.autoPlayTimer = setInterval(() => this.next(), this.autoPlayInterval);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  restartAutoPlay() {
    this.stopAutoPlay();
    setTimeout(() => this.startAutoPlay(), 5000);
  }

  goTo(index: number) {
    this.skipTransition = false; // clique manual → anima normalmente
    this.stopAutoPlay();
    this.activeSlide = index;
    setTimeout(() => this.startAutoPlay(), 5000);
  }

  next() {
    if (this.activeSlide === this.slides.length - 1) {
      // Último → primeiro: pula sem animação (sem rewind feio)
      this.skipTransition = true;
      this.activeSlide = 0;
      setTimeout(() => { this.skipTransition = false; }, 30);
    } else {
      this.skipTransition = false;
      this.activeSlide++;
    }
  }

  prev() {
    if (this.activeSlide === 0) {
      // Primeiro → último: pula sem animação
      this.skipTransition = true;
      this.activeSlide = this.slides.length - 1;
      setTimeout(() => { this.skipTransition = false; }, 30);
    } else {
      this.skipTransition = false;
      this.activeSlide--;
    }
  }
}
