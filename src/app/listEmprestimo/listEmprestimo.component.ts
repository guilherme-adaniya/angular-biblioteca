import { Component, OnInit, Input } from '@angular/core';
import { Emprestimo } from '../listEmprestimo/emprestimo/emprestimo';
import { EmprestimoService } from '../listEmprestimo/emprestimo/emprestimo.service';

@Component({
  selector: 'ba-list',
  templateUrl: './listEmprestimo.component.html',
  styleUrls: ['./listEmprestimo.component.css']
})
export class ListEmprestimoComponent implements OnInit {

  emprestimos: Emprestimo[] = [];
  @Input() title: string;

  constructor(private emprestimoService: EmprestimoService) { }

  ngOnInit() {
    this.emprestimoService.listEmprestimos().subscribe(emprestimos => {this.emprestimos = emprestimos});
  }
  
}
