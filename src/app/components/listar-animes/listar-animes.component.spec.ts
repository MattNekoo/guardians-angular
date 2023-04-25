import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAnimesComponent } from './listar-animes.component';

describe('ListarAnimesComponent', () => {
  let component: ListarAnimesComponent;
  let fixture: ComponentFixture<ListarAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAnimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
