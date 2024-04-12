
import { Component, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../models/employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PositionService } from '../../../position/position.service';
import { Position } from '../../../position/models/position';
import { PositionEmployeePostModel } from '../../../position-employee-post-model';
import { identity } from 'rxjs';
import { error } from 'console';
import { PositionEmployeeTableComponent } from '../positions-employee-table/positions-employee-table.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Gender } from '../../models/employee';
import { dateValidator, identityValidator, nameValidator } from '../../../validtaionTest/validation';
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
  constructor(private _employeeService: EmployeeService,
    private _positionService: PositionService,
    private _formBuilder: FormBuilder, private _snackBar: MatSnackBar,
    private route: ActivatedRoute) {

  }
  employeeId!: number
  pe: PositionEmployeePostModel[] = []
  peForms: FormGroup[] = [];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeId = +params['id'];
    });
    this._employeeService.getEmployeeById(this.employeeId).subscribe({
      next: (data) => {
        this.employee = data;
        this.buildForm(); // Call form building function after employee data is retrieved
      },
      error: (err) => {
        console.error('Error fetching employee:', err);
      }
    });
    this._employeeService.getEmployeePositions(this.employeeId).subscribe({
      next: (data) => {
        data.forEach((pee: PositionEmployeePostModel) => {
          this.pe.push(pee);

          this.addPositionEmployeeForm(pee);
        })
      },
      error: (err) => {
        console.error('Error fetching employee:', err);
      }
    })

    this._positionService.getPositions().subscribe({
      next: (data) => {
        data.forEach((position: Position) => {
          console.log("get from server this", position)
          this.allPositions.push(position);
          this.addPositionFormGroup(position);
        });
      },
      error: (e) => console.error(e),
    });
  }



  buildForm() {
    this.employeeForm = this._formBuilder.group({
      identity: [this.employee.identity, identityValidator],

      firstName: [this.employee.firstName, nameValidator],
      lastName: [this.employee.lastName, nameValidator],
      startOfWorkDate: [this.employee.startOfWorkDate, dateValidator],
      birthDate: [this.employee.birthDate, dateValidator],
      gender: [this.employee.gender, Validators.required],
      // positions: [this.employee.positions, Validators.required],
    });
    console.log("the employee form.??????????????????????........", this.employee);
    console.log(this.employee);
  }
  positions: Position[] = [];
  tryPositionEmployee = new PositionEmployeePostModel(0, new Date(), false);
  form!: FormGroup;
  selectedPosition: Position | null = null;
  isLeanar: boolean = false;
  px: Position[] = [];
  pn: Position[] = [];
  xx: Position[] = [];
  y: any[] = [];
  newEmployee!: Employee
  positionEmployee: PositionEmployeePostModel[] = [];
  positionEmployeeForms: any;

  updateEntryDateIntoOffice(index: number, selectedDate: Date) {
    const positionEmployeeForm = this.positionEmployeeForms.at(index) as FormGroup;
    positionEmployeeForm.patchValue({ entryDateIntoOffice: selectedDate });
    console.log("allform", positionEmployeeForm)
  }
  // positionEmployeeForms: FormArray;

  initPositionEmployeeForms(): void {
    this.positionEmployeeForms = this._formBuilder.array([]);
  }

  addPositionEmployeeForm(pee: PositionEmployeePostModel) {
    console.log("pee", pee)
    const positionEmployee = this._formBuilder.group({
      positionId: [pee.positionId, Validators.required],
      entryDateIntoOffice: [pee.entryDateIntoOffice, Validators.required],
      isManagerial: [pee.ismanagerial]
    }); console.log("peeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee only", this.pe)

    console.log("nowwwwwwwwwwwwwwww4444444444", positionEmployee)
    this.peForms.push(positionEmployee);
    console.log("nowwwwwwwwwwwwwwwwwwww3333333333333", this.peForms)
    console.log("peeforms", this.peForms)
  }
  // gg(position: Position) {

  //   console.log("pay attation", this.positions.map(x => x.description))
  //   var tmp = this.positions;
  //   this.positions = tmp.filter(x => x.id != position.id);
  //   if (tmp.length === this.positions.length) {
  //     console.log("enterd: tmp", tmp.map(x => x), "mypositions", this.positions.map(x => x.name));
  //     this.addPositionEmployeeForm(position.id);
  //     this.positions.push(position)
  //     this.positionEmployee.push()
  //   }
  //   console.log("");
  // }
  // this.addPositionEmployeeForm();
  onDateChange(selectedDate: any, index: number) {
    this.positionEmployee[index].entryDateIntoOffice = selectedDate;
    this.form.markAsDirty();
  }
  updateIsManagerialState(index: number, isChecked: boolean) {
    this.positionEmployeeForms.controls[index].get('ismanagerial').setValue(isChecked);
  }

  // initPositionEmployeeForm(): void {
  //   this.positionEmployeeForm = this._formBuilder.group({
  //     id: [null, Validators.required],
  //     entryDateIntoOffice: [Date, Validators.required],
  //     isManagerial: [false] // Default value
  //   });
  //   this.positionEmployee.push(this.positionEmployeeForm);

  // }

  addPositionFormGroup(position: Position) {
    const positionFormGroup = this._formBuilder.group({
      position: this._formBuilder.group({
        name: [position.name],
        description: [position.description],
        id: [position.id]
      }),
    });
    console.log("positiion form group", positionFormGroup)
    console.log("all ppostint int  ", this.allPositions)
  }
  onSubmit() {
    console.log("peeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee only", this.pe)

    // const positionEmployees: PositionEmployeePostModel[] = this.positionEmployeeForms.value.map((form: any) => ({
    //   positionId: form.positionId,
    //   entryDateIntoOffice: form.entryDateIntoOffice,
    //   isManagerial: form.isManagerial
    // }

    // ));





    this.px = this.positions;
    const employee: Employee = {
      ...this.form?.value,
    }
    console.log("employee", employee)
    this._employeeService.updateEmployee(this.employeeId, employee).subscribe({

      next: (data: any) => { console.log(data); this.newEmployee = data },
      error: (e: Error) => {
        console.error(e);
        console.error('Failed to add employee');
      },
    });
    // this.go()



    this.newEmployee = this.employeeForm?.value as Employee

    console.log("new employee", this.newEmployee)
    //   //   positions: this.px.map((position: Position) => ({
    //   //     positionName: {
    //   //       name: position.name,
    //   //       description: position.description,
    //   //     },
    //   //     isAdminstrative: true,
    //   //     dateOfEntryIntoOffice: new Date()
    //   //   })),
    //   // };

    //   // if (!employee.positions) {
    //   //   console.error('Positions are missing');
    //   //   return;
    //   // }}
    // }
    this.newEmployee = this.employeeForm?.value as Employee

    console.log("new employee", this.newEmployee)
    console.log("employee id", this.employeeId)
    this._employeeService.updateEmployee(this.employeeId, this.newEmployee).subscribe({

      next: (data: any) => {
        console.log(data);
        console.log("before")
        // this.addPositionEmployee()
        console.log("after")

      },
      error: (e: Error) => {
        console.error(e);
        console.error('Failed to add employee');
      },
    });

    // positionEmployees.forEach((positionEmployee: PositionEmployeePostModel) => {
    //   this._employeeService.addPositionToEmployee(this.newEmployee.id, positionEmployee).subscribe({
    //     next: (data: any) => {
    //       console.log("to server its get;", data);
    //       console.log(data);
    //     },
    //     error: (e: Error) => {
    //       console.error(e);
    //       console.error('Failed to add position employee');
    //     },
    //   });
    // }
    // go(){
    //   console.log("goooo")
    //   this.tryPositionEmployee as PositionEmployeePostModel
    //   this._employeeService.addPositionToEmployee(this.newEmployee.id, this.tryPositionEmployee).subscribe({
    //     next: (data: any) =>{ 
    //       console.log("sdfghjkl;", data); 
    //       console.log(data);
    //     },
    //     error: (e: Error) => {
    //       console.error(e);
    //       console.error('Failed to add position employee');
    //     },
    //   });







    // }

  }



}
