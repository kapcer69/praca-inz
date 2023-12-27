import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartApiService {
  constructor(private readonly http: HttpClient) {}

  getAllCarts(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${environment.apiBaseUrl}carts`);
  }

  getCartById(id: number): Observable<CartItem> {
    return this.http.get<CartItem>(`${environment.apiBaseUrl}carts/${id}`);
  }

  addToCart(item: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(
      `${environment.apiBaseUrl}carts/${item.id}`,
      item
    );
  }
}
