import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-employee-confirmation-dialog',
  templateUrl: './delete-employee-confirmation-dialog.component.html',
})
export class DeleteEmployeeConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteEmployeeConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
