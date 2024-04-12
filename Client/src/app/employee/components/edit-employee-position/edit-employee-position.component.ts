import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-employee-position',
  templateUrl: './edit-employee-position.component.html',
  styleUrl: './edit-employee-position.component.scss'
})
export class EditEmployeePositionComponent implements OnInit {

  positionForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditEmployeePositionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.positionForm = this.formBuilder.group({
      positionId: [this.data.positionId, Validators.required],
      entryDateIntoOffice: [this.data.entryDateIntoOffice, Validators.required],
      ismanagerial: [this.data.ismanagerial]
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.positionForm.valid) {
      console.log("edit the position", this.positionForm.value)
      this.dialogRef.close(this.positionForm.value);
    } else {
      // Handle validation errors
    }
  }


  

}


