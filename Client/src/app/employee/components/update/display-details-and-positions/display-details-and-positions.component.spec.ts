import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailsAndPositionsComponent } from './display-details-and-positions.component';

describe('DisplayDetailsAndPositionsComponent', () => {
  let component: DisplayDetailsAndPositionsComponent;
  let fixture: ComponentFixture<DisplayDetailsAndPositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayDetailsAndPositionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayDetailsAndPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
