import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRecetaComponent } from './crear-receta.component';

describe('CrearRecetaComponent', () => {
  let component: CrearRecetaComponent;
  let fixture: ComponentFixture<CrearRecetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearRecetaComponent]
    });
    fixture = TestBed.createComponent(CrearRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
