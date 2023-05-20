import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-grupos-animes',
  templateUrl: './table-grupos-animes.component.html',
  styleUrls: ['./table-grupos-animes.component.css'],
})
export class TableGruposAnimesComponent {
  @Input() pendencia = {
    nome: '',
    ano: '',
    id: '',
  };
}
