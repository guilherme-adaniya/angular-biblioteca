import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string = 'Home';

  constructor() { }

  ngOnInit() {
  }

  changeTitle(title: string) {
    this.title = title;
  }

}
