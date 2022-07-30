import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { map } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  currentUser: string;


  constructor(private http: HttpClient, private router: Router, private injector: Injector) {
    this.currentUser = null
  }


  login(username: string) {
    this.currentUser = username;

  }

  logout() {
    this.currentUser = null;
  }

}
