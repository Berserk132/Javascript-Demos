import { IBasketItem } from 'src/app/Models/basket';
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.css']
})
export class BasketSummaryComponent implements OnInit {

  @Input() isBasket = true;

  @Input() basketProducts: IBasketItem[];


  @Output() decrement: EventEmitter<number> = new EventEmitter<number>();
  @Output() increment: EventEmitter<number> = new EventEmitter<number>();
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.basketProducts)
  }

  decrementItemQuantity(basketItemId: number) {
    this.decrement.emit(basketItemId);
  }

  incrementItemQuantity(basketItemId: number) {
    this.increment.emit(basketItemId);
  }

  removeBasketItem(basketItemId: number) {
    this.remove.emit(basketItemId);
  }

}
