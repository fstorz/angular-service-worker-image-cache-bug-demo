import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Image-Cache-Service-Worker';
  // Any sample image from the web, could be also requested dynamically from an api or alike
  imageSource = 'https://assets.rbl.ms/21210913/origin.jpg';
}
