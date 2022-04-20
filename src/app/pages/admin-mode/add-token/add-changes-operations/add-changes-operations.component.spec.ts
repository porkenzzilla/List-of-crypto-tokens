import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChangesOperationsComponent } from './add-changes-operations.component';

describe('AddChangesTradeComponent', () => {
  let component: AddChangesOperationsComponent;
  let fixture: ComponentFixture<AddChangesOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChangesOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChangesOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
