import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles:[` h1 {
  //   color:red;
  // }`]
})
export class AppComponent {
  title = 'app';
}

//line 9 is what is rendered when first run ng serve when making app at first

//application is built from components
//app.component is root component--holds all the other info for other component
