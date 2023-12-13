import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosRecetaComponent } from './datos-receta.component';

describe('DatosRecetaComponent', () => {
  let component: DatosRecetaComponent;
  let fixture: ComponentFixture<DatosRecetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosRecetaComponent]
    });
    fixture = TestBed.createComponent(DatosRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
