import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuyoloComponent } from './luyolo.component';

describe('LuyoloComponent', () => {
  let component: LuyoloComponent;
  let fixture: ComponentFixture<LuyoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuyoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuyoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
