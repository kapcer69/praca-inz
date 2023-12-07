import { Component, Input, OnInit } from '@angular/core';
import { ProductMapperService } from '../../services/product-mapper.service';
import { ProductCard } from '../../models/product-card.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit {
  @Input() product!: ProductCard;

  constructor(private readonly productMapper: ProductMapperService) {}

  ngOnInit(): void {
    this.product = this.productMapper.mapProductCard(this.product);
  }
}
