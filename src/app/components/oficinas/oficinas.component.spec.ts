import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasComponent } from './oficinas.component';

describe('OficinasComponent', () => {
  let component: OficinasComponent;
  let fixture: ComponentFixture<OficinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
