import { ApiService } from './../../Api/api.service';
import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  constructor(private apiService: ApiService) {
    this.categorias = [];
    this.listarAllCategorias();
  }

  categorias: Array<any>;

  listarAllCategorias() {
    this.apiService.listAllCategorias().subscribe(dados => {
      this.categorias = dados.content
    });
  }

  displayedColumns: string[] = ['codigo', 'nome', 'acao'];

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

}
