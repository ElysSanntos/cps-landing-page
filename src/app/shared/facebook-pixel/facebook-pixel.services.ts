import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var fbq: any;

@Injectable({
  providedIn: 'root'
})
export class FacebookPixelService {
  private readonly PIXEL_ID = '1536234664542465';

  constructor(private router: Router) {
    // [PERF 24/09/2026] Pixel NÃO carrega mais no bootstrap:
    // só dispara no 1º gesto do usuário (scroll/clique/toque/tecla).
    // Tira ~189 KiB do caminho crítico sem perder o Lead (ver trackWhatsappClick).
    this.loadPixelOnInteraction();
  }

  public initRouteTracking(): void {
    this.trackPageViews();
  }

  /** Aguarda o 1º gesto do usuário para carregar o fbevents.js */
  private loadPixelOnInteraction(): void {
    if (typeof window === 'undefined') return;
    if (this.isPixelLoaded()) return;

    const onInteraction = () => {
      this.ensurePixelLoaded();
    };

    ['scroll', 'click', 'touchstart', 'keydown'].forEach((eventName) => {
      window.addEventListener(eventName, onInteraction, { once: true, passive: true });
    });
  }

  /** Garante o pixel carregado + PageView na 1ª interação (ou no Lead) */
  private ensurePixelLoaded(): void {
    if (this.isPixelLoaded()) return;
    this.initPixel();
    if (typeof fbq !== 'undefined') {
      fbq('track', 'PageView');
    }
  }

  private isPixelLoaded(): boolean {
    return !!document.querySelector('script[src*="fbevents"]') || !!(window as any).fbq;
  }

  private initPixel(): void {
    if (typeof window === 'undefined') return;

    // JÁ TEM SCRIPT NO DOM? → não adiciona de novo
    if (document.querySelector('script[src*="fbevents"]')) return;
    if ((window as any).fbq) return;

    const f = window as any;
    f.fbq = function() {
      f.fbq.callMethod ? f.fbq.callMethod.apply(f.fbq, arguments) : f.fbq.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = f.fbq;
    f.fbq.push = f.fbq;
    f.fbq.loaded = true;
    f.fbq.version = '2.0';
    f.fbq.queue = [];

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    fbq('init', this.PIXEL_ID);
  }

  private trackPageViews(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (typeof fbq !== 'undefined') {
          fbq('track', 'PageView');
        }
      });
  }

  public trackWhatsappClick(origem: string): void {
    // [PERF 24/09/2026] Se o pixel ainda não carregou (visitante
    // clicou sem gesto prévio), inicializa NA HORA para NUNCA perder o Lead.
    this.ensurePixelLoaded();

    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead', {
        content_name: 'WhatsApp Click',
        content_category: origem,
        location: window.location.href
      });
    }

    // GA4 (P2): evento whatsapp_click com a origem do botão
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        origem: origem,
        page_location: window.location.href
      });
    }
  }
}
