import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit {


  ngOnInit(): void {

    console.log(this.students)
  }
  students:any;


}
