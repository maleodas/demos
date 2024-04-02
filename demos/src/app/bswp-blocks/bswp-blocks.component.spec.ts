import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BswpBlocksComponent } from './bswp-blocks.component';

describe('BswpBlocksComponent', () => {
  let component: BswpBlocksComponent;
  let fixture: ComponentFixture<BswpBlocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BswpBlocksComponent]
    });
    fixture = TestBed.createComponent(BswpBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
