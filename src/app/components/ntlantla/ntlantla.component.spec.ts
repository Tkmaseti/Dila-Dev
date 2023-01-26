import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtlantlaComponent } from './ntlantla.component';

describe('NtlantlaComponent', () => {
  let component: NtlantlaComponent;
  let fixture: ComponentFixture<NtlantlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtlantlaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtlantlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
