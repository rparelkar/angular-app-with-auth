
﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../_models/User'

@Component({
  selector: 'logout-component',
  templateUrl: './logout.component.html',
})

export class LogoutComponent implements OnInit {
  currentUser: User = new User();
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
