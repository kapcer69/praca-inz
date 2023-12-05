import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matPerson, matShoppingCart } from '@ng-icons/material-icons/baseline';
import { faSolidHeart } from '@ng-icons/font-awesome/solid';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, RouterLink, RouterLinkActive, RouterOutlet],
  providers: [provideIcons({ matPerson, faSolidHeart, matShoppingCart })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
