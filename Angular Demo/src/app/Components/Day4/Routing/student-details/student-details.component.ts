import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {

  UserId=0;
  constructor(myActivated:ActivatedRoute) {
    // console.log(myActivated.snapshot.params["id"]);
    this.UserId = myActivated.snapshot.params["id"];
   }

  ngOnInit(): void {
  }

}
