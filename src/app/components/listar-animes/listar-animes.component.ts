import { Component } from '@angular/core';
import { ApiService } from '../../Api/api.service';
import {FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TooltipPosition } from '@angular/material/tooltip';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-animes',
  templateUrl: './listar-animes.component.html',
  styleUrls: ['./listar-animes.component.css']
})
export class ListarAnimesComponent {
  constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService, private activatedRoute: ActivatedRoute) {
    this.animes = [];
    this.id = "";
    this.listarAllAnimes();
  }
  
  animes: Array<any>;
  id: any;
  
  listarAllAnimes() {
    this.apiService.listAllAnimes().subscribe(dados => {      
      this.animes = dados
      this.id = dados.id
    });    
  }

  excluirAnime(id: any){
    this.apiService.excluirAnime(id).subscribe(response => {
      this.router.navigate(['listar-Animes']);
      this.toastr.success('Animes excluído com sucesso!', 'Sucesso!');
      this.listarAllAnimes()
    })
  }

  displayedColumns: string[] = ['anime', 'tipo', 'ano','epi','score','nota','acao'];

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}
