
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Position } from '../../../../position/models/position';
import { PositionEmployeePostModel } from '../../../models/position-employee-post-model';
import { Employee, Gender } from '../../../models/employee';
import { EmployeeService } from '../../../employee.service';
import { PositionService } from '../../../../position/position.service';
import { dateValidator, identityValidator, nameValidator, validateEntryDate } from '../../../../validtaionTest/validation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'add-employee',
  templateUrl: 'add-employee.component.html',
  styleUrls: ['add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  positions: Position[] = [];
  form!: FormGroup;
  selectedPosition: Position | null = null;
  allPositions: Position[] = [];
  px: Position[] = [];
  newEmployee!: Employee;
  positionEmployee: PositionEmployeePostModel[] = [];
  positionEmployeeForms: any;
  isLinear!: boolean;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _employeeService: EmployeeService,
    private _positionService: PositionService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem('token') === "") {
      this._router.navigate(['/login']);
    }

    this.initPositionEmployeeForms();

    this.form = this._formBuilder.group({
      allPositions: this._formBuilder.array([]),
      firstName: ['', [Validators.required, nameValidator]],
      lastName: ['', [Validators.required, nameValidator]],
      address: ['', Validators.required],
      startOfWorkDate: [Date, [Validators.required]],
      birthDate: [Date, [Validators.required, dateValidator]],
      identity: ['', [Validators.required, identityValidator]],
      gender: [Gender.Male, Validators.required]
    });

    this._positionService.getPositions().subscribe({
      next: (data) => {
        data.forEach((position: Position) => {
          this.allPositions.push(position);
          this.addPositionFormGroup(position);
        });
      },
      error: (e) => console.error(e),
    });
  }

  updateEntryDateIntoOffice(index: number, selectedDate: Date) {
    const positionEmployeeForm = this.positionEmployeeForms.at(index) as FormGroup;
    positionEmployeeForm.patchValue({ entryDateIntoOffice: selectedDate });
  }

  initPositionEmployeeForms(): void {
    this.positionEmployeeForms = this._formBuilder.array([]);
  }

  addPositionEmployeeForm(p: any) {
    const positionEmployee = this._formBuilder.group({
      name: p.name,
      positionId: [p.id, Validators.required],
      entryDateIntoOffice: [Date, [Validators.required, (control: AbstractControl) => validateEntryDate(control, this.form.get('startOfWorkDate')?.value)]],
      ismanagerial: [false]
    });
    this.positionEmployeeForms.push(positionEmployee);
  }

  addPosition(position: Position) {
    var tmp = this.positions;
    this.positions = tmp.filter(x => x.id != position.id);
    if (tmp.length === this.positions.length) {
      this.addPositionEmployeeForm(position);
      this.positions.push(position);
      this.positionEmployee.push();
    }
  }
  updateIsManagerialState(index: number, isChecked: boolean) {
    this.positionEmployeeForms.controls[index].get('ismanagerial').setValue(isChecked);
  }

  onSubmit() {
    if (this.form.invalid || this.positionEmployeeForms.invalid) {
      this._snackBar.open('Please fill in all required fields correctly', 'Close', {
        duration: 5000,
      });
      return;
    }

    this.px = this.positions;
    const employee: Employee = {
      ...this.form.value,
    };

    this._employeeService.addEmployee(employee).subscribe({
      next: (data: any) => {
        this.newEmployee = data,
          this.savePositionsEmployee();
        this._router.navigate(['employees']);
      },
      error: (e: Error) => {
        console.error(e);
        console.error('Failed to add employee');
      },
    });
  }

  savePositionsEmployee() {
    const positionEmployees: PositionEmployeePostModel[] = this.positionEmployeeForms.value.map((form: any) => ({
      positionId: form.positionId,
      entryDateIntoOffice: form.entryDateIntoOffice,
      ismanagerial: form.ismanagerial
    }));

    positionEmployees.forEach((positionEmployee: any) => {
      this._employeeService.addPositionToEmployee(this.newEmployee.id, positionEmployee).subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (e: Error) => {
          console.error(e);
          console.error('Failed to add position employee');
        },
      });
    });
  }

  addPositionFormGroup(position: Position) {
    const positionFormGroup = this._formBuilder.group({
      position: this._formBuilder.group({
        name: [position.name],
        description: [position.description],
        id: [position.id]
      }),
    });
  }
}
