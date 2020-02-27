import { Component, OnInit, Input } from '@angular/core';
import { Emprestimo } from './emprestimo';

@Component({
  selector: 'ba-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.css']
})
export class EmprestimoComponent implements OnInit {

  @Input() emprestimos: Emprestimo[] = [];

  constructor() { }

  ngOnInit() {
  }

}
