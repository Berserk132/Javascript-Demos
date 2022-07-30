import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }


  GetBasketLength() {

    return this.basketService.LoadBasket().length;
  }
}
