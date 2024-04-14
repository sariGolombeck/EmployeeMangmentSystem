// // // // // // // // // import { Component, OnInit } from '@angular/core';
// // // // // // // // // import { MatDialogRef } from '@angular/material/dialog';

// // // // // // // // // import { Position } from '../../../position';
// // // // // // // // // import { PositionService } from '../../../position/position.service';
// // // // // // // // // @Component({
// // // // // // // // //   selector: 'app-position-selection',
// // // // // // // // //   templateUrl: './position-selection.component.html',
// // // // // // // // //   styleUrls: ['./position-selection.component.css']
// // // // // // // // // })
// // // // // // // // // export class PositionSelectionComponent implements OnInit {
// // // // // // // // //   positions: Position[] = [];

// // // // // // // // //   constructor(
// // // // // // // // //     private dialogRef: MatDialogRef<PositionSelectionComponent>,
// // // // // // // // //     private positionService: PositionService
// // // // // // // // //   ) {}

// // // // // // // // //   ngOnInit(): void {
// // // // // // // // //     this.positionService.getPositions().subscribe((positions: Position[]) => {
// // // // // // // // //       this.positions = positions;
// // // // // // // // //     });
// // // // // // // // //   }

// // // // // // // // //   selectPosition(position: Position) {
// // // // // // // // //     this.dialogRef.close(position);
// // // // // // // // //   }
// // // // // // // // // }
// // // // // // // // import { Component, Inject } from '@angular/core';
// // // // // // // // import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// // // // // // // // import { Position } from '../../../position';
// // // // // // // // @Component({
// // // // // // // //   selector: 'app-position-selection',
// // // // // // // //   templateUrl: './position-selection.component.html',
// // // // // // // //   styleUrls: ['./position-selection.component.css']
// // // // // // // // })
// // // // // // // // export class PositionSelectionComponent {
// // // // // // // //   selectedPosition: Position | null = null;

// // // // // // // //   constructor(
// // // // // // // //     public dialogRef: MatDialogRef<PositionSelectionComponent>,
// // // // // // // //     @Inject(MAT_DIALOG_DATA) public data: { employeeId: number, positions: Position[] }
// // // // // // // //   ) {}

// // // // // // // //   onNoClick(): void {
// // // // // // // //     this.dialogRef.close();
// // // // // // // //   }

// // // // // // // //   onSelectPosition(position: Position): void {
// // // // // // // //     this.selectedPosition = position;
// // // // // // // //   }

// // // // // // // //   onConfirm(): void {
// // // // // // // //     if (this.selectedPosition) {
// // // // // // // //       this.dialogRef.close(this.selectedPosition);
// // // // // // // //     }
// // // // // // // //   }
// // // // // // // // }
// // // // // // // import { Component, Inject } from '@angular/core';
// // // // // // // import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// // // // // // // import { Position } from '../../../position';
// // // // // // // @Component({
// // // // // // //   selector: 'app-position-selection',
// // // // // // //   templateUrl: './position-selection.component.html',
// // // // // // //   styleUrls: ['./position-selection.component.scss']
// // // // // // // })
// // // // // // // export class PositionSelectionComponent {
// // // // // // //   selectedPosition: Position | null = null;

// // // // // // //   constructor(
// // // // // // //     public dialogRef: MatDialogRef<PositionSelectionComponent>,
// // // // // // //     @Inject(MAT_DIALOG_DATA) public data: { employeeId: number, positions: Position[] }
// // // // // // //   ) {console.log("datale" ,this.data) }

// // // // // // //   onNoClick(): void {
// // // // // // //     this.dialogRef.close();
// // // // // // //   }

// // // // // // //   onConfirm(): void {
// // // // // // //     if (this.selectedPosition) {
// // // // // // //       this.dialogRef.close(this.selectedPosition);
// // // // // // //     }
// // // // // // //   }
// // // // // // // }
// // // // // // import { Component, Inject } from '@angular/core';
// // // // // // import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// // // // // // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // // // // import { Position } from '../../../position';
// // // // // // import { PositionEmployeeDto } from '../../../position-employee-dto';
// // // // // // import { PositionEmployeePostModel } from '../../../position-employee-post-model';
// // // // // // @Component({
// // // // // //   selector: 'app-position-selection',
// // // // // //   templateUrl: './position-selection.component.html',
// // // // // //   styleUrls: ['./position-selection.component.scss']
// // // // // // })
// // // // // // export class PositionSelectionComponent {
// // // // // //   positionForms: FormGroup[] = [];
// // // // // //   positionEmployeeDtos: PositionEmployeePostModel[] = [];

