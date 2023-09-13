import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRecetaComponent } from './crud-receta.component';

describe('CrudRecetaComponent', () => {
  let component: CrudRecetaComponent;
  let fixture: ComponentFixture<CrudRecetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudRecetaComponent]
    });
    fixture = TestBed.createComponent(CrudRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
