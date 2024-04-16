import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { Component, OnInit, Inject } from '@angular/core';
import { validateEntryDate } from '../../../../validtaionTest/validation';

@Component({
  selector: 'app-edit-employee-position',
  templateUrl: './edit-employee-position.component.html',
  styleUrl: './edit-employee-position.component.scss'
})
export class EditEmployeePositionComponent implements OnInit {

  positionForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditEmployeePositionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { row: any, positionName: string,startOfWorkDate: Date },
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.positionForm = this.formBuilder.group({
      positionId: [this.data.row.positionId, Validators.required],
      entryDateIntoOffice: [this.data.row.entryDateIntoOffice, [Validators.required, (control: AbstractControl) => validateEntryDate(control, this.data.startOfWorkDate)]],
      ismanagerial: [this.data.row.ismanagerial]
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.positionForm.valid) {
      this.dialogRef.close(this.positionForm.value);
    } else {
      // Handle validation errors
    }
  }


  

}


