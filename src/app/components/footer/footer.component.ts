import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  whatsappLink = 'https://wa.me/5544999999999?text=Olá!%20Gostaria%20de%20um%20orçamento.';
  year = new Date().getFullYear();

  links = [
    { label: 'Serviços', anchor: '#services' },
    { label: 'Sobre', anchor: '#about' },
    { label: 'Depoimentos', anchor: '#testimonials' },
    { label: 'Contato', anchor: '#contact' }
  ];
}
