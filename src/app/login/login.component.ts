
﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../_models/User'

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  currentUser: User = new User();
  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  login() {
    console.log(this.currentUser);
    if(this.currentUser.username == 'username' && this.currentUser.password == 'password'){
      console.log('authenticated');
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      this.router.navigate(['home']);
    }
  }
}
