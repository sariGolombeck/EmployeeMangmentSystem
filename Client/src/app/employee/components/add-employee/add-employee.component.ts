// import { Gender } from '../../models/employee';

// import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
// import { EmployeeService } from '../../employee.service';
// import { PositionService } from '../../../position/position.service';
// import { Employee } from '../../models/employee';
// import { Position } from '../../../position';
// import { Component, OnInit } from '@angular/core';
// import { PositionEmployeePostModel } from '../../../position-employee-post-model';
// import { dateValidator, identityValidator, isValidControl, nameValidator } from '../../../validtaionTest/validation';
// @Component({
//   selector: 'add-employee',                      
//   templateUrl: 'add-employee.component.html',
//   styleUrls: ['add-employee.component.scss'],
// })
// export class AddEmployeeComponent implements OnInit {
//   positions: Position[] = [];
//   // tryPositionEmployee = new PositionEmployeePostModel(0, new Date(), false);
//   form!: FormGroup;
//   selectedPosition: Position | null = null;
//   allPositions: Position[] = [];
//   isLeanar: boolean = false;
//   px: Position[] = [];
//   pn: Position[] = [];
//   xx: Position[] = [];
//   y: any[] = [];
//   newEmployee!: Employee
//   positionEmployee: PositionEmployeePostModel[] = [];
//   positionEmployeeForms: any;
// isLinear: unknown;
//   constructor(
//     private _formBuilder: FormBuilder,
//     private _employeeService: EmployeeService,
//     private _positionService: PositionService
//   ) { }

//   updateEntryDateIntoOffice(index: number, selectedDate: Date) {
//     const positionEmployeeForm = this.positionEmployeeForms.at(index) as FormGroup;
//     positionEmployeeForm.patchValue({ entryDateIntoOffice: selectedDate });
//     console.log("allform", positionEmployeeForm)
//   }
//   // positionEmployeeForms: FormArray;

//   initPositionEmployeeForms(): void {
//     this.positionEmployeeForms = this._formBuilder.array([]);
//   }

//   addPositionEmployeeForm(pId: any) {
//     const positionEmployee = this._formBuilder.group({
//       positionId: [pId, Validators.required],
//       entryDateIntoOffice: [new Date(), Validators.required],
//       ismanagerial: [false]
//     });
//     this.positionEmployeeForms.push(positionEmployee);
//   }
//   addPosition(position: Position) {
//     var tmp = this.positions;
//     this.positions = tmp.filter(x => x.id != position.id);
//     if (tmp.length === this.positions.length) {
//       this.addPositionEmployeeForm(position.id);
//       this.positions.push(position)
//       this.positionEmployee.push()
//     }
//     console.log("");
//   }
//   ngOnInit() {
//     this.initPositionEmployeeForms()
//     this.form = this._formBuilder.group({
//       allPositions: this._formBuilder.array([]),
//       firstName: ['', [Validators.required, nameValidator]],
//       lastName: ['', [Validators.required, nameValidator]],
//       address: ['', Validators.required],
//       startOfWorkDate: ['', [Validators.required, dateValidator]],
//       birthDate: ['', [Validators.required, dateValidator]],
//       identity: ['', [Validators.required, identityValidator]],
// gender:[Gender.Male,Validators.required]    });

//     // this.addPositionEmployeeForm();

//     this._positionService.getPositions().subscribe({
//       next: (data) => {
//         data.forEach((position: Position) => {
//           console.log("get from server this", position)
//           this.allPositions.push(position);
//           this.addPositionFormGroup(position);
//         });
//       },
//       error: (e) => console.error(e),
//     });
//   }
//   onDateChange(selectedDate: any, index: number) {
//     this.positionEmployee[index].entryDateIntoOffice = selectedDate;
//     this.form.markAsDirty();
//   }
//   updateIsManagerialState(index: number, isChecked: boolean) {
//     this.positionEmployeeForms.controls[index].get('ismanagerial').setValue(isChecked);
//   }

//   // initPositionEmployeeForm(): void {
//   //   this.positionEmployeeForm = this._formBuilder.group({
//   //     id: [null, Validators.required],
//   //     entryDateIntoOffice: [Date, Validators.required],
//   //     isManagerial: [false] // Default value
//   //   });
//   //   this.positionEmployee.push(this.positionEmployeeForm);

//   // }











//   addPositionFormGroup(position: Position) {
//     const positionFormGroup = this._formBuilder.group({
//       position: this._formBuilder.group({
//         name: [position.name],
//         description: [position.description],
//         id: [position.id]
//       }),
//     });
//     console.log("positiion form group", positionFormGroup)
//     console.log("all ppostint int  ", this.allPositions)
//   }



//   onSubmit() {
//     const positionEmployees: PositionEmployeePostModel[] = this.positionEmployeeForms.value.map((form: any) => ({
//       positionId: form.positionId,
//       entryDateIntoOffice: form.entryDateIntoOffice,
//       ismanagerial: form.ismanagerial
//     }

//     ));


//     console.log("the form  : ", this.positionEmployeeForms)
//     console.log("the p its self", positionEmployees)






//     this.px = this.positions;
//     const employee: Employee = {
//       ...this.form.value,
//       gender: this.form.get('gender')?.value,

