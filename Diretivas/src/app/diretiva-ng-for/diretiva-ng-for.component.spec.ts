import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgForComponent } from './diretiva-ng-for.component';

describe('DiretivaNgForComponent', () => {
  let component: DiretivaNgForComponent;
  let fixture: ComponentFixture<DiretivaNgForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaNgForComponent]
    });
    fixture = TestBed.createComponent(DiretivaNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
