import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExlistComponent } from './exlist.component';

describe('ExlistComponent', () => {
  let component: ExlistComponent;
  let fixture: ComponentFixture<ExlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExlistComponent]
    });
    fixture = TestBed.createComponent(ExlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
