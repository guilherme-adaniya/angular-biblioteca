import { Component, OnInit, Input } from '@angular/core';
import { Autor } from './autor';

@Component({
  selector: 'ba-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  @Input() autors: Autor[] =[];

  constructor() { }

  ngOnInit() {
  }

}
