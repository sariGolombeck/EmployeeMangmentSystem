// // // // import {Component, OnInit} from '@angular/core';
// // // // import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
// // // // import {MatInputModule} from '@angular/material/input';
// // // // import {MatFormFieldModule} from '@angular/material/form-field';
// // // // import {MatStepperModule} from '@angular/material/stepper';
// // // // import {MatButtonModule} from '@angular/material/button';
// // // // import { EmployeeService } from '../../employee.service';
// // // // import { PositionService } from '../../../position/position.service';
// // // // import { Position } from '../../../position';
// // // // import { Observable } from 'rxjs';
// // // // import { Employee } from '../../../employee';
// // // // import { Gender } from '../../../gender';

// // // // /**
// // // //  * @title Stepper vertical
// // // //  */
// // // // @Component({
// // // //   selector: 'add-employee',
// // // //   templateUrl: 'add-employee.component.html',
// // // //   styleUrl: 'add-employee.component.scss',
 
// // // // })
// // // // export class AddEmploeeComponent implements OnInit{
// // // // // New FormGroup for date input
// // // // positions: Position[] = []; // Array to hold Position objects
// // // // constructor(private _formBuilder: FormBuilder,
// // // //     private _employeeService: EmployeeService,
// // // //     private _positionService: PositionService
// // // //     ) {
// // // //       console.log("the positions:"+ this.positions);
// // // //     this.firstFormGroup = this._formBuilder.group({
// // // //       firstCtrl: ['', Validators.required]
// // // //     });
// // // //     this.secondFormGroup = this._formBuilder.group({
// // // //       secondCtrl: ['', Validators.required]
// // // //     });
// // // //     this.dateFormGroup = this._formBuilder.group({
// // // //       dateCtrl: [Date, Validators.required] // Add validation for date
// // // //     });
// // // //    }
// // // //    dateFormGroup = this._formBuilder.group({
// // // //     dateCtrl: [Date, Validators.required] // Add validation for date
// // // //   });
// // // //   firstFormGroup = this._formBuilder.group({
// // // //     firstCtrl: ['', Validators.required],
// // // //   });
// // // //   // dateFormGroup: FormGroup;
// // // //   secondFormGroup = this._formBuilder.group({
// // // //     secondCtrl: ['', Validators.required],
// // // //   });
// // // // ngOnInit(): void {
// // // //   console.log("the positions:"+ this.positions);

// // // // this._positionService.getPositions().subscribe({
// // // //   next: (data) => {
// // // //     console.log(data);
// // // //     this.positions = data;
// // // //   },
// // // //   error: (e) => console.error(e)
// // // // });

// // // // }
// // // //     isLinear = false;
  
// // // //     selectedGender!: boolean;
// // // //     // Additional fields
// // // //     roles: string[] = ['Manager', 'Teacher', 'Supervisor', 'Secretary']; // Sample roles, you can modify as needed
// // // //   onSubmit() {
// // // //     console.log("ghjkl;'")  ;
// // // //     console.log("select" +this.selectedGender);
// // // //     console.log(this.roles);
    
// // // //     console.log(this.firstFormGroup.value);
// // // //     console.log(this.secondFormGroup.value);
// // // //     console.log(this.dateFormGroup.value);
// // // //     console.log("the positions:"+ this.positions);
  
// // // //     const employee: Employee = {
// // // //       firstName: this.firstFormGroup.value.firstCtrl ? this.firstFormGroup.value.firstCtrl : '',
// // // //       lastName: this.secondFormGroup.value.secondCtrl ? this.secondFormGroup.value.secondCtrl : '',
// // // //       birthdate: this.dateFormGroup.value.dateCtrl instanceof Date ? this.dateFormGroup.value.dateCtrl : new Date(),
// // // //       identity: '',
// // // //       startOfWorkDate: new Date(),
// // // //             positions: this.positions,
// // // //       gender: new Gender
// // // //     };
// // // // console.log(employee);
// // // //     this._employeeService.addEmployee(employee).subscribe({
// // // //       next: (data) => {
// // // //         console.log(data);
// // // //       },
// // // //       error: (e) => console.error(e)
// // // //     });

// // // //   }
// // // // }









// // // // //  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// // // // //  import { MatDatepickerInputEvent } from '@angular/material/datepicker';
 
// // // // //  @Component({
// // // // //    selector: 'app-registration-form',
// // // // //    templateUrl: './registration-form.component.html',
// // // // //    styleUrls: ['./registration-form.component.css']
// // // // //  })
// // // // //  export class RegistrationFormComponent {
// // // // //    isLinear = false;
// // // // //    firstFormGroup: FormGroup;
// // // // //    secondFormGroup: FormGroup;
// // // // //    thirdFormGroup: FormGroup;
// // // // //    fourthFormGroup: FormGroup;
// // // // //    fifthFormGroup: FormGroup;
// // // // //    sixthFormGroup: FormGroup;
// // // // //    selectedGender: number = 0; // Assuming numerical representation for genders
// // // // //    roles = ['Admin', 'User', 'Editor']; // Replace with your actual roles
 
// // // // //    constructor(private _formBuilder: FormBuilder) {
// // // // //      this.firstFormGroup = this._formBuilder.group({
// // // // //        firstCtrl: ['', Validators.required]
// // // // //      });
// // // // //      this.secondFormGroup = this._formBuilder.group({
// // // // //        secondCtrl: ['', Validators.required]
// // // // //      });
// // // // //      this.thirdFormGroup = this._formBuilder.group({
// // // // //        dob: ['', Validators.required]
// // // // //      });
// // // // //      this.fourthFormGroup = this._formBuilder.group({
// // // // //        gender: [this.selectedGender] // Initial value for gender selection
// // // // //      });
// // // // //      this.fifthFormGroup = this._formBuilder.group({
// // // // //        role: ['', Validators.required],
// // // // //        isManagementRole: [false],
// // // // //        dateOfEntry: ['', Validators.required]
// // // // //      });
// // // // //      this.sixthFormGroup = this._formBuilder.group({
// // // // //        // No form controls needed here as it's just a confirmation step
// // // // //      });
// // // // //    }
 
// // // // //    onSubmit() {
// // // // //      // Handle form submission logic here
// // // // //      console.log(this.firstFormGroup.value);
// // // // //      console.log(this.secondFormGroup.value);
// // // // //      console.log(this.thirdFormGroup.value);
// // // // //      console.log(this.fourthFormGroup.value);
// // // // //      console.log(this.fifthFormGroup.value);
// // // // //    }
 
// // // // //    chosenDate(event: MatDatepickerInputEvent<any>) {
// // // // //      // Handle date selection logic here
// // // // //      this.fifthFormGroup.controls['dateOfEntry'].setValue(event.value);
// // // // //    }
// // // // //  }
 

