import { ToastrService } from 'ngx-toastr';
import { AnimeService } from 'src/app/Api/anime.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export interface anime {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-cadastrar-animes',
  templateUrl: './cadastrar-animes.component.html',
  styleUrls: ['./cadastrar-animes.component.css'],
})
export class CadastrarAnimesComponent {
  anime: any;
  id: any;
  frm: FormGroup;

  constructor(
    private apiService: AnimeService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    this.anime = {};
    this.id = this.route.snapshot.params['id'];
    this.frm = new FormGroup({
      nome: new FormControl('', Validators.required),
      tipo: new FormControl(''),
      ano: new FormControl('', Validators.required),
      epi: new FormControl('', Validators.required),
      score: new FormControl('', Validators.required),
      nota: new FormControl('', Validators.required),
      colecao: new FormControl('', Validators.required),
      sequencia: new FormControl('', Validators.required),
    });
    this.loadAnime();
  }

  loadAnime() {
    if (!this.id) {
      return;
    }
    this.apiService.listAnimeId(this.id).subscribe((r) => {
      this.frm.controls['nome'].setValue(r.nomeAnime);
      this.frm.controls['ano'].setValue(r.anoAnime);
      this.frm.controls['tipo'].setValue(r.tipoAnime);
      this.frm.controls['epi'].setValue(r.epiAnime);
      this.frm.controls['score'].setValue(r.scoreAnime);
      this.frm.controls['nota'].setValue(r.notaAnime);
      this.frm.controls['colecao'].setValue(r.colecao);
      this.frm.controls['sequencia'].setValue(r.sequencia);
    });
  }

  cadastrar() {
    if (this.frm.valid) {
      const form = {
        nomeAnime: this.frm.controls['nome'].value,
        anoAnime: this.frm.controls['ano'].value,
        tipoAnime: this.frm.controls['tipo'].value,
        epiAnime: this.frm.controls['epi'].value,
        scoreAnime: this.frm.controls['score'].value,
        notaAnime: this.frm.controls['nota'].value,
        colecao: this.frm.controls['colecao'].value,
        sequencia: this.frm.controls['sequencia'].value,
      };

      this.apiService.cadastrarAnime(form).subscribe((response) => {
        this.router.navigate(['listar-anime']);
        this.toastr.success('Anime cadastrado com sucesso!', 'Sucesso!');
      });
    }
  }

  alterar() {
    if (this.frm.valid) {
      const form = {
        id: this.id,
        nomeAnime: this.frm.controls['nome'].value,
        anoAnime: this.frm.controls['ano'].value,
        tipoAnime: this.frm.controls['tipo'].value,
        epiAnime: this.frm.controls['epi'].value,
        scoreAnime: this.frm.controls['score'].value,
        notaAnime: this.frm.controls['nota'].value,
        colecao: this.frm.controls['colecao'].value,
        sequencia: this.frm.controls['sequencia'].value,
      };
      this.apiService.editarAnime(form).subscribe((response) => {
        this.router.navigate(['listar-anime']);
        this.toastr.success('Anime alterado com sucesso!', 'Sucesso!');
      });
    }
  }

  salvar() {
    console.log(this.id,'this.id');
    this.id ? this.alterar() : this.cadastrar();
  }
}
