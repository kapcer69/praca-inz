import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  faBrandFacebook,
  faBrandTwitter,
  faBrandLinkedin,
  faBrandInstagram,
  faBrandYoutube,
} from '@ng-icons/font-awesome/brands';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent, RouterLink, RouterLinkActive, RouterOutlet],
  providers: [
    provideIcons({
      faBrandFacebook,
      faBrandTwitter,
      faBrandLinkedin,
      faBrandInstagram,
      faBrandYoutube,
    }),
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
