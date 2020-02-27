import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Usuario } from './usuario';


const API = 'http://localhost:8090/usuarios';

@Injectable({ providedIn: 'root' })
export class UsuarioService {

    constructor(private http: HttpClient) {}

    listUsuarios() {
        return this.http
            .get<Usuario[]>(API);       
    }
}