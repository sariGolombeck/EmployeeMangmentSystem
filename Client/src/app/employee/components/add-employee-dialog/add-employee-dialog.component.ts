// add-employee-dialog.component.ts

import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Position } from '../../../position/models/position';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
@Component({
  selector: 'add-employee-dialog',
  templateUrl: 'add-employee-dialog.component.html',
  styleUrls: ['add-employee-dialog.component.scss'],
  providers: [
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class AddEmployeePositionComponent {
  form: FormGroup;
  allPositions: Position[] = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      // Define your form controls here
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Process form submission
      console.log(this.form.value);
      // Close the dialog
      this.dialogRef.close();
    }
  }
}