import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiyonelaComponent } from './siyonela.component';

describe('SiyonelaComponent', () => {
  let component: SiyonelaComponent;
  let fixture: ComponentFixture<SiyonelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiyonelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiyonelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
