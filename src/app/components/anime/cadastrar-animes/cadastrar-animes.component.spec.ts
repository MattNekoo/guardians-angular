import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAnimesComponent } from './cadastrar-animes.component';

describe('CadastrarAnimesComponent', () => {
  let component: CadastrarAnimesComponent;
  let fixture: ComponentFixture<CadastrarAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAnimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
