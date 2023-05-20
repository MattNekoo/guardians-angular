import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGruposAnimesComponent } from './table-grupos-animes.component';

describe('TableGruposAnimesComponent', () => {
  let component: TableGruposAnimesComponent;
  let fixture: ComponentFixture<TableGruposAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGruposAnimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGruposAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
