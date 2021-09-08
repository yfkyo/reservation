import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productList',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductlistComponent implements OnInit{
  ngOnInit(): void {
  }
  
  title = 'reservation';
}
