import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCard } from '../../models/product-card.model';
import { ProductApiService } from '../../services/product-api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productId = 0;
  product!: ProductCard;

  constructor(
    private readonly route: ActivatedRoute,
    private productApi: ProductApiService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.params['id']);
    this.productApi
      .getProductById(this.productId)
      .subscribe((product) => (this.product = product));
  }
}
