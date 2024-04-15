// add-employee-dialog.component.ts

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { Router } from '@angular/router';
import { Position } from '../../../../position/models/position';
@Component({
  selector: 'add-employee-dialog',
  templateUrl: 'add-employee-dialog.component.html',
  styleUrls: ['add-employee-dialog.component.scss'],
  providers: [
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class AddEmployeePositionComponent implements OnInit {
  form: FormGroup;
  allPositions: Position[] = [];

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      // Define your form controls here
    });
  }
  ngOnInit(): void {
    if (sessionStorage.getItem("token") == "") { this._router.navigate(['/login']) }
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
