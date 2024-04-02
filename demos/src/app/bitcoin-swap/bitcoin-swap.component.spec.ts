import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinSwapComponent } from './bitcoin-swap.component';

describe('BitcoinSwapComponent', () => {
  let component: BitcoinSwapComponent;
  let fixture: ComponentFixture<BitcoinSwapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BitcoinSwapComponent]
    });
    fixture = TestBed.createComponent(BitcoinSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
