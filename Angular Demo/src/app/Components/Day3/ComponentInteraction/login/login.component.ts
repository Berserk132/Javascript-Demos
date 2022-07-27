import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  dataLogin = "2na Data Mn El Login";
  @Output() myEvent = new EventEmitter();
  constructor(){
    // setTimeout(()=>{
    //   this.myEvent.emit(this.dataLogin);
    // },1000)
  }

  SendNow(){
    this.myEvent.emit(this.dataLogin);
  }


}
