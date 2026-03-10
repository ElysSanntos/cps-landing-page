import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './method.component.html',
  styleUrl: './method.component.css'
})
export class MethodComponent {
  steps = [
    {
      num: 1,
      icon: '📞',
      title: 'Avaliação Gratuita',
      text: 'Entre em contato, agendamos uma visita. Cleiton vai até sua casa, avalia o problema com olhar técnico — sem cobrar nada por isso.'
    },
    {
      num: 2,
      icon: '📋',
      title: 'Orçamento Transparente',
      text: 'Você recebe um orçamento claro, sem termos técnicos confusos e sem surpresas. Você decide com total liberdade — sem pressão.'
    },
    {
      num: 3,
      icon: '🔨',
      title: 'Execução e Garantia',
      text: 'O serviço é executado com qualidade e você recebe garantia do que foi feito. Simples assim.'
    }
  ];
}
