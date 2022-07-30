import { Filter } from './../../Models/Filter';
import { IProduct } from '../../Models/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as data from '../../data/products.json';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  products: IProduct[] = data['default'];

  constructor(private http: HttpClient) {
    console.log(this.products)
  }


  FilterData(prods: IProduct[], filterParams: Filter) {

    prods = this.products.filter((item, index) => item.Price >= filterParams.MinValue && item.Price <= filterParams.MaxValue)
    return prods;
  }

}
