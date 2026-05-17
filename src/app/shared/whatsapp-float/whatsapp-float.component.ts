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
  whatsappLink = 'https://wa.me/5544999968191?text=Olá!%20Gostaria%20de%20um%20orçamento%20sem%20compromisso.';
  visible = false;
  private scrollFn!: () => void;

  ngOnInit() {
    this.scrollFn = () => {
      this.visible = window.scrollY > 400;
    };
    window.addEventListener('scroll', this.scrollFn);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollFn);
  }
}

