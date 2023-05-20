import { routing } from './app-routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { HomeComponent } from './components/home/home.component';
import { TemplateComponent } from './components/template/template.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ContentComponent } from './components/template/content/content.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { CadastroCategoriaComponent } from './components/cadastro-categoria/cadastro-categoria.component';
import { ListarFilmesComponent } from './components/filme/listar-filmes/listar-filmes.component';
import { CadastroFilmeComponent } from './components/filme/cadastro-filme/cadastro-filme.component';
import { EditarFilmeComponent } from './components/filme/editar-filme/editar-filme.component';
import { ListarAnimesComponent } from './components/anime/listar-animes/listar-animes.component';
import { CadastrarAnimesComponent } from './components/anime/cadastrar-animes/cadastrar-animes.component';

import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { ListarGruposAnimesComponent } from './components/anime/listar-grupos-animes/listar-grupos-animes.component';
import { TableGruposAnimesComponent } from './components/anime/listar-grupos-animes/table-grupos-animes/table-grupos-animes.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    PessoaComponent,
    HomeComponent,
    TemplateComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CadastroCategoriaComponent,
    ListarFilmesComponent,
    CadastroFilmeComponent,
    EditarFilmeComponent,
    ListarAnimesComponent,
    CadastrarAnimesComponent,
    ListarGruposAnimesComponent,
    TableGruposAnimesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    routing,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    ToastrModule.forRoot(),
    MatTooltipModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
