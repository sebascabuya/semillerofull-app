import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDepartamentosComponent } from './tabla-departamentos.component';

describe('TablaDepartamentosComponent', () => {
  let component: TablaDepartamentosComponent;
  let fixture: ComponentFixture<TablaDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDepartamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
