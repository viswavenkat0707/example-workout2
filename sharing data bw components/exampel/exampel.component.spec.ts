import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampelComponent } from './exampel.component';

describe('ExampelComponent', () => {
  let component: ExampelComponent;
  let fixture: ComponentFixture<ExampelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampelComponent]
    });
    fixture = TestBed.createComponent(ExampelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
