import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ViewProductDetailsComponent } from '../view-product-details/view-product-details.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public rowIndex!: number;
  showAddProduct!: boolean;
  isLoading :boolean = false;
  showEditProduct!: boolean;
  selectedProductId! :number;
  message! :string;

  constructor(private productService : ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public products: Product[] = [];

  public selectProduct(selectedRow:any, selectedId :number) {
    this.rowIndex = selectedRow;
    this.selectedProductId =selectedId;
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

  OpenEditProductView(){
    this.showEditProduct = true;
  }

  closeEditView(){
    this.showEditProduct = false;
  }

  getProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((res) => {
      this.products = res.data;
      this.isLoading = false;
    });
  }

  updateProductList(){
    this.getProducts();
  }
}
