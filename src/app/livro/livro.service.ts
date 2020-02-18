import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Livro } from "./livro";

const API = 'http://localhost:8090/livros';

@Injectable({ providedIn: 'root' })
export class LivroService {

    constructor(private http: HttpClient) {}

    listBooks() {
        return this.http
            .get<Livro[]>(API);       
    }
}