import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { LivroModule } from '../livro/livro.module';
import { AutorModule } from '../autor/autor.module';
import { UsuarioModule } from '../usuario/usuario.module';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    LivroModule,
    AutorModule,
    UsuarioModule
  ]
})
export class ListModule { }