import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAutorComponent } from './listAutor/listAutor.component';
import { ListEmprestimoComponent } from './listEmprestimo/listEmprestimo.component';
import { ListUsuarioComponent } from './listUsuario/listUsuario.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ListLivroComponent } from './listLivro/listLivro.component';

const routes: Routes = [
  { path: 'livros', component: ListLivroComponent },
  { path: 'autores', component: ListAutorComponent},
  { path: 'emprestimos', component: ListEmprestimoComponent},
  { path: 'usuarios', component: ListUsuarioComponent},
  { path: '**', component: HomeComponent}
];

@NgModule( {
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }