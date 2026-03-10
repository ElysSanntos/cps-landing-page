import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guarantee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guarantee.component.html',
  styleUrl: './guarantee.component.css'
})
export class GuaranteeComponent {
  guarantees = [
    {
      icon: '🛡️',
      title: 'Garantia de Serviço',
      text: 'Se após a conclusão surgir qualquer problema relacionado ao que foi feito, Cleiton volta e corrige. Sem custo adicional, sem discussão.'
    },
    {
      icon: '📋',
      title: 'Responsabilidade Técnica',
      text: 'Como Engenheiro Civil registrado, Cleiton assina a responsabilidade técnica pelos projetos que executa. Você tem documentação e segurança jurídica.'
    },
    {
      icon: '💬',
      title: 'Orçamento sem Pressão',
      text: 'A visita é gratuita. O orçamento é gratuito. E você decide na hora que quiser — sem ligações insistentes, sem pressão.'
    }
  ];
}
