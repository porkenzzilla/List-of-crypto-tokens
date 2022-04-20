import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChangesCapitalComponent } from './add-changes-capital.component';

describe('AddChangesComponent', () => {
  let component: AddChangesCapitalComponent;
  let fixture: ComponentFixture<AddChangesCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChangesCapitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChangesCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
