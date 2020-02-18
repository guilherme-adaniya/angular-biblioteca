import { Component } from '@angular/core';

@Component({
  selector: 'ba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{


  title: string = "Home";

  receiveTitle($event) {
    this.title = $event;
  }
}
