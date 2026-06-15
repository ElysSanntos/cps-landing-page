import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FacebookPixelService } from '../../shared/facebook-pixel/facebook-pixel.services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  whatsappLink = 'https://wa.me/5544999968191?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20sem%20compromisso.';

  constructor(private pixelService: FacebookPixelService) {}

  trackClick(): void {
    this.pixelService.trackWhatsappClick('Navbar');
  }
}
