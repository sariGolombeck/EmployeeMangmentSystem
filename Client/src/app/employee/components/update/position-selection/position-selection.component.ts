
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { EmployeeService } from '../../../employee.service';
import { PositionEmployeeDto } from '../../../models/position-employee-dto';
import { Employee } from '../../../models/employee';
import { Position } from '../../../../position/models/position';
import { validateEntryDate } from '../../../../validtaionTest/validation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-position-selection',
  templateUrl: './position-selection.component.html',
  styleUrls: ['./position-selection.component.scss']
})
export class PositionSelectionComponent implements OnInit {
  positionForms: FormGroup[] = [];
  positionEmployeeDtos: PositionEmployeeDto[] = [];
  index: any;
  constructor(
    private formBuilder: FormBuilder,
    private _employeeService: EmployeeService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<PositionSelectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { employeeId: number, positions: Position[],startOfWorkDate: Date }
  ) { }
  ngOnInit(): void {
    
  }

  createPositionForm(positionId: number): FormGroup {
    return this.formBuilder.group({
      employeeId: [this.data.employeeId],
      positionId: [positionId],
      entryDateIntoOffice: [Date, [Validators.required, (control: AbstractControl) => validateEntryDate(control, this.data.startOfWorkDate)]],
      ismanagerial: [false] // Assuming it starts as false
    });
  }

  removePositionForm(positionId: number): void {
    const indexToRemove = this.positionForms.findIndex(form => form.value.positionId === positionId);
    if (indexToRemove !== -1) {
      this.positionForms.splice(indexToRemove, 1);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onPositionSelect(selectedPositionIds: any[]): void {
    // Clear existing forms for positions that are not selected anymore
    this.positionForms = this.positionForms.filter(form => selectedPositionIds.includes(form.value.positionId));

    // Add new forms for newly selected positions
    selectedPositionIds.forEach(positionId => {
      const existingForm = this.positionForms.find(form => form.value.positionId === positionId);
      if (!existingForm) {
        const positionForm = this.createPositionForm(positionId.id);
        this.positionForms.push(positionForm);
      }
    });
  }
  onConfirm() {
    if (this.positionForms.every(form => form.valid)) {
      this.positionEmployeeDtos = this.positionForms.map(form => form.value);
      this.dialogRef.close(this.positionEmployeeDtos);
    } else {
      this._snackBar.open('Please fill in all required fields correctly', 'Close', {
        duration: 5000,
      });
    }
  
  
  }
}
