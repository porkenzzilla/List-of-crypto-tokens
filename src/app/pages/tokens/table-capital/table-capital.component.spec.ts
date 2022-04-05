import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCapitalComponent } from './table-capital.component';

describe('TableCapitalComponent', () => {
  let component: TableCapitalComponent;
  let fixture: ComponentFixture<TableCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCapitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
