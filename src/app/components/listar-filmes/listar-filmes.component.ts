import { Component } from '@angular/core';
import { ApiService } from './../../Api/api.service';
import {FormControl} from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent {
  constructor(private apiService: ApiService) {
    this.categorias = [];
    this.listarAllFilmes();
  }

  categorias: Array<any>;

  listarAllFilmes() {
    this.apiService.listAllFilmes().subscribe(dados => {
      this.categorias = dados.content
    });
  }

  displayedColumns: string[] = ['codigo', 'nome', 'acao'];

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}
