import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emprestimo } from './emprestimo';



const API = 'http://localhost:8090/emprestimos';

@Injectable({ providedIn: 'root' })
export class EmprestimoService {

    constructor(private http: HttpClient) {}

    listEmprestimos() {
        return this.http
            .get<Emprestimo[]>(API);       
    }
}