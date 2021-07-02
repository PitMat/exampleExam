import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoutainComponent } from './moutain.component';

describe('MoutainComponent', () => {
  let component: MoutainComponent;
  let fixture: ComponentFixture<MoutainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoutainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoutainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
