import { Component } from '@angular/core';

@Component({
  // app is prefix to prevent duplication with third party component 
  // we can change prefix in angular.json file
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
