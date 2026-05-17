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

  steps = [
    {
      number: '1',
      title: 'Vistoria',
      text: 'Vou até o local, avalio o problema pessoalmente e tiro todas as dúvidas.'
    },
    {
      number: '2',
      title: 'Orçamento',
      text: 'Apresento o orçamento detalhado por etapa, sem letras miúdas nem surpresas.'
    },
    {
      number: '3',
      title: 'Execução',
      text: 'Serviço realizado com técnica, segurança e respeito pelo seu espaço.'
    },
    {
      number: '4',
      title: 'Entrega',
      text: 'Tudo limpo, testado e com garantia. Só considero concluído quando você aprova.'
    }
  ];
}