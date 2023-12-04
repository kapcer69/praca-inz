import { Component } from '@angular/core';
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
  imports: [NgIconComponent],
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
