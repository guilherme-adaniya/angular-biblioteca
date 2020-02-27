import { NgModule } from '@angular/core';
import { ListAutorComponent } from './listAutor.component';
import { CommonModule } from '@angular/common';
import { AutorModule } from '../listAutor/autor/autor.module';

@NgModule({
  declarations: [
    ListAutorComponent
  ],
  imports: [
    CommonModule,
    AutorModule
  ]
})
export class ListAutorModule { }