import { Component, Input } from '@angular/core';

//Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//HTML
  styleUrls: ['./app.component.css']//CSS
})
export class AppComponent {

  students: object[] = [];

  constructor() {


  }

  GetData(data:any){
    data.myEvent.subscribe((std:any) => {

      console.log(std)
      this.students.push(std)
      console.log(this.students)
    })

  }

  sendStudents(data:any) {
    console.log(data)
  
    data.students = this.students
  }


  // title = 'second';
  //Logic
  // dataParent = "2na data mn el Parent";
  // dataFromLogin = "";
  // GetData(data:any){
  //   // console.log(data);
  //   this.dataFromLogin = data;
  // }
}
