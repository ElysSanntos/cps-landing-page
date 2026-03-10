import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  whatsappLink = 'https://wa.me/5544999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20gratuito.';

  seals = [
    { icon: '🎓', text: 'Engenheiro Civil + Eletrotécnico formado' },
    { icon: '⭐', text: 'Mais de 10 anos de experiência' },
    { icon: '📍', text: 'Maringá e região' },
    { icon: '🛡️', text: 'Garantia em todos os serviços' }
  ];
}
