import { Component, OnInit } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  private isLoggedIn:Boolean = false;

  constructor(
    private _authguard: AuthGuard
  ){
    this.isLoggedIn = this._authguard.isLoggedIn();
  }

  ngOnInit() {
  }

}
