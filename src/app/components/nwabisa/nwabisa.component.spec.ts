import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwabisaComponent } from './nwabisa.component';

describe('NwabisaComponent', () => {
  let component: NwabisaComponent;
  let fixture: ComponentFixture<NwabisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwabisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NwabisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
