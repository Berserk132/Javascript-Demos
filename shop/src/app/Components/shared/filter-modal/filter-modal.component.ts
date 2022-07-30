import { Filter } from './../../../Models/Filter';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
})
export class FilterModalComponent {


  constructor(
    public dialogRef: MatDialogRef<FilterModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Filter) {console.log(data) }



  onNoClick(): void {
    this.dialogRef.close();
  }

  MinRange(input) {

    this.data.MinValue = input.target.value
  }


  MaxRange(input) {

    this.data.MaxValue = input.target.value
  }

}
