import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['']);
  }
  receiveTitle($event) {
    this.title = $event;
  }
}
