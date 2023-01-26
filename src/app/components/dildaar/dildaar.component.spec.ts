import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DildaarComponent } from './dildaar.component';

describe('DildaarComponent', () => {
  let component: DildaarComponent;
  let fixture: ComponentFixture<DildaarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DildaarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DildaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
