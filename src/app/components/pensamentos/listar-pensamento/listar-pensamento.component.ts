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
    {
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia tortor id est pellentesque blandit. Cras dictum, dui non laoreet fringilla, ipsum arcu efficitur leo, sed euismod dolor risus sit amet ligula. Nulla facilisi. Nam mattis porttitor sapien in malesuada. Proin consectetur nibh et quam dignissim, sit amet laoreet odio convallis.',
      autoria: 'Angular',
      modelo: 'modelo2',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
