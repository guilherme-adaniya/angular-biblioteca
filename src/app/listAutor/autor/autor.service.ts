import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autor } from './autor';


const API = 'http://localhost:8090/autores';

@Injectable({ providedIn: 'root' })
export class AutorService {

    constructor(private http: HttpClient) {}

    listAutor() {
        return this.http
            .get<Autor[]>(API);  
    }
}