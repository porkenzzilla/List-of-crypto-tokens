import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChangesVolumeComponent } from './add-changes-volume.component';

describe('AddChangesVolumeComponent', () => {
  let component: AddChangesVolumeComponent;
  let fixture: ComponentFixture<AddChangesVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChangesVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChangesVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