// // // import { Component, OnInit } from '@angular/core';
// // // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // import { MatStepperModule } from '@angular/material/stepper';
// // // import { MatButtonModule } from '@angular/material/button';
// // // import { EmployeeService } from '../../employee.service';
// // // import { PositionService } from '../../../position/position.service';
// // // import { Observable } from 'rxjs';
// // // import { Employee } from '../../../employee';
// // // import { Gender } from '../../../gender';
// // // import { Position } from '../../../position';

// // // @Component({
// // //   selector: 'add-employee',
// // //   templateUrl: 'add-employee.component.html',
// // //   styleUrl: 'add-employee.component.scss',
// // // })
// // // export class AddEmployeeComponent implements OnInit {
// // //   positions: Position[] = [];
// // //   form: FormGroup;

// // //   constructor(private _formBuilder: FormBuilder,
// // //               private _employeeService: EmployeeService,
// // //               private _positionService: PositionService) {
// // //     this.form = this._formBuilder.group({
// // //       firstName: ['', Validators.required],
// // //       lastName: ['', Validators.required],
// // //       address: ['', Validators.required],

// // //       birthdate: [new Date(), Validators.required],
// // //       startOfWorkDate: [new Date(), Validators.required],

// // //       identity: ['', Validators.required],
// // //       positions: Position,
// // //       gender: new Gender(),
// // //     });
// // //   }

// // //   ngOnInit() {
// // //     this._positionService.getPositions().subscribe({
// // //       next: (data) => this.positions = data,
// // //       error: (e) => console.error(e),
// // //     });
// // //   }

// // //   isLinear = false;
// // //   selectedGender?: boolean;
// // //   onSubmit() {
// // //     const employee: Employee = {
// // //       ...this.form.value,
// // //       startOfWorkDate: new Date(),
// // //     };
// // //     this._employeeService.addEmployee(employee).subscribe({
// // //       next: (data) => console.log(data),
// // //       error: (e) => console.error(e),
// // //     });
// // //   }
// // // }
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { EmployeeService } from '../../employee.service';
// // import { PositionService } from '../../../position/position.service';
// // import { Employee } from '../../../employee';
// // import { Position } from '../../../position';
// // import { Gender } from '../../../gender';
// // import { Component, OnInit } from '@angular/core';
// // import { Console } from 'console';

// // @Component({
// //   selector: 'add-employee',
// //   templateUrl: 'add-employee.component.html',
// //   styleUrls: ['add-employee.component.scss'],
// // })
// // export class AddEmployeeComponent implements OnInit {
// //   positions: Position[] = [];
// //   form: FormGroup;
// //   selectedPosition: Position | null = null;

// //   constructor(private _formBuilder: FormBuilder,
// //               private _employeeService: EmployeeService,
// //               private _positionService: PositionService) {
// //     this.form = this._formBuilder.group({
// //       firstName: ['', Validators.required],
// //       lastName: ['', Validators.required],
// //       address: ['', Validators.required],
// //       startOfWorkDate: [new Date(), Validators.required], 
// //       birthdate: [new Date(), Validators.required],

// //       identity: ['', Validators.required],
// //       positions: [[Position], Validators.required],
// //       isAdminstrative: [false],
// //       gender: new Gender(),
// //     });
// //   }

// //   ngOnInit() {
// //     this._positionService.getPositions().subscribe({
// //       next: (data) => this.positions = data,
// //       error: (e) => console.error(e),
// //     });
// //   }

// //   isLinear = false;

// //   addPosition() {
// //     if (this.selectedPosition) {
// //       const positionsControl = this.form.get('positions');
// //       positionsControl?.patchValue([...positionsControl?.value, this.selectedPosition]);
// //       this.selectedPosition = null;
// //     }
// //   }

// //   onSubmit() {
// //     const employee: Employee = {
// //       ...this.form.value,
// //     };
// //     console.log("employee - female::",employee.gender.female);
// //     console.log("employee - male::",employee.gender.male);
// // console.log("employee - isAdminstrative::",employee.positions.map(x=>x.isAdminstrative));
// //     this._employeeService.addEmployee(employee).subscribe({
// //       next: (data) => console.log(data),
// //       error: (e) => console.error(e),
// //     });
// //   }
// // }



// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { EmployeeService } from '../../employee.service';
// import { PositionService } from '../../../position/position.service';
// import { Employee } from '../../../employee';
// import { Position } from '../../../position';
// import { Gender } from '../../../gender';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'add-employee',
//   templateUrl: 'add-employee.component.html',
//   styleUrls: ['add-employee.component.scss'],
// })
// export class AddEmployeeComponent implements OnInit {
//   positions: Position[] = [];
//   form: FormGroup;
//   selectedPosition: Position | null = null;

//   constructor(private _formBuilder: FormBuilder,
//               private _employeeService: EmployeeService,
//               private _positionService: PositionService) {
//     this.form = this._formBuilder.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       address: ['', Validators.required],
//       startOfWorkDate: [new Date(), Validators.required], 
//       birthdate: [new Date(), Validators.required],
//       dateOfEntryIntoOffice: [new Date(), Validators.required],
//       identity: ['', Validators.required],
//       positions: [[], Validators.required], // Array for selected positions
//       isAdminstrative: [false], // Flag for administrative role
//       gender: new Gender(),
//     });
//   }

//   ngOnInit() {
//     this._positionService.getPositions().subscribe({
//       next: (data) => this.positions = data,
//       error: (e) => console.error(e),
//     });
//   }

//   isLinear = false;

//   addPosition() {
//     if (this.selectedPosition) {
//       const positionsControl = this.form.get('positions');
//       positionsControl?.patchValue([...positionsControl?.value, this.selectedPosition]);
//       this.selectedPosition = null;
//     }
//   }

//   onSubmit() {
//     const employee: Employee = {
//       ...this.form.value,
//     };
//     console.log("Employee - Female:", employee.gender.female);
//     console.log("Employee - Male:", employee.gender.male);
//     console.log("Employee - Administrative:", employee);
//     console.log("Employee - Positions:", employee.positions.map(x => x.positionName.name));
//     console.log("Employee - Positions start enyry:", employee.positions.map(x => x.dateOfEntryIntoOffice));
//     console.log("Employee - Start of Work Date:", employee.startOfWorkDate);

//     this._employeeService.addEmployee(employee).subscribe({
//       next: (data) => console.log(data),
//       error: (e) => console.error(e),
//     });
//   }
// }



// // // // // // // import {Component, OnInit} from '@angular/core';
// // // // // // // import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
// // // // // // // import {MatInputModule} from '@angular/material/input';
// // // // // // // import {MatFormFieldModule} from '@angular/material/form-field';
// // // // // // // import {MatStepperModule} from '@angular/material/stepper';
// // // // // // // import {MatButtonModule} from '@angular/material/button';
// // // // // // // import { EmployeeService } from '../../employee.service';
// // // // // // // import { PositionService } from '../../../position/position.service';
// // // // // // // import { Position } from '../../../position';
// // // // // // // import { Observable } from 'rxjs';
// // // // // // // import { Employee } from '../../../employee';
// // // // // // // import { Gender } from '../../../gender';

