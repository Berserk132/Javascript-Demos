import { IProduct } from 'src/app/Models/Product';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  counter: number = 1;
  currentProduct: IProduct;
  constructor(private homeService: HomeService, private basketService: BasketService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentProduct = this.homeService.products.find((item, index) => item.Id == params['id'])
    });
  }

  decrement() {
    if (this.counter > 1) {

      this.counter--;
    }
  }

  increment() {

    this.counter++;
  }


  AddToBasket(quantityIput: HTMLInputElement) {
    this.route.params.subscribe(params => {

      let product = this.homeService.products.find((item, index) => item.Id == params['id'])
      let quantity = parseInt(quantityIput.value)
      this.basketService.AddToBasket(product, quantity);
    });
  }

}
