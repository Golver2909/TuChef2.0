import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRecetasComponent } from './pagina-recetas.component';

describe('PaginaRecetasComponent', () => {
  let component: PaginaRecetasComponent;
  let fixture: ComponentFixture<PaginaRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaRecetasComponent]
    });
    fixture = TestBed.createComponent(PaginaRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
