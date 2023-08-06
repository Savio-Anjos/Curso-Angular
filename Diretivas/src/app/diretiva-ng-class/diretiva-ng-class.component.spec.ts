import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgClassComponent } from './diretiva-ng-class.component';

describe('DiretivaNgClassComponent', () => {
  let component: DiretivaNgClassComponent;
  let fixture: ComponentFixture<DiretivaNgClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaNgClassComponent]
    });
    fixture = TestBed.createComponent(DiretivaNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
