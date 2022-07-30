import { AccountService } from 'src/app/Components/account/account.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    // this.accountService.login(this.loginForm.value).subscribe(() => {

    //   console.log('user logged in')
    // },
    //   error => {
    //     console.log(error)
    //   })

    console.log(this.loginForm.get('username').value)
    this.accountService.login(this.loginForm.get('username').value);
    this.router.navigate(['/shop']);
  }

}
