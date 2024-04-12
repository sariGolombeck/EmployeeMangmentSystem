import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeConfirmationDialogComponent } from './delete-employee-confirmation-dialog.component';

describe('DeleteEmployeeConfirmationDialogComponent', () => {
  let component: DeleteEmployeeConfirmationDialogComponent;
  let fixture: ComponentFixture<DeleteEmployeeConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteEmployeeConfirmationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteEmployeeConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
