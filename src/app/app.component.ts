import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  template:`
  <div>

  <pm-home></pm-home>
 
  </div>
  `
})
export class AppComponent {
  title = 'credit-card-app';
  pageTitle:string = 'Welcome to Credit Card App'; 
}
