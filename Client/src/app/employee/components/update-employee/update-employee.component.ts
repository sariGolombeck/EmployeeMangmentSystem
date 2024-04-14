
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../employee.service';
import { PositionService } from '../../../position/position.service';
import { PositionEmployeePostModel } from '../../models/position-employee-post-model';
import { Position } from '../../../position/models/position';
import { Employee } from '../../models/employee';
import { dateValidator, identityValidator, nameValidator } from '../../../validtaionTest/validation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  employee!: Employee;
  employeeForm!: FormGroup;
  isLinear!: boolean;
  allPositions: Position[] = [];
  employeeId!: number
  pe: PositionEmployeePostModel[] = []
  peForms: FormGroup[] = [];
  isLeanar: unknown;

  constructor(private _employeeService: EmployeeService,
    private _positionService: PositionService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("token") == "") { this._router.navigate(['/login']) }
    this.route.params.subscribe(params => {
      this.employeeId = +params['id'];
    });
    this.getEmployeePositions();
    this.getEmployeeById();
    this.getPositions();
  }

  getPositions() {
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

  getEmployeePositions() {
    this._employeeService.getEmployeePositions(this.employeeId).subscribe({
      next: (data) => {
        data.forEach((pee: PositionEmployeePostModel) => {
          this.pe.push(pee);
          this.addPositionEmployeeForm(pee);
        });
      },
      error: (err) => {
        console.error('Error fetching employee:', err);
      }
    });
  }

  getEmployeeById() {
    this._employeeService.getEmployeeById(this.employeeId).subscribe({
      next: (data) => {
        this.employee = data;
        this.buildForm();
      },
      error: (err) => {
        console.error('Error fetching employee:', err);
      }
    });
  }

  buildForm() {
    this.employeeForm = this._formBuilder.group({
      identity: [this.employee.identity, identityValidator],
      firstName: [this.employee.firstName, nameValidator],
      lastName: [this.employee.lastName, nameValidator],
      startOfWorkDate: [this.employee.startOfWorkDate, Validators.required],
      birthDate: [this.employee.birthDate, dateValidator],
      gender: [this.employee.gender, Validators.required],
    });
  }

  addPositionEmployeeForm(pee: PositionEmployeePostModel) {
    const positionEmployee = this._formBuilder.group({
      positionId: [pee.positionId, Validators.required],
      entryDateIntoOffice: [pee.entryDateIntoOffice, Validators.required],
      isManagerial: [pee.ismanagerial]
    });
    this.peForms.push(positionEmployee);
  }
  onSubmit() {
    console.log("the form beforoe", this.employeeForm?.value)


    const employee: Employee = {
      ...this.employeeForm?.value,
    }

    this._employeeService.updateEmployee(this.employeeId, employee).subscribe({

      next: (data: any) => {
        console.log(data);

        this._snackBar.open('Employee updated successfully!', 'Close', {
          duration: 5000,


          panelClass: ['success-snackbar'],
        });

      },




      error: (e: Error) => {
        console.error(e);
        console.error('Failed to add employee');
        console.error('Failed to add employee');

        this._snackBar.open('Failed to update employee. Please try again later.', 'Close', {


          duration: 5000,


          panelClass: ['error-snackbar'],
        });
      },
    },

    )
  }
  // this.go()




  saveBeforeChoosingPositions() {
    console.log("gooo", this.peForms)
    if (this.employeeForm.invalid) {
      return;
    }
    const newEmployee = { ...this.employeeForm.value };
    this._employeeService.updateEmployee(this.employeeId, newEmployee).subscribe({
      next: (data: any) => {
        console.log(data);
        this._router.navigate(["/login"]);
      },
      error: (e: Error) => {
        console.error(e);
        console.error('Failed to add employee');
      },
    })
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
