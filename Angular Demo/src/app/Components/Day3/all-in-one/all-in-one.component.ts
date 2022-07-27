import { Component } from '@angular/core';

@Component({
  selector: 'app-all-in-one',
  templateUrl: './all-in-one.component.html',
  styleUrls: ['./all-in-one.component.css']
})
export class AllInOneComponent {

  name = "";
  age = 0;
  Students:{name:string, age:number}[] = [];

  getStudent(){
    let student = {name:this.name, age:this.age};
    if(this.age>18 && this.name){
      this.Students.push(student);
    }
    // console.log(this.Students)
  }

}
