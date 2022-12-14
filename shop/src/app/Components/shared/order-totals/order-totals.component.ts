import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../basket/basket.service';


@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.css']
})
export class OrderTotalsComponent implements OnInit {
  basketTotals: number;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketTotals = 2000;
  }

}
