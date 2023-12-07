import { Routes } from '@angular/router';
import { ProductPageComponent } from './products/pages/product-page/product-page.component';
import { ProductDetailsPageComponent } from './products/pages/product-details-page/product-details-page.component';

export const routes: Routes = [
  { path: '', component: ProductPageComponent },
  { path: 'details/:id', component: ProductDetailsPageComponent },
];
