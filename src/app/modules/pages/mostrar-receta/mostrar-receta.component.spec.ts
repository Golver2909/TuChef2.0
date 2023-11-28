import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarRecetaComponent } from './mostrar-receta.component';

describe('MostrarRecetaComponent', () => {
  let component: MostrarRecetaComponent;
  let fixture: ComponentFixture<MostrarRecetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarRecetaComponent]
    });
    fixture = TestBed.createComponent(MostrarRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
