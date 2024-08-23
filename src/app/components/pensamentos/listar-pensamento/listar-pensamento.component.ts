import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Mando informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Angular',
      modelo: 'modelo2',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
