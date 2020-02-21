import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { LivroComponent } from './livro/livro.component';
import { HomeComponent } from './home/home.component';
import { AutorComponent } from './autor/autor.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LivroModule } from './livro/livro.module';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    LivroComponent,
    HomeComponent,
    AutorComponent,
    EmprestimoComponent,
    UsuarioComponent,
    TitleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
