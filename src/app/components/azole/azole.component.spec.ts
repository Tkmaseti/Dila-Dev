import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzoleComponent } from './azole.component';

describe('AzoleComponent', () => {
  let component: AzoleComponent;
  let fixture: ComponentFixture<AzoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
