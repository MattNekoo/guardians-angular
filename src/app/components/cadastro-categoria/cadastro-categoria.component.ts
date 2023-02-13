import { ApiService } from './../../Api/api.service';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent {

  categoria: any;

  constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService) {
    this.categoria = {};
   }

  criar(frm: FormGroup) {
    this.apiService.criar(this.categoria).subscribe(resposta => {
      this.router.navigate(['categorias']);
      this.toastr.success('Categoria cadastrada com sucesso!', 'Sucesso!');
    })
  }

  editar(categoria: any) {
    if (this.apiService.editar(categoria)) {
      this.router.navigate(['categorias']);
      this.toastr.success('Categoria alterada com sucesso!', 'Sucesso!');
    } else {
      this.toastr.error('Erro durante a edição!', 'Erro!');
    }
  }
}
