import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) { }

  listAllAnimes(): Observable<any> {
    return this.http.get<any>(`${API_PATH}animes`);
  }

  listGroupAnimes(): Observable<any> {
    return this.http.get<any>(`${API_PATH}grupo-animes`);
  }

  listAnimeId(id: any): Observable<any> {
    return this.http.get<any>(`${API_PATH}animes/${id}`);
  }

  cadastrarAnime(anime: any) {
    return this.http.post(`${API_PATH}animes`, anime);
  }

  editarAnime(anime: any) {
    return this.http.put(`${API_PATH}animes/${anime.id}`, anime);
  }

  excluirAnime(id: any) {
    return this.http.delete(`${API_PATH}animes/${id}`);
  }
}
