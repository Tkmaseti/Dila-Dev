import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesingerComponent } from './desinger.component';

describe('DesingerComponent', () => {
  let component: DesingerComponent;
  let fixture: ComponentFixture<DesingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesingerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
