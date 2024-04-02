import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BswpTransationComponent } from './bswp-transation.component';

describe('BswpTransationComponent', () => {
  let component: BswpTransationComponent;
  let fixture: ComponentFixture<BswpTransationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BswpTransationComponent]
    });
    fixture = TestBed.createComponent(BswpTransationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
