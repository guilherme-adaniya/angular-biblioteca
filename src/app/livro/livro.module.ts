import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroComponent } from './livro.component';

@NgModule({
  declarations: [
    LivroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LivroComponent
  ]
})
export class LivroModule { }