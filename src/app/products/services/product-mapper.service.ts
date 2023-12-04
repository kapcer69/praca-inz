import { Injectable } from '@angular/core';
import { ProductCard } from '../models/product-card.model';

@Injectable({
  providedIn: 'root',
})
export class ProductMapperService {
  mapProductCards(response: ProductCard[]): ProductCard[] {
    return response.map((product) => this.mapProductCard(product));
  }

  mapProductCard(response: ProductCard): ProductCard {
    return {
      id: response.id,
      title: response.title,
      price: response.price,
      category: response.category,
      description: response.description,
      image: response.image,
    };
  }
}
