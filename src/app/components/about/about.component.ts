import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  whatsappLink = 'https://wa.me/5544999968191?text=Ol%C3%A1%20Cleiton!%20Gostaria%20de%20falar%20sobre%20um%20servi%C3%A7o.';

  credentials = [
    'Engenheiro Civil — CREA registrado',
    'Técnico em Eletrotécnica formado',
    '+10 anos de experiência em Maringá e região',
    'Responsabilidade técnica com ART',
    'Garantia em todos os serviços executados'
  ];
}
