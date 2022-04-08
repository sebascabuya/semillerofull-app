import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaOficinasComponent } from './tabla-oficinas.component';

describe('TablaOficinasComponent', () => {
  let component: TablaOficinasComponent;
  let fixture: ComponentFixture<TablaOficinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaOficinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaOficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