// // // // // // // /**
// // // // // // //  * @title Stepper vertical
// // // // // // //  */
// // // // // // // @Component({
// // // // // // //   selector: 'add-employee',
// // // // // // //   templateUrl: 'add-employee.component.html',
// // // // // // //   styleUrl: 'add-employee.component.scss',
 
// // // // // // // })
// // // // // // // export class AddEmploeeComponent implements OnInit{
// // // // // // // // New FormGroup for date input
// // // // // // // positions: Position[] = []; // Array to hold Position objects
// // // // // // // constructor(private _formBuilder: FormBuilder,
// // // // // // //     private _employeeService: EmployeeService,
// // // // // // //     private _positionService: PositionService
// // // // // // //     ) {
// // // // // // //       console.log("the positions:"+ this.positions);
// // // // // // //     this.firstFormGroup = this._formBuilder.group({
// // // // // // //       firstCtrl: ['', Validators.required]
// // // // // // //     });
// // // // // // //     this.secondFormGroup = this._formBuilder.group({
// // // // // // //       secondCtrl: ['', Validators.required]
// // // // // // //     });
// // // // // // //     this.dateFormGroup = this._formBuilder.group({
// // // // // // //       dateCtrl: [Date, Validators.required] // Add validation for date
// // // // // // //     });
// // // // // // //    }
// // // // // // //    dateFormGroup = this._formBuilder.group({
// // // // // // //     dateCtrl: [Date, Validators.required] // Add validation for date
// // // // // // //   });
// // // // // // //   firstFormGroup = this._formBuilder.group({
// // // // // // //     firstCtrl: ['', Validators.required],
// // // // // // //   });
// // // // // // //   // dateFormGroup: FormGroup;
// // // // // // //   secondFormGroup = this._formBuilder.group({
// // // // // // //     secondCtrl: ['', Validators.required],
// // // // // // //   });
// // // // // // // ngOnInit(): void {
// // // // // // //   console.log("the positions:"+ this.positions);

// // // // // // // this._positionService.getPositions().subscribe({
// // // // // // //   next: (data) => {
// // // // // // //     console.log(data);
// // // // // // //     this.positions = data;
// // // // // // //   },
// // // // // // //   error: (e) => console.error(e)
// // // // // // // });

// // // // // // // }
// // // // // // //     isLinear = false;
  
// // // // // // //     selectedGender!: boolean;
// // // // // // //     // Additional fields
// // // // // // //     roles: string[] = ['Manager', 'Teacher', 'Supervisor', 'Secretary']; // Sample roles, you can modify as needed
// // // // // // //   onSubmit() {
// // // // // // //     console.log("ghjkl;'")  ;
// // // // // // //     console.log("select" +this.selectedGender);
// // // // // // //     console.log(this.roles);
    
// // // // // // //     console.log(this.firstFormGroup.value);
// // // // // // //     console.log(this.secondFormGroup.value);
// // // // // // //     console.log(this.dateFormGroup.value);
// // // // // // //     console.log("the positions:"+ this.positions);
  
// // // // // // //     const employee: Employee = {
// // // // // // //       firstName: this.firstFormGroup.value.firstCtrl ? this.firstFormGroup.value.firstCtrl : '',
// // // // // // //       lastName: this.secondFormGroup.value.secondCtrl ? this.secondFormGroup.value.secondCtrl : '',
// // // // // // //       birthdate: this.dateFormGroup.value.dateCtrl instanceof Date ? this.dateFormGroup.value.dateCtrl : new Date(),
// // // // // // //       identity: '',
// // // // // // //       startOfWorkDate: new Date(),
// // // // // // //             positions: this.positions,
// // // // // // //       gender: new Gender
// // // // // // //     };
// // // // // // // console.log(employee);
// // // // // // //     this._employeeService.addEmployee(employee).subscribe({
// // // // // // //       next: (data) => {
// // // // // // //         console.log(data);
// // // // // // //       },
// // // // // // //       error: (e) => console.error(e)
// // // // // // //     });

// // // // // // //   }
// // // // // // // }









// // // // // // // //  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// // // // // // // //  import { MatDatepickerInputEvent } from '@angular/material/datepicker';
 
// // // // // // // //  @Component({
// // // // // // // //    selector: 'app-registration-form',
// // // // // // // //    templateUrl: './registration-form.component.html',
// // // // // // // //    styleUrls: ['./registration-form.component.css']
// // // // // // // //  })
// // // // // // // //  export class RegistrationFormComponent {
// // // // // // // //    isLinear = false;
// // // // // // // //    firstFormGroup: FormGroup;
// // // // // // // //    secondFormGroup: FormGroup;
// // // // // // // //    thirdFormGroup: FormGroup;
// // // // // // // //    fourthFormGroup: FormGroup;
// // // // // // // //    fifthFormGroup: FormGroup;
// // // // // // // //    sixthFormGroup: FormGroup;
// // // // // // // //    selectedGender: number = 0; // Assuming numerical representation for genders
// // // // // // // //    roles = ['Admin', 'User', 'Editor']; // Replace with your actual roles
 
// // // // // // // //    constructor(private _formBuilder: FormBuilder) {
// // // // // // // //      this.firstFormGroup = this._formBuilder.group({
// // // // // // // //        firstCtrl: ['', Validators.required]
// // // // // // // //      });
// // // // // // // //      this.secondFormGroup = this._formBuilder.group({
// // // // // // // //        secondCtrl: ['', Validators.required]
// // // // // // // //      });
// // // // // // // //      this.thirdFormGroup = this._formBuilder.group({
// // // // // // // //        dob: ['', Validators.required]
// // // // // // // //      });
// // // // // // // //      this.fourthFormGroup = this._formBuilder.group({
// // // // // // // //        gender: [this.selectedGender] // Initial value for gender selection
// // // // // // // //      });
// // // // // // // //      this.fifthFormGroup = this._formBuilder.group({
// // // // // // // //        role: ['', Validators.required],
// // // // // // // //        isManagementRole: [false],
// // // // // // // //        dateOfEntry: ['', Validators.required]
// // // // // // // //      });
// // // // // // // //      this.sixthFormGroup = this._formBuilder.group({
// // // // // // // //        // No form controls needed here as it's just a confirmation step
// // // // // // // //      });
// // // // // // // //    }
 
// // // // // // // //    onSubmit() {
// // // // // // // //      // Handle form submission logic here
// // // // // // // //      console.log(this.firstFormGroup.value);
// // // // // // // //      console.log(this.secondFormGroup.value);
// // // // // // // //      console.log(this.thirdFormGroup.value);
// // // // // // // //      console.log(this.fourthFormGroup.value);
// // // // // // // //      console.log(this.fifthFormGroup.value);
// // // // // // // //    }
 
