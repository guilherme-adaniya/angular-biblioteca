import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'ba-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuarios: Usuario[] = [];

  constructor() { }

  ngOnInit() {
  }

}
