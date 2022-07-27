import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent {

  @Output() myEvent = new EventEmitter();

  Add(name:string,age:number){
    let student = {name, age};
    // console.log(name, age);
    this.myEvent.emit(student);
  }

}
