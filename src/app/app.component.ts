import { Component, AfterViewInit } from '@angular/core';
import { ScrollRevealService } from './shared/scroll-reveal.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProblemComponent } from './components/problem/problem.component';
import { AboutComponent } from './components/about/about.component';
import { MethodComponent } from './components/method/method.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GuaranteeComponent } from './components/guarantee/guarantee.component';
import { UrgencyComponent } from './components/urgency/urgency.component';
import { CtaFinalComponent } from './components/cta-final/cta-final.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappFloatComponent } from './shared/whatsapp-float/whatsapp-float.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ProblemComponent,
    AboutComponent,
    MethodComponent,
    ServicesComponent,
    TestimonialsComponent,
    GuaranteeComponent,
    UrgencyComponent,
    CtaFinalComponent,
    FooterComponent,
    WhatsappFloatComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'cps-landing';

  constructor(private scrollReveal: ScrollRevealService) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.scrollReveal.init(), 100);
  }
}
