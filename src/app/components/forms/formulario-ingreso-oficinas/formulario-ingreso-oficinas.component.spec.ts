import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIngresoOficinasComponent } from './formulario-ingreso-oficinas.component';

describe('FormularioIngresoOficinasComponent', () => {
  let component: FormularioIngresoOficinasComponent;
  let fixture: ComponentFixture<FormularioIngresoOficinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioIngresoOficinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioIngresoOficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
