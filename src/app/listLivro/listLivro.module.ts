import { NgModule } from '@angular/core';
import { ListLivroComponent } from './listLivro.component';
import { CommonModule } from '@angular/common';
import { LivroModule } from '../listLivro/livro/livro.module';

@NgModule({
  declarations: [
    ListLivroComponent
  ],
  imports: [
    CommonModule,
    LivroModule
  ]
})
export class ListLivroModule { }