// // // // // // // //    chosenDate(event: MatDatepickerInputEvent<any>) {
// // // // // // // //      // Handle date selection logic here
// // // // // // // //      this.fifthFormGroup.controls['dateOfEntry'].setValue(event.value);
// // // // // // // //    }
// // // // // // // //  }
 

// // // // // // import { Component, OnInit } from '@angular/core';
// // // // // // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // // // // import { MatStepperModule } from '@angular/material/stepper';
// // // // // // import { MatButtonModule } from '@angular/material/button';
// // // // // // import { EmployeeService } from '../../employee.service';
// // // // // // import { PositionService } from '../../../position/position.service';
// // // // // // import { Observable } from 'rxjs';
// // // // // // import { Employee } from '../../../employee';
// // // // // // import { Gender } from '../../../gender';
// // // // // // import { Position } from '../../../position';

// // // // // // @Component({
// // // // // //   selector: 'add-employee',
// // // // // //   templateUrl: 'add-employee.component.html',
// // // // // //   styleUrl: 'add-employee.component.scss',
// // // // // // })
// // // // // // export class AddEmployeeComponent implements OnInit {
// // // // // //   positions: Position[] = [];
// // // // // //   form: FormGroup;

// // // // // //   constructor(private _formBuilder: FormBuilder,
// // // // // //               private _employeeService: EmployeeService,
// // // // // //               private _positionService: PositionService) {
// // // // // //     this.form = this._formBuilder.group({
// // // // // //       firstName: ['', Validators.required],
// // // // // //       lastName: ['', Validators.required],
// // // // // //       address: ['', Validators.required],

// // // // // //       birthdate: [new Date(), Validators.required],
// // // // // //       startOfWorkDate: [new Date(), Validators.required],

// // // // // //       identity: ['', Validators.required],
// // // // // //       positions: Position,
// // // // // //       gender: new Gender(),
// // // // // //     });
// // // // // //   }

// // // // // //   ngOnInit() {
// // // // // //     this._positionService.getPositions().subscribe({
// // // // // //       next: (data) => this.positions = data,
// // // // // //       error: (e) => console.error(e),
// // // // // //     });
// // // // // //   }

// // // // // //   isLinear = false;
// // // // // //   selectedGender?: boolean;
// // // // // //   onSubmit() {
// // // // // //     const employee: Employee = {
// // // // // //       ...this.form.value,
// // // // // //       startOfWorkDate: new Date(),
// // // // // //     };
// // // // // //     this._employeeService.addEmployee(employee).subscribe({
// // // // // //       next: (data) => console.log(data),
// // // // // //       error: (e) => console.error(e),
// // // // // //     });
// // // // // //   }
// // // // // // }
// // // // // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // // // import { EmployeeService } from '../../employee.service';
// // // // // import { PositionService } from '../../../position/position.service';
// // // // // import { Employee } from '../../../employee';
// // // // // import { Position } from '../../../position';
// // // // // import { Gender } from '../../../gender';
// // // // // import { Component, OnInit } from '@angular/core';
// // // // // import { Console } from 'console';

// // // // // @Component({
// // // // //   selector: 'add-employee',
// // // // //   templateUrl: 'add-employee.component.html',
// // // // //   styleUrls: ['add-employee.component.scss'],
// // // // // })
// // // // // export class AddEmployeeComponent implements OnInit {
// // // // //   positions: Position[] = [];
// // // // //   form: FormGroup;
// // // // //   selectedPosition: Position | null = null;

// // // // //   constructor(private _formBuilder: FormBuilder,
// // // // //               private _employeeService: EmployeeService,
// // // // //               private _positionService: PositionService) {
// // // // //     this.form = this._formBuilder.group({
// // // // //       firstName: ['', Validators.required],
// // // // //       lastName: ['', Validators.required],
// // // // //       address: ['', Validators.required],
// // // // //       startOfWorkDate: [new Date(), Validators.required], 
// // // // //       birthdate: [new Date(), Validators.required],

// // // // //       identity: ['', Validators.required],
// // // // //       positions: [[Position], Validators.required],
// // // // //       isAdminstrative: [false],
// // // // //       gender: new Gender(),
// // // // //     });
// // // // //   }

// // // // //   ngOnInit() {
// // // // //     this._positionService.getPositions().subscribe({
// // // // //       next: (data) => this.positions = data,
// // // // //       error: (e) => console.error(e),
// // // // //     });
// // // // //   }

// // // // //   isLinear = false;

// // // // //   addPosition() {
// // // // //     if (this.selectedPosition) {
// // // // //       const positionsControl = this.form.get('positions');
// // // // //       positionsControl?.patchValue([...positionsControl?.value, this.selectedPosition]);
// // // // //       this.selectedPosition = null;
// // // // //     }
// // // // //   }

// // // // //   onSubmit() {
// // // // //     const employee: Employee = {
// // // // //       ...this.form.value,
// // // // //     };
// // // // //     console.log("employee - female::",employee.gender.female);
// // // // //     console.log("employee - male::",employee.gender.male);
// // // // // console.log("employee - isAdminstrative::",employee.positions.map(x=>x.isAdminstrative));
// // // // //     this._employeeService.addEmployee(employee).subscribe({
// // // // //       next: (data) => console.log(data),
// // // // //       error: (e) => console.error(e),
// // // // //     });
// // // // //   }
// // // // // }



// // // import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // import { EmployeeService } from '../../employee.service';
// // // import { PositionService } from '../../../position/position.service';
// // // import { Employee } from '../../../employee';
// // // import { Position } from '../../../position';
// // // import { Gender } from '../../../gender';
// // // import { Component, OnInit } from '@angular/core';

// // // @Component({
// // //   selector: 'add-employee',
// // //   templateUrl: 'add-employee.component.html',
// // //   styleUrls: ['add-employee.component.scss'],
// // // })
// // // export class AddEmployeeComponent implements OnInit {
// // //   positions: Position[] = [];
// // //   form!: FormGroup;
// // //   selectedPosition: Position | null = null;
// // // isLeanar!: false;
// // //   constructor(private _formBuilder: FormBuilder,
// // //               private _employeeService: EmployeeService,
// // //               private _positionService: PositionService) {
// // //     // this.form = this._formBuilder.group({
// // //       // firstName: ['', Validators.required],
// // //       // lastName: ['', Validators.required],
// // //       // address: ['', Validators.required],
// // //       // startOfWorkDate: [new Date(), Validators.required], 
// // //       // birthdate: [new Date(), Validators.required],
// // //       // dateOfEntryIntoOffice: [new Date(), Validators.required],
// // //       // identity: ['', Validators.required],
// // //       // positions: [[], Validators.required], // Array for selected positions
// // //       // isAdminstrative: [false], // Flag for administrative role
// // //       // gender: new Gender(),
// // //     // });
// // //   }ngOnInit() {
// // //     this.form = this._formBuilder.group({
// // //       firstName: ['', Validators.required],
// // //       lastName: ['', Validators.required],
// // //       address: ['', Validators.required],
// // //       startOfWorkDate: [new Date(), Validators.required], 
// // //       birthdate: [new Date(), Validators.required],
// // //       identity: ['', Validators.required],
// // //       positions: this._formBuilder.array([Position]), // Initialize as an empty array
// // //       gender: new Gender(),
// // //     });
  