// // // // // //   constructor(
// // // // // //     private formBuilder: FormBuilder,
// // // // // //     public dialogRef: MatDialogRef<PositionSelectionComponent>,
// // // // // //     @Inject(MAT_DIALOG_DATA) public data: { employeeId: number, positions: Position[] }
// // // // // //   ) { }

// // // // // //   createPositionForm(position: Position): FormGroup {
// // // // // //     return this.formBuilder.group({
// // // // // //       employeeId: [this.data.employeeId],
// // // // // //       positionId: [position.id],
// // // // // //       entryDateIntoOffice: ['', Validators.required],
// // // // // //       ismanagerial: [false] // Assuming it starts as false
// // // // // //     });
// // // // // //   }

// // // // // //   onNoClick(): void {
// // // // // //     this.dialogRef.close();
// // // // // //   }

// // // // // //   onPositionSelect(position: Position): void {
// // // // // //     const positionForm = this.createPositionForm(position);
// // // // // //     this.positionForms.push(positionForm);
// // // // // //   }

// // // // // //   onConfirm(): void {
// // // // // //     this.positionEmployeeDtos = this.positionForms.map(form => form.value);
// // // // // //     this.dialogRef.close(this.positionEmployeeDtos);
// // // // // //   }
// // // // // // }
// // // // // import { Component, Inject } from '@angular/core';
// // // // // import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// // // // // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // // // import { Position } from '../../../position';
// // // // // import { PositionEmployeePostModel } from '../../../position-employee-post-model';
// // // // // @Component({
// // // // //   selector: 'app-position-selection',
// // // // //   templateUrl: './position-selection.component.html',
// // // // //   styleUrls: ['./position-selection.component.scss']
// // // // // })
// // // // // export class PositionSelectionComponent {
// // // // //   positionForms: FormGroup[] = [];
// // // // //   positionEmployeeDtos: any[] = [];

// // // // //   constructor(
// // // // //     private formBuilder: FormBuilder,
// // // // //     public dialogRef: MatDialogRef<PositionSelectionComponent>,
// // // // //     @Inject(MAT_DIALOG_DATA) public data: { employeeId: number, positions: Position[] }
// // // // //   ) { }
// // // // //   // updateEntryDateIntoOffice(index: number, selectedDate: Date) {
// // // // //   //   const positionEmployeeForm = this.positionForms.at(index) as FormGroup;
// // // // //   //   positionEmployeeForm.patchValue({ entryDateIntoOffice: selectedDate });
// // // // //   //   console.log("allform",positionEmployeeForm)
// // // // //   // }
// // // // //   createPositionForm(position: PositionEmployeePostModel): FormGroup {
// // // // //     return this.formBuilder.group({
// // // // //       employeeId: [this.data.employeeId],
// // // // //       positionId: [position.positionId],
// // // // //       entryDateIntoOffice: ['', Validators.required],
// // // // //       ismanagerial: [false] // Assuming it starts as false
// // // // //     });
// // // // //   }

// // // // //   onNoClick(): void {
// // // // //     this.dialogRef.close();
// // // // //   }

// // // // //   onPositionSelect(selectedPosition: PositionEmployeePostModel): void {
// // // // //     // Remove previous form if exists
// // // // //     this.positionForms.pop();
// // // // //     // Create new form for selected position
// // // // //     const positionForm = this.createPositionForm(selectedPosition);
// // // // //     this.positionForms.push(positionForm);
// // // // //   }

// // // // //   onConfirm(): void {
// // // // //     this.positionEmployeeDtos = this.positionForms.map(form => form.value);
// // // // //     this.dialogRef.close(this.positionEmployeeDtos);
// // // // //   }
// // // // // }


// // // // import { Component, Inject } from '@angular/core';
// // // // import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// // // // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // // import { Position } from '../../../position';
// // // // import { PositionEmployeeDto } from '../../../position-employee-dto';
// // // // import { PositionEmployeePostModel } from '../../../position-employee-post-model';
// // // // @Component({
// // // //   selector: 'app-position-selection',
// // // //   templateUrl: './position-selection.component.html',
// // // //   styleUrls: ['./position-selection.component.scss']
// // // // })
// // // // export class PositionSelectionComponent {
// // // //   positionForms: FormGroup[] = [];
// // // //   positionEmployeeDtos: PositionEmployeeDto[] = [];

