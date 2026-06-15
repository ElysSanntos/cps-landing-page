import { AfterViewInit, Component, OnInit } from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServicesComponent } from './components/services/services.component';
import { UrgencyComponent } from './components/urgency/urgency.component';
import { FacebookPixelService } from './shared/facebook-pixel/facebook-pixel.services';
import { ScrollRevealService } from './shared/scroll-reveal.service';
import { WhatsappFloatComponent } from './shared/whatsapp-float/whatsapp-float.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    UrgencyComponent,
    FooterComponent,
    WhatsappFloatComponent
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'cps-engenharia';

  constructor(
    private scrollReveal: ScrollRevealService,
    private pixelService: FacebookPixelService
  ) {}

  ngOnInit(): void {
    // Inicializa o rastreio de rotas assim que o app carregar
    this.pixelService.initRouteTracking();
  }

  ngAfterViewInit(): void {
       setTimeout(() => this.scrollReveal.init(), 100);
  }
}