// // //     this._positionService.getPositions().subscribe({
// // //       next: (data) => {
// // //         // Populate the positions array with form groups
// // //         data.forEach((position: Position) => {
// // //      (this.createPositionFormGroup(position as Position));});
// // //       },
// // //       error: (e) => console.error(e),
// // //     });
// // //   }
  
// // //   createPositionFormGroup(position: Position) {
// // //    this._formBuilder.group({
// // //       positionName: this._formBuilder.group({
// // //         name: [position.positionName.name],
// // //         description: [position.positionName.description],
// // //         id: [position.positionName.id]
// // //       }),
// // //       isAdminstrative: [false],
// // //       dateOfEntryIntoOffice: [new Date(), Validators.required]
// // //     });
// // //     this.positions.push(position);
    
// // //   }
  
// // //   get positionss() {
// // //     return this.form.get('positions') as FormArray;
// // //   }
// // //   addPositionFormGroup(position: Position) {
// // //     const positionFormGroup = this._formBuilder.group({
// // //       positionName: this._formBuilder.group({
// // //         name: [position.positionName.name],
// // //         description: [position.positionName.description],
// // //         id: [position.positionName.id]
// // //       }),
// // //       isAdminstrative: [false],
// // //       dateOfEntryIntoOffice: [new Date(), Validators.required]
// // //     });
// // //     (this.form.get('positions') as FormArray).push(positionFormGroup);
// // //     (this.form.get('allPositions') as FormArray).push(positionFormGroup);
// // //   }
// // //   get positionForms() {
// // //     return (this.form.get('positions') as FormArray).controls;
// // //   }
// // //   onSubmit() {
// // //     const employee: Employee = {
// // //       ...this.form.value,
// // //       startOfWorkDate: new Date(),
// // //     };
// // //     this._employeeService.addEmployee(employee).subscribe({
// // //       next: (data) => console.log(data),
// // //       error: (e) => console.error(e),
// // //     });
// // //   }
// // // }  

// // // // import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // // import { EmployeeService } from '../../employee.service';
// // // // import { PositionService } from '../../../position/position.service';
// // // // import { Employee } from '../../../employee';
// // // // import { Position } from '../../../position';
// // // // import { Gender } from '../../../gender';
// // // // import { Component, OnInit } from '@angular/core';

// // // // @Component({
// // // //   selector: 'add-employee',
// // // //   templateUrl: 'add-employee.component.html',
// // // //   styleUrls: ['add-employee.component.scss'],
// // // // })
// // // // export class AddEmployeeComponent implements OnInit {
// // // //   positions: Position[] = [];
// // // //   form!: FormGroup;
// // // //   selectedPosition: Position | null = null;
// // // //   isLinear!:false;
// // // //   constructor(private _formBuilder: FormBuilder,
// // // //               private _employeeService: EmployeeService,
// // // //               private _positionService: PositionService) {}
// // // //   ngOnInit() {
// // // //     this.form = this._formBuilder.group({
// // // //       firstName: ['', Validators.required],
// // // //       lastName: ['', Validators.required],
// // // //       address: ['', Validators.required],
// // // //       startOfWorkDate: [new Date(), Validators.required], 
// // // //       birthdate: [new Date(), Validators.required],
// // // //       identity: ['', Validators.required],
// // // //       positions: this._formBuilder.array([]), // Initialize as an empty array
// // // //       gender: new Gender(),
// // // //     });
  
// // // //     this._positionService.getPositions().subscribe({
// // // //       next: (data) => {
// // // //         // Populate the positions array with form groups
// // // //         data.forEach((position: Position) => {
// // // //           this.addPositionFormGroup(position);
// // // //         });
// // // //       },
// // // //       error: (e) => console.error(e),
// // // //     });
// // // //   }

  
// // // //   addPositionFormGroup(position: Position) {
// // // //     const positionFormGroup = this._formBuilder.group({
// // // //       positionName: this._formBuilder.group({
// // // //         name: [position.positionName.name],
// // // //         description: [position.positionName.description],
// // // //         id: [position.positionName.id]
// // // //       }),
// // // //       isAdminstrative: [false],
// // // //       dateOfEntryIntoOffice: [new Date(), Validators.required]
// // // //     });
// // // //     (this.form.get('positions') as FormArray).push(positionFormGroup);
// // // //     (this.form.get('allPositions') as FormArray).push(positionFormGroup);
  
// // // //   }
  
// // // //   get positionForms() {
// // // //     return (this.form.get('positions') as FormArray).controls;
// // // //   }



  
// // // //   onSubmit() {
// // // //     const employee: Employee = {
// // // //       ...this.form.value,
// // // //       startOfWorkDate: new Date(),
// // // //     };

// // // //     this._employeeService.addEmployee(employee).subscribe({
// // // //       next: (data) => console.log(data),
// // // //       error: (e) => console.error(e),
// // // //     });
// // // //   }
// // // // }




// // import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { EmployeeService } from '../../employee.service';
// // import { PositionService } from '../../../position/position.service';
// // import { Employee } from '../../../employee';
// // import { Position } from '../../../position';
// // import { Gender } from '../../../gender';
// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'add-employee',
// //   templateUrl: 'add-employee.component.html',
// //   styleUrls: ['add-employee.component.scss'],
// // })
// // export class AddEmployeeComponent implements OnInit {
// //   positions: Position[] = [];
// //   form!: FormGroup;
// //   selectedPosition: Position | null = null;
// //   allPositions: Position[] = [];

// //   constructor(
// //     private _formBuilder: FormBuilder,
// //     private _employeeService: EmployeeService,
// //     private _positionService: PositionService
// //   ) {}

// //   ngOnInit() {
// //     this.form = this._formBuilder.group({
// //       allPositions: this._formBuilder.array([]), // Initialize as an empty array
// //       firstName: ['', Validators.required],
// //       lastName: ['', Validators.required],
// //       address: ['', Validators.required],
// //       startOfWorkDate: [new Date(), Validators.required],
// //       birthdate: [new Date(), Validators.required],
// //       identity: ['', Validators.required],
// //       positions: this._formBuilder.array([]), // Initialize as an empty array
// //       gender: new Gender(),
// //     });

