import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ba-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string = 'Home';
  url: string;
  @Output() titleEvent = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeTitle(title: string) {
    this.title = title;
    this.titleEvent.emit(this.title);
  }

}
