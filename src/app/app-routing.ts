import { CadastroCategoriaComponent } from './components/cadastro-categoria/cadastro-categoria.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { Routes, RouterModule } from "@angular/router";
import { ListarFilmesComponent } from './components/filme/listar-filmes/listar-filmes.component';
import { CadastroFilmeComponent } from './components/filme/cadastro-filme/cadastro-filme.component';
import { EditarFilmeComponent } from './components/filme/editar-filme/editar-filme.component';
import { ListarAnimesComponent } from './components/anime/listar-animes/listar-animes.component';
import { CadastrarAnimesComponent } from './components/anime/cadastrar-animes/cadastrar-animes.component';
import { ListarGruposAnimesComponent } from './components/anime/listar-grupos-animes/listar-grupos-animes.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categorias', component: CategoriaComponent },
  { path: 'editar-categoria', component: CadastroCategoriaComponent },
  { path: 'nova-categoria', component: CadastroCategoriaComponent },

  { path: 'listar-filme', component: ListarFilmesComponent },
  { path: 'listar-filme/:id', component: CadastroFilmeComponent },
  { path: 'editar-filme/:id', component: CadastroFilmeComponent },
  { path: 'cadastrar-filme', component: CadastroFilmeComponent },

  { path: 'listar-anime', component: ListarAnimesComponent },
  { path: 'listar-grupos-anime', component: ListarGruposAnimesComponent },
  { path: 'editar-anime/:id', component: CadastrarAnimesComponent },
  { path: 'cadastrar-anime', component: CadastrarAnimesComponent },

  { path: 'pessoas', component: PessoaComponent },
  { path: 'editar-filme', component: EditarFilmeComponent },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
