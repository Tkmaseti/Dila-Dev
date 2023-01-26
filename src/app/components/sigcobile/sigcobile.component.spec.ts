import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigcobileComponent } from './sigcobile.component';

describe('SigcobileComponent', () => {
  let component: SigcobileComponent;
  let fixture: ComponentFixture<SigcobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigcobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigcobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
