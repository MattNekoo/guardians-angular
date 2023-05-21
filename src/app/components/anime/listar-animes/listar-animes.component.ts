import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { AnimeService } from '../../../Api/anime.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Anime {
  id: number;
  nome: string;
  tipo: string;
  ano: number;
}

@Component({
  selector: 'app-listar-animes',
  templateUrl: './listar-animes.component.html',
  styleUrls: ['./listar-animes.component.css'],
})
export class ListarAnimesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'anime',
    'tipo',
    'ano',
    'epi',
    'score',
    'nota',
    'acao',
  ];
  itemsPerPage = 5;
  totalItems = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  currentPage = 0;

  animesData: Animes[] = [];
  id: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private apiService: AnimeService,
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listarAllAnimes();
    this.currentPage = 0;
  }

  ngAfterViewInit() {
    if (this.paginator && this.sort) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  listarAllAnimes() {
    this.apiService.listAllAnimes().subscribe((dados) => {
      this.animesData = dados;
      this.totalItems = this.animesData.length;
      this.dataSource = new MatTableDataSource(this.animesData);
      this.updatePagination();
    });
  }

  excluirAnime(id: any) {
    this.apiService.excluirAnime(id).subscribe((response) => {
      this.router.navigate(['listar-Animes']);
      this.toastr.success('Animes excluído com sucesso!', 'Sucesso!');
    });
  }

  updatePagination() {
    const items = this.animesData ?? [];
    this.dataSource.data = this.paginateItems(items, this.currentPage);
  }

  onPageChange(event: PageEvent) {
    this.itemsPerPage = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePagination();
  }

  paginateItems(items: any[], page: number): any[] {
    const startIndex = page * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return items.slice(startIndex, endIndex);
  }
}

export interface Animes {
  _id: string;
  anime: string;
  tipo: string;
  ano: number;
  epi: string;
  score: string;
  nota: number;
  acao: any;
}
