import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  listAllCategorias(): Observable<any> {
    return this.http.get<any>(`${API_PATH}categorias`);
  }

  listAllFilmes(): Observable<any> {
    return this.http.get<any>(`${API_PATH}filmes`);
  }

  listFilmeId(id: any): Observable<any> {
    return this.http.get<any>(`${API_PATH}filmes/${id}`);
  }

  listAllAnimes(): Observable<any> {
    return this.http.get<any>(`${API_PATH}animes`);
  }

  listAnimesId(id: any): Observable<any> {
    return this.http.get<any>(`${API_PATH}animes/${id}`);
  }

  listAllPessoas(): Observable<any> {
    return this.http.get<any>(`${API_PATH}pessoas`);
  }

  cadastrarFilme(filme: any) {
    return this.http.post(`${API_PATH}filmes`, filme);
  }

  editarFilme(filme: any) {
    return this.http.put(`${API_PATH}filmes/${filme.id}`, filme);
  }

  excluirFilme(id: any){
    return this.http.delete(`${API_PATH}filmes/${id}`);
  }

  excluirAnime(id: any){
    return this.http.delete(`${API_PATH}filmes/${id}`);
  }
  
  editar(categoria: any) {
    return this.http.put(`${API_PATH}categorias/${categoria.codigo}`, categoria);
  }

  criar(filme: any) {
    return this.http.put(`${API_PATH}filmes/${filme.codigo}`, filme);
  }
}
