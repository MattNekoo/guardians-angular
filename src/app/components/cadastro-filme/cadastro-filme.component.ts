import { ApiService } from './../../Api/api.service';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-filme',
  templateUrl: './cadastro-filme.component.html',
  styleUrls: ['./cadastro-filme.component.css']
})
export class CadastroFilmeComponent {
  filme: any;

  constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService) {
    this.filme = {};
  }

  criar(frm: FormGroup) {
    this.apiService.criar(this.filme).subscribe(resposta => {
      this.router.navigate(['listar-filme']);
      this.toastr.success('filme cadastrado com sucesso!', 'Sucesso!');
    })
  }
}
