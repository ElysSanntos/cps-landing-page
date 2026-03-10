import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  whatsappLink = 'https://wa.me/5544999999999?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20os%20serviços.';

  services = [
    {
      icon: '⚡',
      title: 'Elétrica',
      text: 'Instalações, reparos, troca de pontos, quadro de distribuição e muito mais.'
    },
    {
      icon: '🚰',
      title: 'Hidráulica',
      text: 'Canos, torneiras, registros, vazamentos, encanamentos novos.'
    },
    {
      icon: '🎨',
      title: 'Pintura',
      text: 'Interna, externa, textura, massa corrida — acabamento de qualidade.'
    },
    {
      icon: '🏗️',
      title: 'Reforma Geral',
      text: 'Banheiros, cozinhas, ambientes completos, do início ao fim.'
    },
    {
      icon: '📐',
      title: 'Projetos e Engenharia',
      text: 'Projeto estrutural, laudos técnicos, ART — responsabilidade de engenheiro.'
    },
    {
      icon: '🏠',
      title: 'Construção do Zero',
      text: 'Fundação, estrutura, alvenaria — sua obra nas mãos certas.'
    },
    {
      icon: '🚿',
      title: 'Reparos Residenciais',
      text: 'Troca de chuveiro, consertos gerais, telhado, substituições.'
    },
    {
      icon: '💧',
      title: 'Limpeza de Caixa d\'Água',
      text: 'Limpeza e higienização conforme normas sanitárias.'
    }
  ];
}
