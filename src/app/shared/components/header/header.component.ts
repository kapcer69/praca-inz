import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matPerson, matShoppingCart } from '@ng-icons/material-icons/baseline';
import { faSolidHeart } from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ matPerson, faSolidHeart, matShoppingCart })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
