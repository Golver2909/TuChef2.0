import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaUsuarioComponent } from './ayuda-usuario.component';

describe('AyudaUsuarioComponent', () => {
  let component: AyudaUsuarioComponent;
  let fixture: ComponentFixture<AyudaUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AyudaUsuarioComponent]
    });
    fixture = TestBed.createComponent(AyudaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
