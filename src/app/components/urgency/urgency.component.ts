import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-urgency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './urgency.component.html',
  styleUrl: './urgency.component.css'
})
export class UrgencyComponent {
  whatsappLink = 'https://wa.me/5544999968191?text=Ol%C3%A1%20Cleiton!%20Meu%20problema%20n%C3%A3o%20pode%20esperar.%20Consegue%20me%20atender%20hoje%3F';

  infos = [
    { icon: '📍', text: 'Maringá - PR e cidades próximas' },
    { icon: '📅', text: 'Visita possível no mesmo dia do contato' },
    { icon: '⚡', text: 'Resposta rápida via WhatsApp' }
  ];

  checks = [
    '✅ Visita gratuita',
    '✅ Orçamento sem compromisso',
    '✅ Garantia em tudo',
    '✅ +10 anos de experiência'
  ];
}
