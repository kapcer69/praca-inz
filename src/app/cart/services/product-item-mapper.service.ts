import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product-item.model';

@Injectable({
  providedIn: 'root',
})
export class ProductItemMapperService {
  mapProductItems(response: ProductItem[]): ProductItem[] {
    return response.map((item) => this.mapProductItem(item));
  }

  mapProductItem(response: ProductItem): ProductItem {
    return {
      productId: response.productId,
      quantity: response.quantity,
    };
  }
}
