import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCriadoComponent } from './curso-criado.component';

describe('CursoCriadoComponent', () => {
  let component: CursoCriadoComponent;
  let fixture: ComponentFixture<CursoCriadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoCriadoComponent]
    });
    fixture = TestBed.createComponent(CursoCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