// // // //   constructor(
// // // //     private formBuilder: FormBuilder,
// // // //     public dialogRef: MatDialogRef<PositionSelectionComponent>,
// // // //     @Inject(MAT_DIALOG_DATA) public data: { employeeId: number, positions: Position[] }
// // // //   ) {}

// // // //   createPositionForm(position: Position): FormGroup {
// // // //     return this.formBuilder.group({
// // // //       employeeId: [this.data.employeeId],
// // // //       positionId: [position.id],
// // // //       entryDateIntoOffice: ['', Validators.required],
// // // //       ismanagerial: [false] // Assuming it starts as false
// // // //     });
// // // //   }

// // // //   onNoClick(): void {
// // // //     this.dialogRef.close();
// // // //   }

// // // //   onPositionSelect(selectedPosition: Position): void {
// // // //     // Clear previous forms
// // // //     this.positionForms = [];
// // // //     // Create form for selected position
// // // //     const positionForm = this.createPositionForm(selectedPosition);
// // // //     this.positionForms.push(positionForm);
// // // //   }

// // // //   onConfirm(): void {
// // // //     this.positionEmployeeDtos = this.positionForms.map(form => form.value);
// // // //     this.dialogRef.close(this.positionEmployeeDtos);
// // // //   }
// // // // }
// // // import { Component, Inject } from '@angular/core';
// // // import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// // // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // import { Position } from '../../../position';
// // // import { PositionEmployeeDto } from '../../../position-employee-dto';
// // // @Component({
// // //   selector: 'app-position-selection',
// // //   templateUrl: './position-selection.component.html',
// // //   styleUrls: ['./position-selection.component.scss']
// // // })
// // // export class PositionSelectionComponent {
// // //   positionForms: FormGroup[] = [];
// // //   positionEmployeeDtos: PositionEmployeeDto[] = [];

// // //   constructor(
// // //     private formBuilder: FormBuilder,
// // //     public dialogRef: MatDialogRef<PositionSelectionComponent>,
// // //     @Inject(MAT_DIALOG_DATA) public data: { employeeId: number, positions: Position[] }
// // //   ) {}

// // //   createPositionForm(position: Position): FormGroup {
// // //     return this.formBuilder.group({
// // //       employeeId: [this.data.employeeId],
// // //       positionId: [position.id],
// // //       entryDateIntoOffice: ['', Validators.required],
// // //       ismanagerial: [false] // Assuming it starts as false
// // //     });
// // //   }

// // //   onNoClick(): void {
// // //     this.dialogRef.close();
// // //   }

// // //   onPositionSelect(selectedPositions: Position[]): void {
// // //     // Clear previous forms
// // //     this.positionForms = [];
// // //     // Create forms for selected positions
// // //     selectedPositions.forEach(position => {
// // //       const positionForm = this.createPositionForm(position);
// // //       this.positionForms.push(positionForm);
// // //     });
// // //   }

// // //   onConfirm(): void {
// // //     this.positionEmployeeDtos = this.positionForms.map(form => form.value);
// // //     this.dialogRef.close(this.positionEmployeeDtos);
// // //   }
// // // }

// // import { Component, Inject } from '@angular/core';
// // import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { Position } from '../../../position';
// // import { PositionEmployeeDto } from '../../../position-employee-dto';

// // @Component({
// //   selector: 'app-position-selection',
// //   templateUrl: './position-selection.component.html',
// //   styleUrls: ['./position-selection.component.scss']
// // })
// // export class PositionSelectionComponent {
// //   positionForms: FormGroup[] = [];
// //   positionEmployeeDtos: PositionEmployeeDto[] = [];

// //   constructor(
// //     private formBuilder: FormBuilder,
// //     public dialogRef: MatDialogRef<PositionSelectionComponent>,
// //     @Inject(MAT_DIALOG_DATA) public data: { employeeId: number, positions: Position[] }
// //   ) { }

// //   createPositionForm(pId:number): FormGroup {
// //     return this.formBuilder.group({
// //       employeeId: [this.data.employeeId],
// //       positionId: [pId],
// //       entryDateIntoOffice: ['', Validators.required],
// //       ismanagerial: [false] // Assum ing it starts as false
// //     });
// //   }
// //   gg(position: Position) {

