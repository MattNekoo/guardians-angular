import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGruposAnimesComponent } from './listar-grupos-animes.component';

describe('ListarGruposAnimesComponent', () => {
  let component: ListarGruposAnimesComponent;
  let fixture: ComponentFixture<ListarGruposAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarGruposAnimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarGruposAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
