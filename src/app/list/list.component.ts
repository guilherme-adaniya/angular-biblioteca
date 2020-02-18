import { Component, OnInit, Input } from '@angular/core';
import { LivroService } from '../livro/livro.service';
import { Livro } from '../livro/livro';
import { Autor } from '../autor/autor';
import { AutorService } from '../autor/autor.service';
import { EmprestimoService } from '../emprestimo/emprestimo.service';
import { Emprestimo } from '../emprestimo/emprestimo';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'ba-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  livros: Livro[] = [];
  autors: Autor[] = [];
  emprestimos: Emprestimo[] = [];
  usuarios: Usuario[] = [];
  @Input() title: string;

  constructor(private livroService: LivroService, private autorService: AutorService, private emprestimoService: EmprestimoService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.livroService.listBooks().subscribe(livros => {this.livros = livros});
    this.autorService.listAutor().subscribe(autors => {this.autors = autors});
    this.emprestimoService.listEmprestimos().subscribe(emprestimos => {this.emprestimos = emprestimos})
    this.usuarioService.listUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }
  
}
