import { ProductItem } from './product-item.model';

export interface CartItem {
  id: number;
  userId: number;
  date: string;
  products: ProductItem[];
}
