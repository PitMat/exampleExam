import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoutainDetailComponent } from './moutain-detail.component';

describe('MoutainDetailComponent', () => {
  let component: MoutainDetailComponent;
  let fixture: ComponentFixture<MoutainDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoutainDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoutainDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
