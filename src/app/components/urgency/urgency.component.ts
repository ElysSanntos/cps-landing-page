import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FacebookPixelService } from '../../shared/facebook-pixel/facebook-pixel.services';

@Component({
  selector: 'app-urgency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './urgency.component.html',
  styleUrl: './urgency.component.css'
})
export class UrgencyComponent {
  whatsappLink = 'https://wa.me/5544999968191?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20sem%20compromisso.';
  infos = [
    { icon: '📍', text: 'Maringá - PR e cidades próximas' },
    { icon: '📅', text: 'Visita possível no mesmo dia do contato' },
    { icon: '⚡', text: 'Resposta rápida via WhatsApp' }
  ];

  checks = [
    '✅ Orçamento sem compromisso',
    '✅ Garantia',
    '✅ +10 anos de experiência'
  ];

  constructor(private pixelService: FacebookPixelService) {}

  trackClick(): void {
    this.pixelService.trackWhatsappClick('Urgência');
    // Conversão Google Ads — clique no WhatsApp
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', { send_to: 'AW-17838804791/RLcQCOyEw_wcELeemrpC' });
    }
  }
}
