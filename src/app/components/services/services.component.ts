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
  whatsappLink = 'https://wa.me/5544999968191?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20engenharia.';

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
      text: 'Projeto estrutural, laudos / vistorias técnicas, ART — responsabilidade de engenheiro.'
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
      title: "Limpeza de Caixa d'Água",
      text: 'Limpeza e higienização conforme normas sanitárias.'
    }
  ];

  problems = [
    {
      icon: '💧',
      title: 'Infiltração e vazamentos',
      dor: 'Manchas na parede, mofo, goteira e conta de água subindo sem explicação. Isso danifica a estrutura e prejudica a saúde da sua família.',
      solucao: 'Diagnóstico preciso com termografia e reparo definitivo — sem quebrar mais do que o necessário.'
    },
    {
      icon: '⚡',
      title: 'Problemas elétricos',
      dor: 'Disjuntor caindo, tomadas queimando, choques e fios expostos. Risco de curto-circuito e incêndio.',
      solucao: 'Projeto e execução conforme norma NBR 5410, com laudo técnico e certificação.'
    },
    {
      icon: '🏗️',
      title: 'Rachaduras e trincas',
      dor: 'Paredes rachando, pisos trincando, portas emperrando. Pode ser problema estrutural ou de movimentação de solo.',
      solucao: 'Análise de recalque, reforço estrutural e recuperação com materiais de alta resistência.'
    },
    {
      icon: '🚰',
      title: 'Entupimentos e esgoto',
      dor: 'Área alagada, mau cheiro, esgoto retornando. Problema sanitário que atrapalha o dia a dia.',
      solucao: 'Desobstrução hidráulica com equipamento profissional, limpeza de caixa d\'água e impermeabilização.'
    },
    {
      icon: '🔧',
      title: 'Reformas e reparos',
      dor: 'Obra parada, cômodo sem uso, acabamento mal feito. Você quer mudar mas não sabe por onde começar.',
      solucao: 'Projeto executivo, cronograma realista e mão de obra qualificada do começo ao fim.'
    },
    {
      icon: '📋',
      title: 'Serviços técnicos (ART)',
      dor: 'Precisa de laudo, regularização, responsabilidade técnica ou assinatura de ART mas não conhece engenheiro.',
      solucao: 'Emissão de ART, laudos técnicos e regularização de obras com engenheiro registrado no CREA.'
    }
  ];
}
