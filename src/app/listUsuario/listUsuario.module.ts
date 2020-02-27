import { NgModule } from '@angular/core';
import { ListUsuarioComponent } from './listUsuario.component';
import { CommonModule } from '@angular/common';
import { UsuarioModule } from '../listUsuario/usuario/usuario.module';

@NgModule({
  declarations: [
    ListUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioModule
  ]
})
export class ListUsuarioModule { }