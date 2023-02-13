import { CadastroCategoriaComponent } from './components/cadastro-categoria/cadastro-categoria.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categorias', component: CategoriaComponent },
  { path: 'nova-categoria', component: CadastroCategoriaComponent },
  { path: 'editar', component: CadastroCategoriaComponent },
  { path: 'pessoas', component: PessoaComponent },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
