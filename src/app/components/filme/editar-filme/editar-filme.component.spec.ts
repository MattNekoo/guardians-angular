import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFilmeComponent } from './editar-filme.component';

describe('EditarFilmeComponent', () => {
  let component: EditarFilmeComponent;
  let fixture: ComponentFixture<EditarFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFilmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
