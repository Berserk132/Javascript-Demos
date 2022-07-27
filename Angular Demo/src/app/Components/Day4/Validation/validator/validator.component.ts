import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styles: [
  ]
})
export class ValidatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  RegistrationValidator = new FormGroup({
    name: new FormControl("Aly",Validators.required),
    age:new FormControl(0,[Validators.min(20),Validators.max(40)])
  })


  get AgeValid(){
    return this.RegistrationValidator.controls["age"].valid;
  }


  Add(){
    // console.log(this.RegistrationValidator.value);
    console.log(this.RegistrationValidator);
    if(this.RegistrationValidator.valid){
      console.log(this.RegistrationValidator.controls["name"].valid);
      console.log(this.RegistrationValidator.controls["age"].valid);
    }else{
      console.log("Not Valid")
    }
  }

}
