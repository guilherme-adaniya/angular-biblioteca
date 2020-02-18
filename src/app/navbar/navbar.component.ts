import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ba-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string = 'Home';

  @Output() titleEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeTitle(title: string) {
    this.title = title;
    this.titleEvent.emit(this.title);
  }

}
