import { Component, Input } from '@angular/core';
import { Livro } from './livro'

@Component({
    selector: 'ba-livro',
    templateUrl: 'livro.component.html'
})
export class LivroComponent {
    @Input() livros: Livro[] = [];
}