// //     this._positionService.getPositions().subscribe({
// //       next: (data) => {
// //         this.allPositions = data;
// //         data.forEach((position: Position) => {
// //           this.addPositionFormGroup(position);
// //         });
// //       },
// //       error: (e) => console.error(e),
// //     });
// //   }

// //   addPositionFormGroup(position: Position) {
// //     const positionFormGroup = this._formBuilder.group({
// //       positionName: this._formBuilder.group({
// //         name: [position.positionName.name],
// //         description: [position.positionName.description],
// //         id: [position.positionName.id],
// //       }),
// //       isAdminstrative: [false],
// //       dateOfEntryIntoOffice: [new Date(), Validators.required],
// //     });

// //     // Add positionFormGroup only to the 'allPositions' array
// //     (this.form.get('allPositions') as FormArray).push(positionFormGroup);
// //   }

// //   addSelectedPositionsToEmployee() {
// //     // Get the selected positions from the 'positions' FormArray
// //     const selectedPositions = this.form.get('positions')?.value as Position[];

// //     // Clear the existing positions in the 'positions' array
// //     (this.form.get('positions') as FormArray).clear();

// //     // Add only the selected positions to the 'positions' array
// //     selectedPositions.forEach((position: Position) => {
// //       const positionFormGroup = this._formBuilder.group({
// //         positionName: this._formBuilder.group({
// //           name: [position.positionName.name],
// //           description: [position.positionName.description],
// //           id: [position.positionName.id],
// //         }),
// //         isAdminstrative: [false],
// //         dateOfEntryIntoOffice: [new Date(), Validators.required],
// //       });
// //       (this.form.get('positions') as FormArray).push(positionFormGroup);
// //     });
// //   }

// //   checkIfAdministrative(positionFormGroup: FormGroup) {
// //     return positionFormGroup.get('isAdminstrative')?.value;
// //   }

// //   get positionForms() {
// //     return (this.form.get('positions') as FormArray).controls;
// //   }

// //   isLinear = false;

// //   get allPositionss() {
// //     return (this.form.get('allPositions') as FormArray).controls;
// //   }

// //   onSubmit() {
// //     const employee: Employee = {
// //       ...this.form.value,
// //       startOfWorkDate: new Date(),
// //     };

// //     this._employeeService.addEmployee(employee).subscribe({
// //       next: (data) => console.log(data),
// //       error: (e) => console.error(e),
// //     });
// //   }
// // }
// // // // // import {Component, OnInit} from '@angular/core';
// // // // // import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
// // // // // import {MatInputModule} from '@angular/material/input';
// // // // // import {MatFormFieldModule} from '@angular/material/form-field';
// // // // // import {MatStepperModule} from '@angular/material/stepper';
// // // // // import {MatButtonModule} from '@angular/material/button';
// // // // // import { EmployeeService } from '../../employee.service';
// // // // // import { PositionService } from '../../../position/position.service';
// // // // // import { Position } from '../../../position';
// // // // // import { Observable } from 'rxjs';
// // // // // import { Employee } from '../../../employee';
// // // // // import { Gender } from '../../../gender';

// // // // // /**
// // // // //  * @title Stepper vertical
// // // // //  */
// // // // // @Component({
// // // // //   selector: 'add-employee',
// // // // //   templateUrl: 'add-employee.component.html',
// // // // //   styleUrl: 'add-employee.component.scss',
 
// // // // // })
// // // // // export class AddEmploeeComponent implements OnInit{
// // // // // // New FormGroup for date input
// // // // // positions: Position[] = []; // Array to hold Position objects
// // // // // constructor(private _formBuilder: FormBuilder,
// // // // //     private _employeeService: EmployeeService,
// // // // //     private _positionService: PositionService
// // // // //     ) {
// // // // //       console.log("the positions:"+ this.positions);
// // // // //     this.firstFormGroup = this._formBuilder.group({
// // // // //       firstCtrl: ['', Validators.required]
// // // // //     });
// // // // //     this.secondFormGroup = this._formBuilder.group({
// // // // //       secondCtrl: ['', Validators.required]
// // // // //     });
// // // // //     this.dateFormGroup = this._formBuilder.group({
// // // // //       dateCtrl: [Date, Validators.required] // Add validation for date
// // // // //     });
// // // // //    }
// // // // //    dateFormGroup = this._formBuilder.group({
// // // // //     dateCtrl: [Date, Validators.required] // Add validation for date
// // // // //   });
// // // // //   firstFormGroup = this._formBuilder.group({
// // // // //     firstCtrl: ['', Validators.required],
// // // // //   });
// // // // //   // dateFormGroup: FormGroup;
// // // // //   secondFormGroup = this._formBuilder.group({
// // // // //     secondCtrl: ['', Validators.required],
// // // // //   });
// // // // // ngOnInit(): void {
// // // // //   console.log("the positions:"+ this.positions);

// // // // // this._positionService.getPositions().subscribe({
// // // // //   next: (data) => {
// // // // //     console.log(data);
// // // // //     this.positions = data;
// // // // //   },
// // // // //   error: (e) => console.error(e)
// // // // // });

// // // // // }
// // // // //     isLinear = false;
  
// // // // //     selectedGender!: boolean;
// // // // //     // Additional fields
// // // // //     roles: string[] = ['Manager', 'Teacher', 'Supervisor', 'Secretary']; // Sample roles, you can modify as needed
// // // // //   onSubmit() {
// // // // //     console.log("ghjkl;'")  ;
// // // // //     console.log("select" +this.selectedGender);
// // // // //     console.log(this.roles);
    
// // // // //     console.log(this.firstFormGroup.value);
// // // // //     console.log(this.secondFormGroup.value);
// // // // //     console.log(this.dateFormGroup.value);
// // // // //     console.log("the positions:"+ this.positions);
  
// // // // //     const employee: Employee = {
// // // // //       firstName: this.firstFormGroup.value.firstCtrl ? this.firstFormGroup.value.firstCtrl : '',
// // // // //       lastName: this.secondFormGroup.value.secondCtrl ? this.secondFormGroup.value.secondCtrl : '',
// // // // //       birthdate: this.dateFormGroup.value.dateCtrl instanceof Date ? this.dateFormGroup.value.dateCtrl : new Date(),
// // // // //       identity: '',
// // // // //       startOfWorkDate: new Date(),
// // // // //             positions: this.positions,
// // // // //       gender: new Gender
// // // // //     };
// // // // // console.log(employee);
// // // // //     this._employeeService.addEmployee(employee).subscribe({
// // // // //       next: (data) => {
// // // // //         console.log(data);
// // // // //       },
// // // // //       error: (e) => console.error(e)
// // // // //     });

// // // // //   }
// // // // // }









// // // // // //  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// // // // // //  import { MatDatepickerInputEvent } from '@angular/material/datepicker';
 
