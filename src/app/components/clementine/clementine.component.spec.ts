import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClementineComponent } from './clementine.component';

describe('ClementineComponent', () => {
  let component: ClementineComponent;
  let fixture: ComponentFixture<ClementineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClementineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClementineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
