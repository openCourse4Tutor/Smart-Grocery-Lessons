import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public rowIndex!: number;
  showAddProduct!: boolean;
  isLoading :boolean = false;

  constructor(private productService : ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public products: Product[] = [];

  public selectProduct(selectedRow: number){
    this.rowIndex = selectedRow;
    }

  showAddProducts() {
      this.showAddProduct = true;
  }
  
  hideAddProducts() {
      this.showAddProduct = false;
  }

  refresh() {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((res) => {
      this.products = res.data;
      this.isLoading = false;
    });
  }
}
