import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

constructor() {}

  listaPensamentos = [
    // {
    //   conteudo: 'Passo informações para o component filho',
    //   autoria: 'Componente PAI',
    //   modelo: 'modelo3'
    // },
    // {
    //   conteudo: 'Minha propriedade é decorada com @Input',
    //   autoria: 'Componente Filho',
    //   modelo: 'modelo2'
    // }
  ];

  ngOnInit(): void {

  }
}
