import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RafeeqahComponent } from './rafeeqah.component';

describe('RafeeqahComponent', () => {
  let component: RafeeqahComponent;
  let fixture: ComponentFixture<RafeeqahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RafeeqahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RafeeqahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
