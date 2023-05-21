import { ApiService } from '../../../Api/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export interface filme {
  id: number,
  nome: string
}

@Component({
  selector: 'app-cadastro-filme',
  templateUrl: './cadastro-filme.component.html',
  styleUrls: ['./cadastro-filme.component.css']
})
export class CadastroFilmeComponent {
  filme: any;
  id: any;
  frm: FormGroup;

  constructor
    (private apiService: ApiService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) {
    this.filme = {};
    this.id = this.route.snapshot.params["id"];
    this.frm = new FormGroup({
      nome: new FormControl(''),
      ano: new FormControl(''),
      dsc: new FormControl('')
    })
    this.loadFilme()
  }

  loadFilme() {
    if (!this.id) {
      return
    }
    this.apiService.listFilmeId(this.id).subscribe(r => {
      this.frm.controls['nome'].setValue(r.nomeFilme)
      this.frm.controls['ano'].setValue(r.anoFilme)
      this.frm.controls['dsc'].setValue(r.dscFilme)
    })
  }

  cadastrar() {
    const form = {
      nomeFilme: this.frm.controls['nome'].value,
      anoFilme: this.frm.controls['ano'].value,
      dscFilme: this.frm.controls['dsc'].value
    }

    this.apiService.cadastrarFilme(form).subscribe(response => {
      this.router.navigate(['listar-filme']);
      this.toastr.success('Filme cadastrado com sucesso!', 'Sucesso!');
    })
  }

  alterar() {
    const form = {
      id: this.id,
      nomeFilme: this.frm.controls['nome'].value,
      anoFilme: this.frm.controls['ano'].value,
      dscFilme: this.frm.controls['dsc'].value
    }
    this.apiService.editarFilme(form).subscribe(response => {
      this.router.navigate(['listar-filme']);
      this.toastr.success('Filme alterado com sucesso!', 'Sucesso!');
    })
  }

  salvar() {
    this.id ? this.alterar() : this.cadastrar();
  }
}
