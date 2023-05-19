import { ApiService } from '../../../Api/api.service';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-filme',
  templateUrl: './editar-filme.component.html',
  styleUrls: ['./editar-filme.component.css']
})
export class EditarFilmeComponent {
  filme: any;

  constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService) {
    this.filme = {};
    this.listFilmeId();
  }

  listFilmeId() {
    this.apiService.listFilmeId(1).subscribe(dados => {
      this.filme = dados
      console.log(this.filme,'filme');
    });
  }
}
