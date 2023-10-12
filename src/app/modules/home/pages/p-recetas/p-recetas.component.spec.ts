import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRecetasComponent } from './p-recetas.component';

describe('PRecetasComponent', () => {
  let component: PRecetasComponent;
  let fixture: ComponentFixture<PRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PRecetasComponent]
    });
    fixture = TestBed.createComponent(PRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
