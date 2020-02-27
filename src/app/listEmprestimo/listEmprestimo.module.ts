import { NgModule } from '@angular/core';
import { ListEmprestimoComponent } from './listEmprestimo.component';
import { CommonModule } from '@angular/common';
import { EmprestimoModule } from '../listEmprestimo/emprestimo/emprestimo.module';

@NgModule({
  declarations: [
    ListEmprestimoComponent
  ],
  imports: [
    CommonModule,
    EmprestimoModule
  ]
})
export class ListEmprestimoModule { }