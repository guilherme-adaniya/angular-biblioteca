import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ba-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
