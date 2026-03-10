import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-final',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-final.component.html',
  styleUrl: './cta-final.component.css'
})
export class CtaFinalComponent {
  whatsappLink = 'https://wa.me/5544999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20gratuita.';

  checks = [
    '✅ Visita gratuita',
    '✅ Orçamento sem compromisso',
    '✅ Garantia em tudo',
    '✅ +10 anos de experiência'
  ];
}
