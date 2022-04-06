import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaReferenciasComponent } from './tabla-referencias.component';

describe('TablaReferenciasComponent', () => {
  let component: TablaReferenciasComponent;
  let fixture: ComponentFixture<TablaReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaReferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
