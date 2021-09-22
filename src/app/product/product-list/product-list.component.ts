import { Component, OnInit } from '@angular/core';
//import { products } from '../../products';
import { ProductService } from '../shared/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productList',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductlistComponent implements OnInit{

  // products :any= [1,2,3,4]
  products :any;

  constructor(private ProductService:ProductService){
  }

  ngOnInit(): void {
    const productsObservable = this.ProductService.getProducts()

    productsObservable.subscribe(
      (data) =>{
        console.log('got value ' + data)
        this.products = data
      },
      (err) =>{console.error('something wrong occurred: ' + err)},
      () =>{console.log('done')}
    )
    // const observable = new Observable(subscriber => {
    // subscriber.next(1);
    // subscriber.next(2);
    // subscriber.next(3);
    // setTimeout(() => {
    //   subscriber.next(4);
    //   subscriber.complete();
    // }, 2000);
    // });
    // console.log('just before subscribe');
    // observable.subscribe({
    //   next(data) { console.log('got value ' + data); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });
    // console.log('just after subscribe');


  }
  title = 'reservation';

}
