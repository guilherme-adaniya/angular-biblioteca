import { Component, OnInit, Input } from '@angular/core';
import { LivroService } from '../listLivro/livro/livro.service';
import { Livro } from '../listLivro/livro/livro';

@Component({
  selector: 'ba-list',
  templateUrl: './listLivro.component.html',
  styleUrls: ['./listLivro.component.css']
})
export class ListLivroComponent implements OnInit {

  livros: Livro[] = [];
  @Input() title: string;

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.livroService.listBooks().subscribe(livros => {this.livros = livros; });
  }
  
}
