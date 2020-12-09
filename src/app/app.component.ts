import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'BlockCovid';
  router: Router;

  constructor(
    private r: Router
  ) {
    this.router = r;
  }

  onLogout(){
    console.log(window.sessionStorage.length);
    window.sessionStorage.clear();
    console.log(window.sessionStorage.length);
  }

}
