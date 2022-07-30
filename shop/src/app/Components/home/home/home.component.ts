import { Filter } from './../../../Models/Filter';
import { IProduct } from '../../../Models/Product';
import { HomeService } from './../home.service';
import { AccountService } from 'src/app/Components/account/account.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterModalComponent } from '../../shared/filter-modal/filter-modal.component';


@Component({
  selector: 'app-home-admin',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: IProduct[] = this.homeService.products;
  maxValueFilter: number = 0;
  minValueFilter: number = 0;
  constructor(private accountService: AccountService, private homeService: HomeService, public dialog: MatDialog) { }

  ngOnInit(): void {

    console.log(this.accountService.currentUser)
    console.log(this.products)
  }

  openDialog(): void {
    let filterParams: Filter = {MinValue: this.maxValueFilter, MaxValue: this.minValueFilter}
    const dialogRef = this.dialog.open(FilterModalComponent, {
      width: '250px',
      data: filterParams ,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.products = this.homeService.FilterData(this.products, result)
    });
  }

}
