import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

import { FacebookPixelService } from '../facebook-pixel/facebook-pixel.services';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  template: `
    <div *ngIf="visible" class="whatsapp-float" (click)="trackClick()">
      <a href="https://wa.me/your-number" target="_blank">WhatsApp</a>
    </div>
  `,
  styles: [`
    .whatsapp-float { position: fixed; bottom: 20px; right: 20px; z-index: 1000; }
  `]
})
export class WhatsappFloatComponent implements OnInit, OnDestroy {
  visible: boolean = false;

  constructor(private pixelService: FacebookPixelService) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

  private onScroll = (): void => {
    this.visible = window.scrollY > 100;
  };

  trackClick(): void {
    this.pixelService.trackWhatsappClick('Botão Flutuante');
  }
}
