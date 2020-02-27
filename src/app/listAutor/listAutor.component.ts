import { Component, OnInit, Input } from '@angular/core';
import { Autor } from '../listAutor/autor/autor';
import { AutorService } from '../listAutor/autor/autor.service';

@Component({
  selector: 'ba-list',
  templateUrl: './listAutor.component.html',
  styleUrls: ['./listAutor.component.css']
})
export class ListAutorComponent implements OnInit {

  autors: Autor[] = [];
  @Input() title: string;

  constructor(private autorService: AutorService) { }

  ngOnInit() {
    this.autorService.listAutor().subscribe(autors => {this.autors = autors});
  }
  
}
