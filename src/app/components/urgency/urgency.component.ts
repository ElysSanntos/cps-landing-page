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
  whatsappLink = 'https://wa.me/5544999999999?text=Olá%20Cleiton!%20Preciso%20de%20um%20orçamento%20urgente.';

  infos = [
    { icon: '📍', text: 'Maringá - PR e cidades próximas' },
    { icon: '📅', text: 'Visita possível no mesmo dia do contato' },
    { icon: '⚡', text: 'Resposta rápida via WhatsApp' }
  ];
}
