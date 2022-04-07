import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCiudadesComponent } from './tabla-ciudades.component';

describe('TablaCiudadesComponent', () => {
  let component: TablaCiudadesComponent;
  let fixture: ComponentFixture<TablaCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCiudadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
