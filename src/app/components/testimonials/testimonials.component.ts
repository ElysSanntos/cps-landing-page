import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      initial: 'C',
      name: 'Carlos M.',
      service: 'Elétrica — Maringá',
      text: 'Tive um problema elétrico sério em casa que já havia tentado resolver com dois profissionais antes, sem sucesso. Cleiton veio, identificou na hora e resolveu no mesmo dia. Profissional de verdade!'
    },
    {
      initial: 'A',
      name: 'Ana Paula R.',
      service: 'Reforma de Banheiro — Maringá',
      text: 'Fiz uma reforma completa no banheiro com o Cleiton. Do azulejo ao chuveiro. Prazo cumprido, preço justo e acabamento impecável. Já indiquei para toda a família.'
    },
    {
      initial: 'R',
      name: 'Roberto S.',
      service: 'Projeto Estrutural — Região de Maringá',
      text: 'Contratei o Cleiton para o projeto estrutural da minha casa. Segurança total em saber que um engenheiro formado assinou e acompanhou tudo. Vale cada centavo.'
    }
  ];
}
