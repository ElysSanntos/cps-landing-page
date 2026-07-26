import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FacebookPixelService } from '../../shared/facebook-pixel/facebook-pixel.services';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  whatsappLink = 'https://wa.me/5544999968191?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consultoria%20t%C3%A9cnica%20com%20a%20CPS%20Engenharia.';

  seals = [
    { icon: '🎓', text: 'Engenheiro Civil + Eletrotécnico formado' },
    { icon: '⭐', text: 'Mais de 10 anos de experiência' },
    { icon: '📍', text: 'Maringá e região' },
    { icon: '🛡️', text: 'Garantia em todos os serviços' }
  ];

  constructor(private pixelService: FacebookPixelService) {}

  trackClick(): void {
    this.pixelService.trackWhatsappClick('Hero Section');
  }
}
