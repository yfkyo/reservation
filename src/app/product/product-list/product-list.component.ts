import { Component, OnInit } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-productList',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductlistComponent implements OnInit{

  // products :any= [1,2,3,4]
  products :any;

  ngOnInit(): void {
    this.products = products
  }
  title = 'reservation';

}
