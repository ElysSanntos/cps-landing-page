import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { FacebookPixelService } from '../facebook-pixel/facebook-pixel.services';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-float.component.html',
  styleUrl: './whatsapp-float.component.css'
})
export class WhatsappFloatComponent implements OnInit, OnDestroy {
  whatsappLink = 'https://wa.me/5544999968191?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20CPS%20Engenharia.';
  visible = false;
  private scrollFn!: () => void;

  constructor(private pixelService: FacebookPixelService) {}

  ngOnInit() {
    this.scrollFn = () => {
      this.visible = window.scrollY > 400;
    };
    window.addEventListener('scroll', this.scrollFn);
  }

  trackClick(): void {
    this.pixelService.trackWhatsappClick('Botão Flutuante');
    // Conversão Google Ads — clique no WhatsApp
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', { send_to: 'AW-17838804791/RLcQCOyEw_wcELeemrpC' });
    }
  }

  ngOnDestroy() {
    if (this.scrollFn) {
      window.removeEventListener('scroll', this.scrollFn);
    }
  }
}
