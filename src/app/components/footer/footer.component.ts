import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FacebookPixelService } from '../../shared/facebook-pixel/facebook-pixel.services';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  whatsappLink = 'https://wa.me/5544999968191?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20CPS%20Engenharia.';
  instagramLink = 'https://www.instagram.com/cps_construcoes_servicos';
  googleReviewLink = 'https://g.page/r/Cd8QZsGbsOjFEAI/review';
  year = 2026;

  constructor(private pixelService: FacebookPixelService) {}

  trackClick(): void {
    this.pixelService.trackWhatsappClick('Footer');
    // Conversão Google Ads — clique no WhatsApp
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', { send_to: 'AW-17838804791/RLcQCOyEw_wcELeemrpC' });
    }
  }
}