// // // // // //  @Component({
// // // // // //    selector: 'app-registration-form',
// // // // // //    templateUrl: './registration-form.component.html',
// // // // // //    styleUrls: ['./registration-form.component.css']
// // // // // //  })
// // // // // //  export class RegistrationFormComponent {
// // // // // //    isLinear = false;
// // // // // //    firstFormGroup: FormGroup;
// // // // // //    secondFormGroup: FormGroup;
// // // // // //    thirdFormGroup: FormGroup;
// // // // // //    fourthFormGroup: FormGroup;
// // // // // //    fifthFormGroup: FormGroup;
// // // // // //    sixthFormGroup: FormGroup;
// // // // // //    selectedGender: number = 0; // Assuming numerical representation for genders
// // // // // //    roles = ['Admin', 'User', 'Editor']; // Replace with your actual roles
 
// // // // // //    constructor(private _formBuilder: FormBuilder) {
// // // // // //      this.firstFormGroup = this._formBuilder.group({
// // // // // //        firstCtrl: ['', Validators.required]
// // // // // //      });
// // // // // //      this.secondFormGroup = this._formBuilder.group({
// // // // // //        secondCtrl: ['', Validators.required]
// // // // // //      });
// // // // // //      this.thirdFormGroup = this._formBuilder.group({
// // // // // //        dob: ['', Validators.required]
// // // // // //      });
// // // // // //      this.fourthFormGroup = this._formBuilder.group({
// // // // // //        gender: [this.selectedGender] // Initial value for gender selection
// // // // // //      });
// // // // // //      this.fifthFormGroup = this._formBuilder.group({
// // // // // //        role: ['', Validators.required],
// // // // // //        isManagementRole: [false],
// // // // // //        dateOfEntry: ['', Validators.required]
// // // // // //      });
// // // // // //      this.sixthFormGroup = this._formBuilder.group({
// // // // // //        // No form controls needed here as it's just a confirmation step
// // // // // //      });
// // // // // //    }
 
// // // // // //    onSubmit() {
// // // // // //      // Handle form submission logic here
// // // // // //      console.log(this.firstFormGroup.value);
// // // // // //      console.log(this.secondFormGroup.value);
// // // // // //      console.log(this.thirdFormGroup.value);
// // // // // //      console.log(this.fourthFormGroup.value);
// // // // // //      console.log(this.fifthFormGroup.value);
// // // // // //    }
 
// // // // // //    chosenDate(event: MatDatepickerInputEvent<any>) {
// // // // // //      // Handle date selection logic here
// // // // // //      this.fifthFormGroup.controls['dateOfEntry'].setValue(event.value);
// // // // // //    }
// // // // // //  }
 

// // // // import { Component, OnInit } from '@angular/core';
// // // // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // // import { MatStepperModule } from '@angular/material/stepper';
// // // // import { MatButtonModule } from '@angular/material/button';
// // // // import { EmployeeService } from '../../employee.service';
// // // // import { PositionService } from '../../../position/position.service';
// // // // import { Observable } from 'rxjs';
// // // // import { Employee } from '../../../employee';
// // // // import { Gender } from '../../../gender';
// // // // import { Position } from '../../../position';

// // // // @Component({
// // // //   selector: 'add-employee',
// // // //   templateUrl: 'add-employee.component.html',
// // // //   styleUrl: 'add-employee.component.scss',
// // // // })
// // // // export class AddEmployeeComponent implements OnInit {
// // // //   positions: Position[] = [];
// // // //   form: FormGroup;

// // // //   constructor(private _formBuilder: FormBuilder,
// // // //               private _employeeService: EmployeeService,
// // // //               private _positionService: PositionService) {
// // // //     this.form = this._formBuilder.group({
// // // //       firstName: ['', Validators.required],
// // // //       lastName: ['', Validators.required],
// // // //       address: ['', Validators.required],

// // // //       birthdate: [new Date(), Validators.required],
// // // //       startOfWorkDate: [new Date(), Validators.required],

// // // //       identity: ['', Validators.required],
// // // //       positions: Position,
// // // //       gender: new Gender(),
// // // //     });
// // // //   }

// // // //   ngOnInit() {
// // // //     this._positionService.getPositions().subscribe({
// // // //       next: (data) => this.positions = data,
// // // //       error: (e) => console.error(e),
// // // //     });
// // // //   }

// // // //   isLinear = false;
// // // //   selectedGender?: boolean;
// // // //   onSubmit() {
// // // //     const employee: Employee = {
// // // //       ...this.form.value,
// // // //       startOfWorkDate: new Date(),
// // // //     };
// // // //     this._employeeService.addEmployee(employee).subscribe({
// // // //       next: (data) => console.log(data),
// // // //       error: (e) => console.error(e),
// // // //     });
// // // //   }
// // // // }
// // // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // import { EmployeeService } from '../../employee.service';
// // // import { PositionService } from '../../../position/position.service';
// // // import { Employee } from '../../../employee';
// // // import { Position } from '../../../position';
// // // import { Gender } from '../../../gender';
// // // import { Component, OnInit } from '@angular/core';
// // // import { Console } from 'console';

// // // @Component({
// // //   selector: 'add-employee',
// // //   templateUrl: 'add-employee.component.html',
// // //   styleUrls: ['add-employee.component.scss'],
// // // })
// // // export class AddEmployeeComponent implements OnInit {
// // //   positions: Position[] = [];
// // //   form: FormGroup;
// // //   selectedPosition: Position | null = null;

// // //   constructor(private _formBuilder: FormBuilder,
// // //               private _employeeService: EmployeeService,
// // //               private _positionService: PositionService) {
// // //     this.form = this._formBuilder.group({
// // //       firstName: ['', Validators.required],
// // //       lastName: ['', Validators.required],
// // //       address: ['', Validators.required],
// // //       startOfWorkDate: [new Date(), Validators.required], 
// // //       birthdate: [new Date(), Validators.required],

// // //       identity: ['', Validators.required],
// // //       positions: [[Position], Validators.required],
// // //       isAdminstrative: [false],
// // //       gender: new Gender(),
// // //     });
// // //   }

// // //   ngOnInit() {
// // //     this._positionService.getPositions().subscribe({
// // //       next: (data) => this.positions = data,
// // //       error: (e) => console.error(e),
// // //     });
// // //   }

// // //   isLinear = false;

// // //   addPosition() {
// // //     if (this.selectedPosition) {
// // //       const positionsControl = this.form.get('positions');
// // //       positionsControl?.patchValue([...positionsControl?.value, this.selectedPosition]);
// // //       this.selectedPosition = null;
// // //     }
// // //   }

// // //   onSubmit() {
// // //     const employee: Employee = {
// // //       ...this.form.value,
// // //     };
// // //     console.log("employee - female::",employee.gender.female);
// // //     console.log("employee - male::",employee.gender.male);
// // // console.log("employee - isAdminstrative::",employee.positions.map(x=>x.isAdminstrative));
// // //     this._employeeService.addEmployee(employee).subscribe({
// // //       next: (data) => console.log(data),
// // //       error: (e) => console.error(e),
// // //     });
// // //   }
// // // }