//       //   positions: this.px.map((position: Position) => ({
//       //     positionName: {
//       //       name: position.name,
//       //       description: position.description,
//       //     },
//       //     isAdminstrative: true,
//       //     dateOfEntryIntoOffice: new Date()
//       //   })),
//       // };

//       // if (!employee.positions) {
//       //   console.error('Positions are missing');
//       //   return;
//       // }}
//     }
//     console.log("gender form", this.form.get('gender')?.value)

//     this._employeeService.addEmployee(employee).subscribe({

//       next: (data: any) => {
//         console.log(data); this.newEmployee = data
//         console.log("yes its arrived!!", this.newEmployee)
//         console.log("the gedrerushhhhhhhhhhh", this.form.get('gender')?.value,
//         )
//       },
//       error: (e: Error) => {
//         console.error(e);
//         console.error('Failed to add employee');
//       },
//     });
//     // this.go()
//     positionEmployees.forEach((positionEmployee: PositionEmployeePostModel) => {
//       this._employeeService.addPositionToEmployee(this.newEmployee.id, positionEmployee).subscribe({
//         next: (data: any) => {
//           console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhh", data);
//           console.log(data);
//         },
//         error: (e: Error) => {
//           console.error(e);
//           console.error('Failed to add position employee');
//         },
//       });

//       // }
//       // go(){
//       //   console.log("goooo")
//       //   this.tryPositionEmployee as PositionEmployeePostModel
//       //   this._employeeService.addPositionToEmployee(this.newEmployee.id, this.tryPositionEmployee).subscribe({
//       //     next: (data: any) =>{ 
//       //       console.log("sdfghjkl;", data); 
//       //       console.log(data);
//       //     },
//       //     error: (e: Error) => {
//       //       console.error(e);
//       //       console.error('Failed to add position employee');
//       //     },
//       //   })
//       //



//     }

//     )
//   }
//   validateBirthDate(control: any) {
//     const selectedDate = new Date(control.value);
//     const currentDate = new Date();
//     const age = currentDate.getFullYear() - selectedDate.getFullYear();

//     if (selectedDate > currentDate) {
//       return { invalidDate: true, message: 'תאריך הולדת שגוי' };
//     }

//     if (age < 18) {
//       return { invalidAge: true, message: 'אין אפשרות להעסיק עובד שצעיר מגיל 18' };
//     }

//     return null;
//   }

//   // getBirthDateErrorMessage() {
//   //   if (this.form.get('birthDate')?.hasError('required')) {
//   //     return 'שדה זה הוא שדה חובה';
//   //   }
//   //   if (this.form.get('birthDate')?.hasError('invalidDate')) {
//   //     return this.form.get('birthDate')?.errors?.['message'];
//   //   }
//   //   if (this.form.get('birthDate')?.hasError('invalidAge')) {
//   //     return this.form.get('birthDate')?.errors?.['message'];
//   //   }
//   //   return '';
//   // }


// }
import { Gender } from '../../models/employee';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { PositionService } from '../../../position/position.service';
import { Employee } from '../../models/employee';
import { Position } from '../../../position/models/position';
import { Component, OnInit } from '@angular/core';
import { PositionEmployeePostModel } from '../../../position-employee-post-model';
import { dateValidator, identityValidator, nameValidator, validateEntryDate } from '../../../validtaionTest/validation';
import { PositionEmployeeDto } from '../../../position-employee-dto';
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
    private _formBuilder: FormBuilder,
    private _employeeService: EmployeeService,
    private _positionService: PositionService
  ) { }

  ngOnInit() {
    this.initPositionEmployeeForms();
    this.form = this._formBuilder.group({
      allPositions: this._formBuilder.array([]),
      firstName: ['', [Validators.required, nameValidator]],
      lastName: ['', [Validators.required, nameValidator]],
      address: ['', Validators.required],
      startOfWorkDate: ['', [Validators.required]],
      birthDate: ['', [Validators.required, dateValidator]],
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
      entryDateIntoOffice: [Date(), [Validators.required, (control: AbstractControl) => validateEntryDate(control, this.form.get('startOfWorkDate')?.value)]],
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
    if (this.form.invalid || this.positionEmployeeForms.invalid) {
      return;
    }
    const positionEmployees: PositionEmployeePostModel[] = this.positionEmployeeForms.value.map((form: any) => ({
      positionId: form.positionId,
      entryDateIntoOffice: form.entryDateIntoOffice,
      ismanagerial: form.ismanagerial
    }));

    this.px = this.positions;
    const employee: Employee = {
      ...this.form.value,
      // gender: this.form.get('gender')?.value,
    };

    this._employeeService.addEmployee(employee).subscribe({
      next: (data: any) => {
        this.newEmployee = data;
      },
      error: (e: Error) => {
        console.error(e);
        console.error('Failed to add employee');
      },
    });
    console.log("the emplooyee positions", positionEmployees)

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

  // validateBirthDate(control: any) {
  //   const selectedDate = new Date(control.value);
  //   const currentDate = new Date();
  //   const age = currentDate.getFullYear() - selectedDate.getFullYear();

  //   if (selectedDate > currentDate) {
  //     return { invalidDate: true, message: 'Invalid birth date' };
  //   }

  //   if (age < 18) {
  //     return { invalidAge: true, message: 'Cannot employ someone under 18' };
  //   }

  //   return null;
  // }
}
