import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    if(changes["studentInfo"].currentValue){
    // if(!changes["studentInfo"].firstChange){
    // if(this.studentInfo){
      this.Students.push(this.studentInfo);
    }
  }

  // @Input() StudentsInfo:{name:string, age:number}[]=[];

  @Input("studentDala3") studentInfo:any;

  Students:{name:string, age:number}[] = [];



}
