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
  whatsappLink = 'https://wa.me/5544999968191?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20sem%20compromisso.';
  instagramLink = 'https://www.instagram.com/cps_construcoes_servicos';
  googleReviewLink = 'https://g.page/r/Cd8QZsGbsOjFEAI/review';
  year = 2026;
}
