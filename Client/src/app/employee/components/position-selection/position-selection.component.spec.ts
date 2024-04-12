import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionSelectionComponent } from './position-selection.component';

describe('PositionSelectionComponent', () => {
  let component: PositionSelectionComponent;
  let fixture: ComponentFixture<PositionSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
