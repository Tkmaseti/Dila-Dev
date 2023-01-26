import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElonaComponent } from './elona.component';

describe('ElonaComponent', () => {
  let component: ElonaComponent;
  let fixture: ComponentFixture<ElonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
