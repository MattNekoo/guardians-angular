import { Component } from '@angular/core';
import { ApiService } from '../../../Api/api.service';
import {FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TooltipPosition } from '@angular/material/tooltip';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent {
  constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService, private activatedRoute: ActivatedRoute) {
    this.filmes = [];
    this.id = "";
    this.listarAllFilmes();
  }

  filmes: Array<any>;
  id: any;

  listarAllFilmes() {
    this.apiService.listAllFilmes().subscribe(dados => {
      this.filmes = dados
      this.id = dados.id
    });
  }

  excluirFilme(id: any){
    this.apiService.excluirFilme(id).subscribe(response => {
      this.router.navigate(['listar-filme']);
      this.toastr.success('Filme excluído com sucesso!', 'Sucesso!');
      this.listarAllFilmes()
    })
  }

  displayedColumns: string[] = ['filme', 'descricao', 'acao'];

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}
