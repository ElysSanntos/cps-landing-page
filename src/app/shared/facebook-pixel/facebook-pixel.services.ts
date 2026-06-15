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
    this.initPixel();
  }

  public initRouteTracking(): void {
    this.trackPageViews();
  }

  private initPixel(): void {
    if (typeof window !== 'undefined' && !(window as any).fbq) {
      const f = (window as any);
      f.fbq = function() {
        f.fbq.callMethod ? f.fbq.callMethod.apply(f.fbq, arguments) : f.fbq.queue.push(arguments);
      };
      f.fbq.push = f.fbq;
      f.fbq.loaded = true;
      f.fbq.version = '2.0';
      f.fbq.queue = [];

      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);

      fbq('init', this.PIXEL_ID);
      fbq('track', 'PageView');
    }
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
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead', {
        content_name: 'WhatsApp Click',
        content_category: origem,
        location: window.location.href
      });
    }
  }
}
