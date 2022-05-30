import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Details1Component } from './details-1.component';

describe('DetailsComponent', () => {
  let component: Details1Component;
  let fixture: ComponentFixture<Details1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Details1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Details1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
