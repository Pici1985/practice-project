import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxPracticeComponent } from './rx-practice.component';

describe('RxPracticeComponent', () => {
  let component: RxPracticeComponent;
  let fixture: ComponentFixture<RxPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
