import { AccountService } from 'src/app/Components/account/account.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, AbstractControlOptions, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsernameValidator } from '../../shared/validators/username.validator';
import * as customeValidations from '../../shared/validators/custome.validator';
import { debounceTime } from 'rxjs/operators'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailMessage: string;

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  }

  constructor(private router: Router, private accountService: AccountService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), customeValidations.firstNameNotEqualAhmed]],
      lastName: ['', [Validators.required]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required]],
      }),
      phone: ['', [Validators.required]],
      notification: 'email',
      rating: [null, [customeValidations.ratingRange(1, 5)]],
      sendCatalog: [''],
      addresses: this.fb.array([this.buildAddress()])
    })

    this.addEmailGroupValidation(this.loginForm.get('emailGroup'))



    this.loginForm.get('emailGroup').valueChanges.subscribe({

      next: () => console.log(this.loginForm)
    })


    const emailControl = this.loginForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe({
      next: (value) => this.setMessage(emailControl)
    })

  }

  get LoginForm() {

    return this.loginForm.controls;
  }

  get addresses(): FormArray {
    return <FormArray>this.loginForm.get('addresses');
  }

  onSubmit() {

    console.log(this.loginForm.get('firstName').value + this.loginForm.get('lastName').value)
    this.accountService.login(this.loginForm.get('firstName').value + ' ' + this.loginForm.get('lastName').value);
    this.router.navigate(['/shop']);
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.validationMessages[key]).join(' ');
    }
  }

  addEmailGroupValidation(c: AbstractControl) {

    c.setValidators(customeValidations.compareEmails)
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    });
  }

  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

}