// //     console.log("pay attation",this.data.positions.map(x=>x.description))
// //     var tmp = this.data.positions;
// //     this.data.positions = tmp.filter(x => x.id != position.id);
// //     if (tmp.length === this.data.positions.length) {
// //       console.log("enterd: tmp", tmp.map(x => x), "mypositions", this.data.positions.map(x => x.name));
// //       this.createPositionForm(position.id);
// //       this.data.positions.push(position)
// //     }
// //     console.log("");
// //   }
// //   onNoClick(): void {
// //     this.dialogRef.close();
// //   }

// //   onPositionSelect(selectedPositions: PositionEmployeeDto[]): void {
// //     // Create forms for selected positions
// //     selectedPositions = selectedPositions.filter((position, index, self) =>
// //       index === self.findIndex((p) => (
// //         p.positionId === position.positionId
// //       ))
// //     );
// //         selectedPositions.forEach(position => {
// //       const positionForm = this.createPositionForm(position.positionId);
// //       this.positionForms.push(positionForm);
// //     });
// //   }

// //   onConfirm(): void {
// //     this.positionEmployeeDtos = this.positionForms.map(form => form.value);
// //     this.dialogRef.close(this.positionEmployeeDtos);
// //   }
// // }

// import { Component, Inject } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { Position } from '../../../position';
// import { PositionEmployeeDto } from '../../../position-employee-dto';

// @Component({
//   selector: 'app-position-selection',
//   templateUrl: './position-selection.component.html',
//   styleUrls: ['./position-selection.component.scss']
// })
// export class PositionSelectionComponent {
//   positionForms: FormGroup[] = [];
//   positionEmployeeDtos: PositionEmployeeDto[] = [];

//   constructor(
//     private formBuilder: FormBuilder,
//     public dialogRef: MatDialogRef<PositionSelectionComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: { employeeId: number, positions: Position[] }
//   ) { }

//   createPositionForm(position: Position): FormGroup {
//     return this.formBuilder.group({
//       employeeId: [this.data.employeeId],
//       positionId: [position.id],
//       entryDateIntoOffice: ['', Validators.required],
//       ismanagerial: [false] // Assuming it starts as false
//     });
//   }

//   removePositionForm(index: number): void {
//     this.positionForms.splice(index, 1);
//   }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

//   onPositionSelect(selectedPosition: Position): void {
//     const existingIndex = this.positionForms.findIndex(form => form.value.positionId === selectedPosition.id);
//     if (existingIndex !== -1) {
//       console.log("yessssssssssssss cut me!!")
//       this.removePositionForm(existingIndex);
//       return;
//     }

//     const positionForm = this.createPositionForm(selectedPosition);
//     this.positionForms.push(positionForm);
//   }

//   onConfirm(): void {
//     this.positionEmployeeDtos = this.positionForms.map(form => form.value);
//     this.dialogRef.close(this.positionEmployeeDtos);
//   }
// }
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Position } from '../../../position/models/position';
import { PositionEmployeeDto } from '../../models/position-employee-dto';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../employee.service';
import { validateEntryDate } from '../../../validtaionTest/validation';
@Component({
  selector: 'app-position-selection',
  templateUrl: './position-selection.component.html',
  styleUrls: ['./position-selection.component.scss']
})
export class PositionSelectionComponent implements OnInit {
  positionForms: FormGroup[] = [];
  positionEmployeeDtos: PositionEmployeeDto[] = [];
  index: any;
  employee!: Employee
  constructor(
    private formBuilder: FormBuilder,
    private _employeeService: EmployeeService,
    public dialogRef: MatDialogRef<PositionSelectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { employeeId: number, positions: Position[] }
  ) { }
  ngOnInit(): void {
    this._employeeService.getEmployeeById(this.data.employeeId).subscribe({
      next: (data) => {
        this.employee = data
        console.log("data of employee", data)
      },
      error: (e) => {
        console.error(e)
      }
    })
  }

  createPositionForm(positionId: number): FormGroup {
    return this.formBuilder.group({
      employeeId: [this.data.employeeId],
      positionId: [positionId],
      entryDateIntoOffice: [Date, [Validators.required, (control: AbstractControl) => validateEntryDate(control, this.employee.startOfWorkDate)]],
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
      console.log("the contentd", this.positionEmployeeDtos)
      this.dialogRef.close(this.positionEmployeeDtos);

    }
    return;
  }
}
