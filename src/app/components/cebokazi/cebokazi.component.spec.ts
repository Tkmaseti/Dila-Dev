import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CebokaziComponent } from './cebokazi.component';

describe('CebokaziComponent', () => {
  let component: CebokaziComponent;
  let fixture: ComponentFixture<CebokaziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CebokaziComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CebokaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
