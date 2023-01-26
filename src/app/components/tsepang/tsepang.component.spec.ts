import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsepangComponent } from './tsepang.component';

describe('TsepangComponent', () => {
  let component: TsepangComponent;
  let fixture: ComponentFixture<TsepangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsepangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsepangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
