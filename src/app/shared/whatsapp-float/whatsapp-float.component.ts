import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-float.component.html',
  styleUrl: './whatsapp-float.component.css'
})
export class WhatsappFloatComponent {
  whatsappLink = 'https://wa.me/5544999999999?text=Olá!%20Gostaria%20de%20um%20orçamento%20gratuito.';
  visible = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.visible = window.scrollY > 400;
    });
  }
}
