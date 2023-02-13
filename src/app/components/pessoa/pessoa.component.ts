import { ApiService } from './../../Api/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {


  constructor(private apiService: ApiService) {
    this.pessoas = [];
    this.listarAllPessoas();
  }

  pessoas: Array<any>;

  listarAllPessoas() {
    this.apiService.listAllPessoas().subscribe(dados => {
      this.pessoas = dados.content
    });
  }
}
