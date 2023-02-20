import { CadastroCategoriaComponent } from './components/cadastro-categoria/cadastro-categoria.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { Routes, RouterModule } from "@angular/router";
import { ListarFilmesComponent } from './components/listar-filmes/listar-filmes.component';
import { CadastroFilmeComponent } from './components/cadastro-filme/cadastro-filme.component';
import { EditarFilmeComponent } from './components/editar-filme/editar-filme.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categorias', component: CategoriaComponent },
  { path: 'listar-filme', component: ListarFilmesComponent },
  { path: 'cadastrar-filme', component: CadastroFilmeComponent },
  { path: 'pessoas', component: PessoaComponent },
  { path: 'editar-filme', component: EditarFilmeComponent },
  { path: 'editar-categoria', component: CadastroCategoriaComponent },
  { path: 'nova-categoria', component: CadastroCategoriaComponent },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
