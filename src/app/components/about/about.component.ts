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
  whatsappLink = 'https://wa.me/5544999999999?text=Olá%20Cleiton!%20Vi%20seu%20site%20e%20gostaria%20de%20um%20orçamento.';

  credentials = [
    'Engenheiro Civil — CREA registrado',
    'Técnico em Eletrotécnica formado',
    '+10 anos de experiência em Maringá e região',
    'Responsabilidade técnica com ART',
    'Garantia em todos os serviços executados'
  ];
}
