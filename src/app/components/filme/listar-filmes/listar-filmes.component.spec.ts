import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFilmesComponent } from './listar-filmes.component';

describe('ListarFilmesComponent', () => {
  let component: ListarFilmesComponent;
  let fixture: ComponentFixture<ListarFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFilmesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
