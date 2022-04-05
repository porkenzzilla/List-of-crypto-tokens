import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVolumeComponent } from './table-volume.component';

describe('TableVolumeComponent', () => {
  let component: TableVolumeComponent;
  let fixture: ComponentFixture<TableVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
