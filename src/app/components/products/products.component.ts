import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public products = [
    {
      productId: '001',
      productName: 'White Basmathi Rice',
      createdDate: '2020.01.29',
      quantity: 100,
      unitPrice: '400',
      productDescription: 'White Basmathi Rice imported from pakistan',
    },
    {
      productId: '002',
      productName: 'Sugar',
      createdDate: '2020.01.29',
      quantity: 1200,
      unitPrice: '200',
      productDescription: 'White sugar manufactured by Palwatte Factory',
    },
    {
      productId: '003',
      productName: 'Flour',
      createdDate: '2020.01.29',
      quantity: 50,
      unitPrice: '190',
      productDescription: 'Super FIne Whole grain general Purpose flour ',
    },
    {
      productId: '004',
      productName: 'Dhal',
      createdDate: '2020.01.29',
      quantity: 10,
      unitPrice: '200',
      productDescription: 'Imported mysoor dhal from India',
    },
  ];
}
