import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBasketItem } from 'src/app/Models/basket';
import { IProduct } from 'src/app/Models/Product';
import { AccountService } from '../account/account.service';


@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basket: IBasketItem[];
  constructor(private http: HttpClient, private accountService: AccountService) {

    this.basket = []
  }



  AddToBasket(product: IProduct, quantity = 1) {

    const itemToAdd: IBasketItem = {
      id: product.Id,
      name: product.Name,
      image: product.image,
      price: product.Price,
      quantity,
    }
    let index = this.basket.findIndex((item, index) => item.id == product.Id);
    console.log(index)
    if (index === -1) this.basket.push(itemToAdd);
    else console.log('product already exists !!!!!!!')

  }

  RemoveFromBasket(basketItemId: number) {

    let index = this.basket.findIndex((item, index) => item.id == basketItemId);
    if (index >= 0) this.basket.splice(index, 1);
  }

  IncrementBasketItem(basketItemId: number) {

    let index = this.basket.findIndex((item, index) => item.id == basketItemId);

    if (index >= 0) this.basket[index].quantity++;
  }

  DecrementBasketItem(basketItemId: number) {

    let index = this.basket.findIndex((item, index) => item.id == basketItemId);

    if (index >= 0 && this.basket[index].quantity > 1) this.basket[index].quantity--;
  }

  LoadBasket() {

    return this.basket;
  }
}
