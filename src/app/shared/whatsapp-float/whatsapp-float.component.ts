import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookPixelService } from '../facebook-pixel/facebook-pixel.services';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-float.component.html',
  styleUrl: './whatsapp-float.component.css'
})
export class WhatsappFloatComponent implements OnInit, OnDestroy {
  whatsappLink = 'https://wa.me/5544999968191?text=Olá!%20Gostaria%20de%20um%20orçamento%20sem%20compromisso.';
  visible = false;
  private scrollFn!: () => void;

  constructor(private pixelService: FacebookPixelService) {}

  ngOnInit() {
    this.scrollFn = () => {
      this.visible = window.scrollY > 400;
    };
    window.addEventListener('scroll', this.scrollFn);
  }

  trackClick(): void {
    this.pixelService.trackWhatsappClick('Botão Flutuante');
  }

  ngOnDestroy() {
    if (this.scrollFn) {
      window.removeEventListener('scroll', this.scrollFn);
    }
  }
}
