import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../_models/User'

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  currentUser: User = new User();
  @Output() loginStatus = new EventEmitter<boolean>();
  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  login() {
    if(this.currentUser.username == 'username' && this.currentUser.password == 'password'){
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      this.loginStatus.emit(true);
      this.router.navigate(['home']);
    }
  }
}
