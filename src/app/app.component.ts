import { Component, OnInit } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  private isLoggedIn:Boolean = false;
  private showLogin:Boolean = true;
  private showHome:Boolean = false;
  private showAbout:Boolean = false;

  constructor(){
  }

  ngOnInit() {

  }

  isloggedInStatus(e) {
    this.isLoggedIn = e;
    this.goToHome();
  }

  setOthersFalse(){
    this.showLogin = false;
    this.showHome = false;
    this.showAbout = false;
  }

  goToHome() {
    if(this.isLoggedIn && !this.showHome){
      this.setOthersFalse();
      this.showHome = true;
    }
  }

  goToAbout() {
    console.log('about clicked');
    if(this.isLoggedIn && !this.showAbout){
      this.setOthersFalse();
      this.showAbout = true;
    }
  }

  goToLogout(){
    localStorage.removeItem('currentUser');
    this.setOthersFalse();
    this.showLogin = true;
    this.isLoggedIn = false;
  }

}
