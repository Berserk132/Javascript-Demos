import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students: {name: string, age: number}[] = []

  constructor() { }

  ngOnInit(): void {

  }

  HomeValidator = new FormGroup({
    name: new FormControl("Aly",[Validators.required]),
    age:new FormControl(12,[Validators.min(12),Validators.max(40)])
  })

  @Output() myEvent = new EventEmitter();
  error:boolean = false;
  submited:boolean = false;

  Add(name:string,age:number){
    let student = {name, age};
    
    if(this.HomeValidator.valid){

      console.log(this.HomeValidator.controls["name"].valid);
      console.log(this.HomeValidator.controls["age"].valid);
      this.students.push(student)
      this.error = false;
      this.submited = true;
    }else{

      console.log("Not Valid")
      this.error = true;
    }
  }

}
