import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../listUsuario/usuario/usuario';
import { UsuarioService } from '../listUsuario/usuario/usuario.service';

@Component({
  selector: 'ba-list',
  templateUrl: './listUsuario.component.html',
  styleUrls: ['./listUsuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];
  @Input() title: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.listUsuarios().subscribe(usuarios => {this.usuarios = usuarios});
  }
  
}
