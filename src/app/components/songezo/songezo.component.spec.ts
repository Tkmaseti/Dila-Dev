import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongezoComponent } from './songezo.component';

describe('SongezoComponent', () => {
  let component: SongezoComponent;
  let fixture: ComponentFixture<SongezoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongezoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongezoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
