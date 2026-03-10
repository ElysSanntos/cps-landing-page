import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problem.component.html',
  styleUrl: './problem.component.css'
})
export class ProblemComponent {
  problems = [
    {
      emoji: '😤',
      title: 'O profissional que sumiu',
      text: 'Você chamou alguém, pagou, combinou tudo — e o cara simplesmente sumiu no meio do serviço. Deixou a obra parada, sua casa bagunçada e o dinheiro foi embora.'
    },
    {
      emoji: '😰',
      title: 'O serviço mal feito',
      text: 'O serviço foi "concluído", mas duas semanas depois o problema voltou. Infiltração, fio mal conectado, cano que vaza de novo. E aí você precisa pagar duas vezes pelo mesmo conserto.'
    },
    {
      emoji: '😟',
      title: 'A insegurança de não saber em quem confiar',
      text: 'Você busca alguém no Google, pede indicação, mas no fundo não sabe se a pessoa tem preparo técnico de verdade — ou se é só mais um "faz-tudo" sem qualificação.'
    }
  ];
}
