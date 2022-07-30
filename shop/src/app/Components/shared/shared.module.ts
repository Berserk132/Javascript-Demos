import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'

import { CdkStepperModule } from '@angular/cdk/stepper';
import { BasketSummaryComponent } from './basket-summary/basket-summary.component';
import { RouterModule } from '@angular/router';
import { OrderTotalsComponent } from './order-totals/order-totals.component';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BasketSummaryComponent,
    OrderTotalsComponent,
    FilterModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    CdkStepperModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: [
    PaginationModule,
    ReactiveFormsModule,
    BsDropdownModule,
    ReactiveFormsModule,
    CdkStepperModule,
    BasketSummaryComponent,
    OrderTotalsComponent,
    FilterModalComponent,

  ]
})
export class SharedModule { }
