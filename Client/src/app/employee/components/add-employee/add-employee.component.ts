
import { Gender } from '../../models/employee';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { PositionService } from '../../../position/position.service';
import { Employee } from '../../models/employee';
import { Position } from '../../../position/models/position';
import { Component, OnInit } from '@angular/core';
import { PositionEmployeePostModel } from '../../models/position-employee-post-model';
import { dateValidator, identityValidator, nameValidator, validateEntryDate } from '../../../validtaionTest/validation';
import { PositionEmployeeDto } from '../../models/position-employee-dto';
import { Router } from '@angular/router';
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
  isLeanar: boolean = false;
  px: Position[] = [];
  pn: Position[] = [];
  xx: Position[] = [];
  y: any[] = [];
  newEmployee!: Employee;
  positionEmployee: PositionEmployeePostModel[] = [];
  positionEmployeeForms: any;
  isLinear!: false;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _employeeService: EmployeeService,
    private _positionService: PositionService
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem('token') == "") {
      this._router.navigate(['/login']);

    }
    if (sessionStorage.getItem('token') == "") {
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
        console.log("data", data);
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
      entryDateIntoOffice: [Date(), [Validators.required, (control: AbstractControl) => validateEntryDate(control, this.form.get('startOfWorkDate')?.value)]],
      ismanagerial: [false]
    });
    this.positionEmployeeForms.push(positionEmployee);
  }

  addPosition(position: Position) {
    console.log("the positions", this.positions)
    var tmp = this.positions;
    this.positions = tmp.filter(x => x.id != position.id);
    if (tmp.length === this.positions.length) {
      this.addPositionEmployeeForm(position);
      this.positions.push(position);
      this.positionEmployee.push();
    }
  }

  onDateChange(selectedDate: any, index: number) {
    this.positionEmployee[index].entryDateIntoOffice = selectedDate;
    this.form.markAsDirty();
  }

  updateIsManagerialState(index: number, isChecked: boolean) {
    this.positionEmployeeForms.controls[index].get('ismanagerial').setValue(isChecked);
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

  onSubmit() {
    console.log("the em", this.form.value)
    if (this.form.invalid || this.positionEmployeeForms.invalid) {

      return;
    }

    this.px = this.positions;
    const employee: Employee = {
      ...this.form.value,
      // gender: this.form.get('gender')?.value,
    };

    this._employeeService.addEmployee(employee).subscribe({
      next: (data: any) => {
        this.newEmployee = data,
          console.log("the employee add ", this.newEmployee)
        this.savePositionsEmployee()

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
}
