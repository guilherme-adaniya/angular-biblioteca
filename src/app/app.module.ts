import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListLivroComponent } from './listLivro/listLivro.component';
import { HttpClientModule } from '@angular/common/http';
import { LivroComponent } from './listLivro/livro/livro.component';
import { HomeComponent } from './home/home.component';
import { AutorComponent } from './listAutor/autor/autor.component';
import { EmprestimoComponent } from './listEmprestimo/emprestimo/emprestimo.component';
import { UsuarioComponent } from './listUsuario/usuario/usuario.component';
import { TitleComponent } from './navbar/title/title.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { ListAutorComponent } from './listAutor/listAutor.component';
import { ListUsuarioComponent } from './listUsuario/listUsuario.component';
import { ListEmprestimoComponent } from './listEmprestimo/listEmprestimo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListLivroComponent,
    LivroComponent,
    ListEmprestimoComponent,
    ListUsuarioComponent,
    HomeComponent,
    ListAutorComponent,
    AutorComponent,
    EmprestimoComponent,
    UsuarioComponent,
    TitleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
