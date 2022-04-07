import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // interpolation:['?','?'] //This is a code segment to be used when trying out delimitter configuration
})
export class ProductsComponent implements OnInit {
  public firstProductItemName = 'White Basmathi Rice';
  constructor() {}

  ngOnInit(): void {}

  public getPriceofRice() {
    return 350;
  }

  // variables related to show how private protected members work in interpolation.
  // comment out and try
  //private firstProductItemName = "White Basmathi Rice" ;
  //protected firstProductItemName = "White Basmathi Rice" ;



  // variables related to show Invalid templates using Assignment, bitwise, increment and decrement perators (=,+=, -=, |, &, ++, –,!, ?. etc.)
  // comment out and try
  // public quantityOfRice : number = 5;
  //<td>{{quantityOfRice++}}</td>
  //<td>{{quantityOfRice + 1 }}</td>
}