// // import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { EmployeeService } from '../../employee.service';
// // import { PositionService } from '../../../position/position.service';
// // import { Employee } from '../../../employee';
// // import { Position } from '../../../position';
// // import { Gender } from '../../../gender';
// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'add-employee',
// //   templateUrl: 'add-employee.component.html',
// //   styleUrls: ['add-employee.component.scss'],
// // })
// // export class AddEmployeeComponent implements OnInit {
// //   positions: Position[] = [];
// //   form: FormGroup;
// //   selectedPosition: Position | null = null;

// //   constructor(private _formBuilder: FormBuilder,
// //               private _employeeService: EmployeeService,
// //               private _positionService: PositionService) {
// //     this.form = this._formBuilder.group({
// //       firstName: ['', Validators.required],
// //       lastName: ['', Validators.required],
// //       address: ['', Validators.required],
// //       startOfWorkDate: [new Date(), Validators.required], 
// //       birthdate: [new Date(), Validators.required],
// //       dateOfEntryIntoOffice: [new Date(), Validators.required],
// //       identity: ['', Validators.required],
// //       positions: [[], Validators.required], // Array for selected positions
// //       isAdminstrative: [false], // Flag for administrative role
// //       gender: new Gender(),
// //     });
// //   }ngOnInit() {
// //     this.form = this._formBuilder.group({
// //       firstName: ['', Validators.required],
// //       lastName: ['', Validators.required],
// //       address: ['', Validators.required],
// //       startOfWorkDate: [new Date(), Validators.required], 
// //       birthdate: [new Date(), Validators.required],
// //       identity: ['', Validators.required],
// //       positions: this._formBuilder.array([Position]), // Initialize as an empty array
// //       gender: new Gender(),
// //     });
  
// //     this._positionService.getPositions().subscribe({
// //       next: (data) => {
// //         // Populate the positions array with form groups
// //         data.forEach((position: Position) => {
// //      (this.createPositionFormGroup(position as Position));});
// //       },
// //       error: (e) => console.error(e),
// //     });
// //   }
  
// //   createPositionFormGroup(position: Position) {
// //     this.positions= this._formBuilder.group({
// //       positionName: this._formBuilder.group({
// //         name: [position.positionName.name],
// //         description: [position.positionName.description],
// //         id: [position.positionName.id]
// //       }),
// //       isAdminstrative: [false],
// //       dateOfEntryIntoOffice: [new Date(), Validators.required]
// //     });
// //     this.positions.push(position);
    
// //   }
  
// //   get positionss() {
// //     return this.form.get('positions') as FormArray;
// //   }
// // }  

// import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { EmployeeService } from '../../employee.service';
// import { PositionService } from '../../../position/position.service';
// import { Employee } from '../../../employee';
// import { Position } from '../../../position';
// import { Gender } from '../../../gender';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'add-employee',
//   templateUrl: 'add-employee.component.html',
//   styleUrls: ['add-employee.component.scss'],
// })
// export class AddEmployeeComponent implements OnInit {
//   positions: Position[] = [];
//   form!: FormGroup;
//   selectedPosition: Position | null = null;
//   allPositions:Position[]=[];
//   constructor(private _formBuilder: FormBuilder,
//               private _employeeService: EmployeeService,
//               private _positionService: PositionService) {}

//   ngOnInit() {




//     this.form = this._formBuilder.group({    
//       allPositions: this._formBuilder.array([]), // Initialize as an empty array
// ll:this._formBuilder.array([]),
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       address: ['', Validators.required],
//       startOfWorkDate: [new Date(), Validators.required], 
//       birthdate: [new Date(), Validators.required],
//       identity: ['', Validators.required],
//       positions: this._formBuilder.array([]), // Initialize as an empty array
//       gender: new Gender(),
//     });
  
//     this._positionService.getPositions().subscribe({
//       next: (data) => {
//         // Populate the positions array with form groups
//         data.forEach((position: Position) => {
//           this.addPositionFormGroup(position);
//         });
//       },
//       error: (e) => console.error(e),
//     });
//   }
  
//   addPositionFormGroup(position: Position) {
//     const positionFormGroup = this._formBuilder.group({
//       positionName: this._formBuilder.group({
//         name: [position.positionName.name],
//         description: [position.positionName.description],
//         id: [position.positionName.id]
//       }),
//       isAdminstrative: [false],
//       dateOfEntryIntoOffice: [new Date(), Validators.required]
//     });
//     (this.form.get('allPositions') as FormArray).push(positionFormGroup);
//     (this.form.get('positions') as FormArray).push(positionFormGroup);

//     console.log("pay attation::",positionFormGroup);
//     // console.log("this.form.get('positions')::",this.form.get('positions'));
//     // console.log("this.form.get('positions')::",this.form.get('positions') as FormArray);
//   }
  






//   // addPositionToEmployee() {
//   //   const selectedPositions = this.form.get('allPositions')?.value;
//   //   const positionsArray = this.form.get('positions') as FormArray;
  
//   //   selectedPositions.forEach((position: Position) => {
//   //     const positionFormGroup = this._formBuilder.group({
//   //       positionName: this._formBuilder.group({
//   //         name: [position.positionName.name],
//   //         description: [position.positionName.description],
//   //         id: [position.positionName.id]
//   //       }),
//   //       isAdminstrative: [false],
//   //       dateOfEntryIntoOffice: [new Date(), Validators.required]
//   //     });
//   //     positionsArray.push(positionFormGroup);
//   //   });
//   // }
  


  
//   checkIfAdministrative(positionFormGroup: FormGroup) {
//     return positionFormGroup.get('isAdminstrative')?.value;
//   }
  
//   get positionForms() {
//     return (this.form.get('positions') as FormArray).controls;
//   }isLinear = false;

//   get allPositionss() {
//     return (this.form.get('allPositions') as FormArray).controls;
//   }


//   onSubmit() {
//     const employee: Employee = {
//       ...this.form.value,
//       startOfWorkDate: new Date(),
//     };

//     this._employeeService.addEmployee(employee).subscribe({
//       next: (data) => console.log(data),
//       error: (e) => console.error(e),
//     });
//     console.log("ll",this.form.get('ll')?.value);
//     console.log("tril-allemployees",this.form.get('a')?.value);
//     console.log("pppppppppositions:",this.form.get('positions')?.value);
//     console.log("employeeeeeeeeeee",employee.positions.map(x=>x.positionName.name));
// console.log("selected",this.selectedPosition);
//     console.log("employee - dateOfEntryIntoOffice::",employee.positions.map(x=>x.dateOfEntryIntoOffice));
//   }
//   }
  

