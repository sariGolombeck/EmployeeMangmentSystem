// // // // positions-employee-table.component.ts

// // // import { Component, OnInit, ViewChild } from '@angular/core';
// // // import { MatPaginator } from '@angular/material/paginator';
// // // import { MatSort } from '@angular/material/sort';
// // // import { MatTableDataSource } from '@angular/material/table';
// // // import { MatDialog } from '@angular/material/dialog';
// // // import { MatSnackBar } from '@angular/material/snack-bar'; // Add MatSnackBar
// // // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // import { Observable } from 'rxjs';
// // // import { EmployeeService } from '../../employee.service';
// // // import { Employee } from '../../../employee';
// // // import { PositionEmployeePostModel } from '../../../position-employee-post-model';

// // // import { EditEmployeePositionComponent } from '../edit-employee-position/edit-employee-position.component';
// // // import { PositionEmployeeDto } from '../../../position-employee-dto';
// // // import { CanActivate, ActivatedRouteSnapshot, ActivatedRoute,RouterStateSnapshot, UrlTree, Router } from '@angular/router';

// // // @Component({
// // //   selector: 'positions-employee-table',
// // //   styleUrls: ['positions-employee-table.component.scss'],
// // //   templateUrl: 'positions-employee-table.component.html',
// // // })
// // // export class PositionEmployeeTableComponent implements OnInit {
// // //   displayedColumns: string[] = ['positionId', 'entryDateIntoOffice', 'ismanagerial', 'actions']; // Update column name
// // //   dataSource: MatTableDataSource<PositionEmployeeDto>;
// // //   peForms: FormGroup[] = [];
// // // employeeId!:number
// // //   @ViewChild(MatPaginator) paginator!: MatPaginator;
// // //   @ViewChild(MatSort) sort!: MatSort;

// // //   constructor(
// // //     private _employeeService: EmployeeService,
// // //     private _formBuilder: FormBuilder,
// // //     public dialog: MatDialog,
// // //     private _snackBar: MatSnackBar,
// // //     private route: ActivatedRoute
// // //      // Inject MatSnackBar
// // //   ) {
// // //     this.dataSource = new MatTableDataSource<PositionEmployeeDto>([]);
// // //   }

// // //   ngOnInit(): void {
// // //     this.route.params.subscribe(params => {
// // //       this.employeeId = +params['id'];
// // //     });

// // //     this._employeeService.getEmployeePositions(this.employeeId).subscribe({
// // //       next: (data) => {
// // //         data.forEach((pee: PositionEmployeeDto) => {
// // //           this.addPositionEmployeeForm(pee);
// // //         });
// // //         this.dataSource.data = data;
// // //       },
// // //       error: (err) => {
// // //         console.error('Error fetching employee:', err);
// // //       }
// // //     });
// // //   }

// // //   addPositionEmployeeForm(pee: PositionEmployeeDto) {
// // //     const positionEmployee = this._formBuilder.group({
// // //       employeeId: [pee.employeeId, Validators.required],

// // //       positionId: [pee.positionId, Validators.required],
// // //       entryDateIntoOffice: [pee.entryDateIntoOffice, Validators.required],
// // //       ismanagerial: [pee.ismanagerial]
// // //     });
// // //     this.peForms.push(positionEmployee);
// // //   }

// // //   editPosition(row: PositionEmployeeDto) {
// // //     const dialogRef = this.dialog.open(EditEmployeePositionComponent, {
// // //       width: '250px',
// // //       data: row
// // //     });

// // //     dialogRef.afterClosed().subscribe(result => {
// // //       if (result) {
// // //         this.updatePosition(result);
// // //       }
// // //     });
// // //   }

// // //   deletePosition(row: PositionEmployeeDto) {
// // //     const confirmDelete = confirm('Are you sure you want to delete this position?');
// // //     if (confirmDelete) {
// // //       this._employeeService.deletePositionEmployee(row.employeeId,row.positionId).subscribe({
// // //         next: () => {
// // //           this.dataSource.data = this.dataSource.data.filter(item => item !== row);
// // //           this._snackBar.open('Position deleted successfully', 'Close', {
// // //             duration: 3000,
// // //             horizontalPosition: 'end',
// // //             verticalPosition: 'top'
// // //           });
// // //         },
// // //         error: (error: Error) => {
// // //           console.error(`Failed to delete position: ${error.message}`);
// // //           this._snackBar.open('Failed to delete position', 'Close', {
// // //             duration: 3000,
// // //             horizontalPosition: 'end',
// // //             verticalPosition: 'top'
// // //           });
// // //         }
// // //       });
// // //     }
// // //   }

// // //   ngAfterViewInit() {
// // //     this.dataSource.paginator = this.paginator;
// // //     this.dataSource.sort = this.sort;
// // //   }

// // //   applyFilter(event: Event) {
// // //     const filterValue = (event.target as HTMLInputElement).value;
// // //     this.dataSource.filter = filterValue.trim().toLowerCase();
// // //     if (this.dataSource.paginator) {
// // //       this.dataSource.paginator.firstPage();
// // //     }
// // //   }

// // //   updatePosition(data: any) {
// // //     const ee: PositionEmployeeDto = data as PositionEmployeeDto;
// // //     ee.ismanagerial = true;
// // //     ee.employeeId = 296;
// // //     this._employeeService.updatePositionEmployee(296, ee.positionId, ee).subscribe({
// // //       next: (responseData: any) => {
// // //         console.log(`Successfully updated position employee with ID ${ee.positionId} for employee with ID ${ee.employeeId}`);
// // //       },
// // //       error: (error: Error) => {
// // //         console.error(`Failed to update position employee with ID ${ee.positionId} for employee with ID ${ee.employeeId}: ${error.message}`);
// // //       }
// // //     });
// // //   }
// // // }
// // import { Component, OnInit, ViewChild } from '@angular/core';
// // import { MatPaginator } from '@angular/material/paginator';
// // import { MatSort } from '@angular/material/sort';
// // import { MatTableDataSource } from '@angular/material/table';
// // import { MatDialog } from '@angular/material/dialog';
// // import { MatSnackBar } from '@angular/material/snack-bar';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { Observable } from 'rxjs';
// // import { EmployeeService } from '../../employee.service';
// // import { Employee } from '../../../employee';
// // import { Position } from '../../../position';
// // import { PositionService } from '../../../position/position.service';
// // import { PositionEmployeePostModel } from '../../../position-employee-post-model';

// // import { EditEmployeePositionComponent } from '../edit-employee-position/edit-employee-position.component';
// // import { PositionEmployeeDto } from '../../../position-employee-dto';
// // import { CanActivate, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

// // @Component({
// //  selector: 'positions-employee-table',
// //  styleUrls: ['positions-employee-table.component.scss'],
// //  templateUrl: 'positions-employee-table.component.html',
// // })
// // export class PositionEmployeeTableComponent implements OnInit {
// //  displayedColumns: string[] = ['positionId', 'entryDateIntoOffice', 'ismanagerial', 'actions'];
// //  dataSource: MatTableDataSource<PositionEmployeeDto>;
// //  peForms: FormGroup[] = [];
// //  employeeId!: number;
// //  positions: Position[] = [];

// //  @ViewChild(MatPaginator) paginator!: MatPaginator;
// //  @ViewChild(MatSort) sort!: MatSort;

// //  constructor(
// //   private _employeeService: EmployeeService,
// //   private _positionService: PositionService,
// //   private _formBuilder: FormBuilder,
// //   public dialog: MatDialog,
// //   private _snackBar: MatSnackBar,
// //   private route: ActivatedRoute
// //  ) {
// //   this.dataSource = new MatTableDataSource<PositionEmployeeDto>([]);
// //  }

// //  ngOnInit(): void {
// //   this.route.params.subscribe(params => {
// //    this.employeeId = +params['id'];
// //   });

// //   this.loadEmployeePositions();

// //   this._positionService.getPositions().subscribe(positions => {
// //     this.positions = positions;
// //   });
// //  }

// //  loadEmployeePositions() {
// //   this._employeeService.getEmployeePositions(this.employeeId).subscribe({
// //    next: (data) => {
// //     data.forEach((pee: PositionEmployeeDto) => {
// //      this.addPositionEmployeeForm(pee);
// //     });
// //     this.dataSource.data = data;
// //    },
// //    error: (err) => {
// //     console.error('Error fetching employee:', err);
// //    }
// //   });
// //  }

// //  addPositionEmployeeForm(pee: PositionEmployeeDto) {
// //   const positionEmployee = this._formBuilder.group({
// //    employeeId: [pee.employeeId, Validators.required],
// //    positionId: [pee.positionId, Validators.required],
// //    entryDateIntoOffice: [pee.entryDateIntoOffice, Validators.required],
// //    ismanagerial: [pee.ismanagerial]
// //   });
// //   this.peForms.push(positionEmployee);
// //  }

// //  openAddPositionDialog(): void {
// //   const availablePositions = this.positions.filter(pos => !this.peForms.some(form => form.value.positionId === pos.id));

// //   const dialogRef = this.dialog.open(EditEmployeePositionComponent, {
// //    width: '250px',
// //    data: { availablePositions: availablePositions }
// //   });

// //   dialogRef.afterClosed().subscribe(result => {
// //    if (result) {
// //     // Handle adding new position logic here
// //    }
// //   });
// //  }

// //  editPosition(row: PositionEmployeeDto) {
// //   const dialogRef = this.dialog.open(EditEmployeePositionComponent, {
// //    width: '250px',
// //    data: row
// //   });

// //   dialogRef.afterClosed().subscribe(result => {
// //    if (result) {
// //     this.updatePosition(result);
// //    }
// //   });
// //  }

// //  deletePosition(row: PositionEmployeeDto) {
// //   const confirmDelete = confirm('Are you sure you want to delete this position?');
// //   if (confirmDelete) {
// //    this._employeeService.deletePositionEmployee(row.employeeId,row.positionId).subscribe({
// //     next: () => {
// //      this.dataSource.data = this.dataSource.data.filter(item => item !== row);
// //      this._snackBar.open('Position deleted successfully', 'Close', {
// //       duration: 3000,
// //       horizontalPosition: 'end',
// //       verticalPosition: 'top'
// //      });
// //     },
// //     error: (error: Error) => {
// //      console.error(`Failed to delete position: ${error.message}`);
// //      this._snackBar.open('Failed to delete position', 'Close', {
// //       duration: 3000,
// //       horizontalPosition: 'end',
// //       verticalPosition: 'top'
// //      });
// //     }
// //    });
// //   }
// //  }

// //  ngAfterViewInit() {
// //   this.dataSource.paginator = this.paginator;
// //   this.dataSource.sort = this.sort;
// //  }

// //  applyFilter(event: Event) {
// //   const filterValue = (event.target as HTMLInputElement).value;
// //   this.dataSource.filter = filterValue.trim().toLowerCase();
// //   if (this.dataSource.paginator) {
// //    this.dataSource.paginator.firstPage();
// //   }
// //  }

// //  updatePosition(data: any) {
// //   const ee: PositionEmployeeDto = data as PositionEmployeeDto;
// //   ee.ismanagerial = true;
// //   ee.employeeId = 296;
// //   this._employeeService.updatePositionEmployee(296, ee.positionId, ee).subscribe({
// //    next: (responseData: any) => {
// //     console.log(`Successfully updated position employee with ID ${ee.positionId} for employee with ID ${ee.employeeId}`);
// //    },
// //    error: (error: Error) => {
// //     console.error(`Failed to update position employee with ID ${ee.positionId} for employee with ID ${ee.employeeId}: ${error.message}`);
// //    }
// //   });
// //  }
// // }
// // positions-employee-table.component.ts
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatDialog } from '@angular/material/dialog';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { EmployeeService } from '../../employee.service';
// import { PositionEmployeeDto } from '../../../position-employee-dto';
// import { EditEmployeePositionComponent } from '../edit-employee-position/edit-employee-position.component';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'positions-employee-table',
//   styleUrls: ['positions-employee-table.component.scss'],
//   templateUrl: 'positions-employee-table.component.html',
// })
// export class PositionEmployeeTableComponent implements OnInit {
//   displayedColumns: string[] = ['positionId', 'entryDateIntoOffice', 'ismanagerial', 'actions'];
//   dataSource: MatTableDataSource<PositionEmployeeDto>;
//   peForms: FormGroup[] = [];
//   employeeId!: number;

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   constructor(
//     private _employeeService: EmployeeService,
//     private _formBuilder: FormBuilder,
//     public dialog: MatDialog,
//     private _snackBar: MatSnackBar,
//     private route: ActivatedRoute
//   ) {
//     this.dataSource = new MatTableDataSource<PositionEmployeeDto>([]);
//   }

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.employeeId = +params['id'];
//     });

//     this._employeeService.getEmployeePositions(this.employeeId).subscribe({
//       next: (data) => {
//         data.forEach((pee: PositionEmployeeDto) => {
//           this.addPositionEmployeeForm(pee);
//         });
//         this.dataSource.data = data;
//       },
//       error: (err) => {
//         console.error('שגיאה בהבאת עובד:', err);
//       }
//     });
//   }

//   addPositionEmployeeForm(pee: PositionEmployeeDto) {
//     const positionEmployee = this._formBuilder.group({
//       EmployeeId: [pee.employeeId, Validators.required],
//       positionId: [pee.positionId, Validators.required],
//       entryDateIntoOffice: [pee.entryDateIntoOffice, Validators.required],
//       ismanagerial: [pee.ismanagerial]
//     });
//     this.peForms.push(positionEmployee);
//   }

//   openAddPositionDialog(): void {
//     const dialogRef = this.dialog.open(EditEmployeePositionComponent, {
//       width: '250px',
//       data: { employeeId: this.employeeId }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         // Handle adding new logic of position here
//       }
//     });
//   }

//   editPosition(row: PositionEmployeeDto) {
//     const dialogRef = this.dialog.open(EditEmployeePositionComponent, {
//       width: '250px',
//       data: row
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.updatePosition(result);
//       }
//     });
//   }

//   deletePosition(row: PositionEmployeeDto) {
//     const confirmDelete = confirm('האם אתה בטוח שברצונך למחוק את התפקיד הזה?');
//     if (confirmDelete) {
//       this._employeeService.deletePositionEmployee(row.employeeId, row.positionId).subscribe({
//         next: () => {
//           this.dataSource.data = this.dataSource.data.filter(item => item !== row);
//           this._snackBar.open('מיקום נמחק בהצלחה', 'סגור', {
//             duration: 3000,
//             horizontalPosition: 'end',
//             verticalPosition: 'top'
//           });
//         },
//         error: (error: Error) => {
//           console.error(`מחיקת עמדה נכשלה:${error.message}`);
//           this._snackBar.open('נכשל במחיקת מיקום', 'סגור', {
//             duration: 3000,
//             horizontalPosition: 'end',
//             verticalPosition: 'top'
//           });
//         }
//       });
//     }
//   }

//   updatePosition(updatedPosition: PositionEmployeeDto) {
//     const index = this.dataSource.data.findIndex(x => x.positionId === updatedPosition.positionId);
//     if (index > -1) {
//       this.dataSource.data[index] = updatedPosition;
//       this.dataSource._updateChangeSubscription();
//     }
//   }
// }
// // // // positions-employee-table.component.ts

// // // import { Component, OnInit, ViewChild } from '@angular/core';
// // // import { MatPaginator } from '@angular/material/paginator';
// // // import { MatSort } from '@angular/material/sort';
// // // import { MatTableDataSource } from '@angular/material/table';
// // // import { MatDialog } from '@angular/material/dialog';
// // // import { MatSnackBar } from '@angular/material/snack-bar'; // Add MatSnackBar
// // // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // import { Observable } from 'rxjs';
// // // import { EmployeeService } from '../../employee.service';
// // // import { Employee } from '../../../employee';
// // // import { PositionEmployeePostModel } from '../../../position-employee-post-model';

// // // import { EditEmployeePositionComponent } from '../edit-employee-position/edit-employee-position.component';
// // // import { PositionEmployeeDto } from '../../../position-employee-dto';
// // // import { CanActivate, ActivatedRouteSnapshot, ActivatedRoute,RouterStateSnapshot, UrlTree, Router } from '@angular/router';

// // // @Component({
// // //   selector: 'positions-employee-table',
// // //   styleUrls: ['positions-employee-table.component.scss'],
// // //   templateUrl: 'positions-employee-table.component.html',
// // // })
// // // export class PositionEmployeeTableComponent implements OnInit {
// // //   displayedColumns: string[] = ['positionId', 'entryDateIntoOffice', 'ismanagerial', 'actions']; // Update column name
// // //   dataSource: MatTableDataSource<PositionEmployeeDto>;
// // //   peForms: FormGroup[] = [];
// // // employeeId!:number
// // //   @ViewChild(MatPaginator) paginator!: MatPaginator;
// // //   @ViewChild(MatSort) sort!: MatSort;

// // //   constructor(
// // //     private _employeeService: EmployeeService,
// // //     private _formBuilder: FormBuilder,
// // //     public dialog: MatDialog,
// // //     private _snackBar: MatSnackBar,
// // //     private route: ActivatedRoute
// // //      // Inject MatSnackBar
// // //   ) {
// // //     this.dataSource = new MatTableDataSource<PositionEmployeeDto>([]);
// // //   }

// // //   ngOnInit(): void {
// // //     this.route.params.subscribe(params => {
// // //       this.employeeId = +params['id'];
// // //     });

// // //     this._employeeService.getEmployeePositions(this.employeeId).subscribe({
// // //       next: (data) => {
// // //         data.forEach((pee: PositionEmployeeDto) => {
// // //           this.addPositionEmployeeForm(pee);
// // //         });
// // //         this.dataSource.data = data;
// // //       },
// // //       error: (err) => {
// // //         console.error('Error fetching employee:', err);
// // //       }
// // //     });
// // //   }

// // //   addPositionEmployeeForm(pee: PositionEmployeeDto) {
// // //     const positionEmployee = this._formBuilder.group({
// // //       employeeId: [pee.employeeId, Validators.required],

// // //       positionId: [pee.positionId, Validators.required],
// // //       entryDateIntoOffice: [pee.entryDateIntoOffice, Validators.required],
// // //       ismanagerial: [pee.ismanagerial]
// // //     });
// // //     this.peForms.push(positionEmployee);
// // //   }

// // //   editPosition(row: PositionEmployeeDto) {
// // //     const dialogRef = this.dialog.open(EditEmployeePositionComponent, {
// // //       width: '250px',
// // //       data: row
// // //     });

// // //     dialogRef.afterClosed().subscribe(result => {
// // //       if (result) {
// // //         this.updatePosition(result);
// // //       }
// // //     });
// // //   }

// // //   deletePosition(row: PositionEmployeeDto) {
// // //     const confirmDelete = confirm('Are you sure you want to delete this position?');
// // //     if (confirmDelete) {
// // //       this._employeeService.deletePositionEmployee(row.employeeId,row.positionId).subscribe({
// // //         next: () => {
// // //           this.dataSource.data = this.dataSource.data.filter(item => item !== row);
// // //           this._snackBar.open('Position deleted successfully', 'Close', {
// // //             duration: 3000,
// // //             horizontalPosition: 'end',
// // //             verticalPosition: 'top'
// // //           });
// // //         },
// // //         error: (error: Error) => {
// // //           console.error(`Failed to delete position: ${error.message}`);
// // //           this._snackBar.open('Failed to delete position', 'Close', {
// // //             duration: 3000,
// // //             horizontalPosition: 'end',
// // //             verticalPosition: 'top'
// // //           });
// // //         }
// // //       });
// // //     }
// // //   }

// // //   ngAfterViewInit() {
// // //     this.dataSource.paginator = this.paginator;
// // //     this.dataSource.sort = this.sort;
// // //   }

// // //   applyFilter(event: Event) {
// // //     const filterValue = (event.target as HTMLInputElement).value;
// // //     this.dataSource.filter = filterValue.trim().toLowerCase();
// // //     if (this.dataSource.paginator) {
// // //       this.dataSource.paginator.firstPage();
// // //     }
// // //   }

// // //   updatePosition(data: any) {
// // //     const ee: PositionEmployeeDto = data as PositionEmployeeDto;
// // //     ee.ismanagerial = true;
// // //     ee.employeeId = 296;
// // //     this._employeeService.updatePositionEmployee(296, ee.positionId, ee).subscribe({
// // //       next: (responseData: any) => {
// // //         console.log(`Successfully updated position employee with ID ${ee.positionId} for employee with ID ${ee.employeeId}`);
// // //       },
// // //       error: (error: Error) => {
// // //         console.error(`Failed to update position employee with ID ${ee.positionId} for employee with ID ${ee.employeeId}: ${error.message}`);
// // //       }
// // //     });
// // //   }
// // // }
// // import { Component, OnInit, ViewChild } from '@angular/core';
// // import { MatPaginator } from '@angular/material/paginator';
// // import { MatSort } from '@angular/material/sort';
// // import { MatTableDataSource } from '@angular/material/table';
// // import { MatDialog } from '@angular/material/dialog';
// // import { MatSnackBar } from '@angular/material/snack-bar';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { Observable } from 'rxjs';
// // import { EmployeeService } from '../../employee.service';
// // import { Employee } from '../../../employee';
// // import { PositionEmployeePostModel } from '../../../position-employee-post-model';

// // import { EditEmployeePositionComponent } from '../edit-employee-position/edit-employee-position.component';
// // import { PositionEmployeeDto } from '../../../position-employee-dto';
// // import { CanActivate, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

// // @Component({
// //   selector: 'positions-employee-table',
// //   styleUrls: ['positions-employee-table.component.scss'],
// //   templateUrl: 'positions-employee-table.component.html',
// // })
// // export class PositionEmployeeTableComponent implements OnInit {
// //   displayedColumns: string[] = ['positionId', 'entryDateIntoOffice', 'ismanagerial', 'actions'];
// //   dataSource: MatTableDataSource<PositionEmployeeDto>;
// //   peForms: FormGroup[] = [];
// //   employeeId!: number;

// //   @ViewChild(MatPaginator) paginator!: MatPaginator;
// //   @ViewChild(MatSort) sort!: MatSort;

// //   constructor(
// //     private _employeeService: EmployeeService,
// //     private _formBuilder: FormBuilder,
// //     public dialog: MatDialog,
// //     private _snackBar: MatSnackBar,
// //     private route: ActivatedRoute
// //   ) {
// //     this.dataSource = new MatTableDataSource<PositionEmployeeDto>([]);
// //   }

// //   ngOnInit(): void {
// //     this.route.params.subscribe(params => {
// //       this.employeeId = +params['id'];
// //     });

// //     this._employeeService.getEmployeePositions(this.employeeId).subscribe({
// //       next: (data) => {
// //         data.forEach((pee: PositionEmployeeDto) => {
// //           this.addPositionEmployeeForm(pee);
// //         });
// //         this.dataSource.data = data;
// //       },
// //       error: (err) => {
// //         console.error('Error fetching employee:', err);
// //       }
// //     });
// //   }

// //   addPositionEmployeeForm(pee: PositionEmployeeDto) {
// //     const positionEmployee = this._formBuilder.group({
// //       employeeId: [pee.employeeId, Validators.required],
// //       positionId: [pee.positionId, Validators.required],
// //       entryDateIntoOffice: [pee.entryDateIntoOffice, Validators.required],
// //       ismanagerial: [pee.ismanagerial]
// //     });
// //     this.peForms.push(positionEmployee);
// //   }

// //   openAddPositionDialog(): void {
// //     const dialogRef = this.dialog.open(EditEmployeePositionComponent, {
// //       width: '250px',
// //       data: { employeeId: this.employeeId }
// //     });

// //     dialogRef.afterClosed().subscribe(result => {
// //       if (result) {
// //         // Handle adding new position logic here
// //       }
// //     });
// //   }

// //   editPosition(row: PositionEmployeeDto) {
// //     const dialogRef = this.dialog.open(EditEmployeePositionComponent, {
// //       width: '250px',
// //       data: row
// //     });

// //     dialogRef.afterClosed().subscribe(result => {
// //       if (result) {
// //         this.updatePosition(result);
// //       }
// //     });
// //   }

// //   deletePosition(row: PositionEmployeeDto) {
// //     const confirmDelete = confirm('Are you sure you want to delete this position?');
// //     if (confirmDelete) {
// //       this._employeeService.deletePositionEmployee(row.employeeId,row.positionId).subscribe({
// //         next: () => {
// //           this.dataSource.data = this.dataSource.data.filter(item => item !== row);
// //           this._snackBar.open('Position deleted successfully', 'Close', {
// //             duration: 3000,
// //             horizontalPosition: 'end',
// //             verticalPosition: 'top'
// //           });
// //         },
// //         error: (error: Error) => {
// //           console.error(`Failed to delete position: ${error.message}`);
// //           this._snackBar.open('Failed to delete position', 'Close', {
// //             duration: 3000,
// //             horizontalPosition: 'end',
// //             verticalPosition: 'top'
// //           });
// //         }
// //       });
// //     }
// //   }

// //   ngAfterViewInit() {
// //     this.dataSource.paginator = this.paginator;
// //     this.dataSource.sort = this.sort;
// //   }

// //   applyFilter(event: Event) {
// //     const filterValue = (event.target as HTMLInputElement).value;
// //     this.dataSource.filter = filterValue.trim().toLowerCase();
// //     if (this.dataSource.paginator) {
// //       this.dataSource.paginator.firstPage();
// //     }
// //   }

// //   updatePosition(data: any) {
// //     const ee: PositionEmployeeDto = data as PositionEmployeeDto;
// //     ee.ismanagerial = true;
// //     ee.employeeId = 296;
// //     this._employeeService.updatePositionEmployee(296, ee.positionId, ee).subscribe({
// //       next: (responseData: any) => {
// //         console.log(`Successfully updated position employee with ID ${ee.positionId} for employee with ID ${ee.employeeId}`);
// //       },
// //       error: (error: Error) => {
// //         console.error(`Failed to update position employee with ID ${ee.positionId} for employee with ID ${ee.employeeId}: ${error.message}`);
// //       }
// //     });
// //   }
// // }
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatDialog } from '@angular/material/dialog';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { EmployeeService } from '../../employee.service';
// import { Employee } from '../../../employee';
// import { PositionEmployeePostModel } from '../../../position-employee-post-model';
// import { Position } from '../../../position'; // Import Position model
// import { PositionService } from '../../../position/position.service';
// import { EditEmployeePositionComponent } from '../edit-employee-position/edit-employee-position.component';
// import { PositionEmployeeDto } from '../../../position-employee-dto';
// import { CanActivate, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

// @Component({
//   selector: 'positions-employee-table',
//   styleUrls: ['positions-employee-table.component.scss'],
//   templateUrl: 'positions-employee-table.component.html',
// })
// export class PositionEmployeeTableComponent implements OnInit {
//   displayedColumns: string[] = ['positionId', 'entryDateIntoOffice', 'ismanagerial', 'actions'];
//   dataSource: MatTableDataSource<PositionEmployeeDto>;
//   peForms: FormGroup[] = [];
//   employeeId!: number;
//   positions: Position[] = []; // Array to hold positions

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   constructor(
//     private _employeeService: EmployeeService,
//     private _formBuilder: FormBuilder,
//     public dialog: MatDialog,
//     private _snackBar: MatSnackBar,
//     private route: ActivatedRoute,
//     private positionService: PositionService // Inject PositionService
//   ) {
//     this.dataSource = new MatTableDataSource<PositionEmployeeDto>([]);
//   }

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.employeeId = +params['id'];
//     });

//     // Fetch positions
//     this.positionService.getPositions().subscribe(positions => {
//       this.positions = positions;
//       this.loadEmployeePositions();
//     });
//   }

//   loadEmployeePositions() {
//     this._employeeService.getEmployeePositions(this.employeeId).subscribe({
//       next: (data) => {
//         data.forEach((pee: PositionEmployeeDto) => {
//           this.addPositionEmployeeForm(pee);
//         });
//         // Filter positions based on available positions
//         this.dataSource.data = data.filter(item => this.positions.some(pos => pos.id !== item.positionId));
//       },
//       error: (err) => {
//         console.error('Error fetching employee:', err);
//       }
//     });
//   }

//   addPositionEmployeeForm(pee: PositionEmployeeDto) {
//     const positionEmployee = this._formBuilder.group({
//       employeeId: [pee.employeeId, Validators.required],
//       positionId: [pee.positionId, Validators.required],
//       entryDateIntoOffice: [pee.entryDateIntoOffice, Validators.required],
//       ismanagerial: [pee.ismanagerial]
//     });
//     this.peForms.push(positionEmployee);
//   }

//   openAddPositionDialog(): void {
//     const dialogRef = this.dialog.open(EditEmployeePositionComponent, {
//       width: '250px',
//       data: { employeeId: this.employeeId }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         // Handle adding new position logic here
//       }
//     });
//   }

//   editPosition(row: PositionEmployeeDto) {
//     const dialogRef = this.dialog.open(EditEmployeePositionComponent, {
//       width: '250px',
//       data: row
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.updatePosition(result);
//       }
//     });
//   }

//   deletePosition(row: PositionEmployeeDto) {
//     const confirmDelete = confirm('Are you sure you want to delete this position?');
//     if (confirmDelete) {
//       this._employeeService.deletePositionEmployee(row.employeeId,row.positionId).subscribe({
//         next: () => {
//           this.dataSource.data = this.dataSource.data.filter(item => item !== row);
//           this._snackBar.open('Position deleted successfully', 'Close', {
//             duration: 3000,
//             horizontalPosition: 'end',
//             verticalPosition: 'top'
//           });
//         },
//         error: (error: Error) => {
//           console.error(`Failed to delete position: ${error.message}`);
//           this._snackBar.open('Failed to delete position', 'Close', {
//             duration: 3000,
//             horizontalPosition: 'end',
//             verticalPosition: 'top'
//           });
//         }
//       });
//     }
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }

//   updatePosition(data: any) {
//     const ee: PositionEmployeeDto = data as PositionEmployeeDto;
//     ee.ismanagerial = true;
//     ee.employeeId = 296;
//     this._employeeService.updatePositionEmployee(296, ee.positionId, ee).subscribe({
//       next: (responseData: any) => {
//         console.log(`Successfully updated position employee with ID ${ee.positionId} for employee with ID ${ee.employeeId}`);
//       },
//       error: (error: Error) => {
//         console.error(`Failed to update position employee with ID ${ee.positionId} for employee with ID ${ee.employeeId}: ${error.message}`);
//       }
//     });
//   }
// }
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../models/employee';
import { PositionEmployeePostModel } from '../../../position-employee-post-model';
import { PositionService } from '../../../position/position.service';
import { Position } from '../../../position/models/position'; // Import Position model

import { EditEmployeePositionComponent } from '../edit-employee-position/edit-employee-position.component';
import { PositionEmployeeDto } from '../../models/position-employee-dto';
import { CanActivate, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { PositionSelectionComponent } from '../../../position-selection/position-selection.component';
@Component({
  selector: 'positions-employee-table',
  styleUrls: ['positions-employee-table.component.scss'],
  templateUrl: 'positions-employee-table.component.html',
})
export class PositionEmployeeTableComponent implements OnInit {
  displayedColumns: string[] = ['positionId', 'entryDateIntoOffice', 'ismanagerial', 'actions'];
  dataSource: MatTableDataSource<PositionEmployeeDto>;
  peForms: FormGroup[] = [];
  employeeId!: number;
  positions: Position[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _employeeService: EmployeeService,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private positionService: PositionService
  ) {
    this.dataSource = new MatTableDataSource<PositionEmployeeDto>([]);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeId = +params['id'];
    });

    this.positionService.getPositions().subscribe(positions => {
      this.positions = positions;
      this.loadEmployeePositions();
    });
  }

  loadEmployeePositions() {
    this._employeeService.getEmployeePositions(this.employeeId).subscribe({
      next: (data) => {
        data.forEach((pee: PositionEmployeeDto) => {
          this.addPositionEmployeeForm(pee);
        });
        this.dataSource.data = data;
      },
      error: (err) => {
        console.error('Error fetching employee:', err);
      }
    });
  }

  addPositionEmployeeForm(pee: PositionEmployeeDto) {
    const positionEmployee = this._formBuilder.group({
      employeeId: [pee.employeeId, Validators.required],
      positionId: [pee.positionId, Validators.required],
      entryDateIntoOffice: [pee.entryDateIntoOffice, Validators.required],
      ismanagerial: [pee.ismanagerial]
    });
    this.peForms.push(positionEmployee);
  }

  openAddPositionDialog(): void {
    const dialogRef = this.dialog.open(EditEmployeePositionComponent, {
      width: '250px',
      data: { employeeId: this.employeeId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle adding new position logic here
      }
    });
  }

  openPositionSelectionDialog(): void {
    // const dialogRef = this.dialog.open(PositionSelectionComponent, {
    //   width: '250px'
    // });

    // dialogRef.componentInstance.positionSelected.subscribe((selectedPosition: Position) => {
    //   // Handle selected position here
    //   console.log(selectedPosition);
    // });
  }

  editPosition(row: PositionEmployeeDto) {
    const dialogRef = this.dialog.open(EditEmployeePositionComponent, {
      width: '250px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updatePosition(result);
      }
    });
  }

  deletePosition(row: PositionEmployeeDto) {
    const confirmDelete = confirm('Are you sure you want to delete this position?');
    if (confirmDelete) {
      this._employeeService.deletePositionEmployee(row.employeeId, row.positionId).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(item => item !== row);
          this._snackBar.open('Position deleted successfully', 'Close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });
        },
        error: (error: Error) => {
          console.error(`Failed to delete position: ${error.message}`);
          this._snackBar.open('Failed to delete position', 'Close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });
        }
      });
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updatePosition(data: any) {
    const ee: PositionEmployeeDto = data as PositionEmployeeDto;
    ee.ismanagerial = true;
    ee.employeeId = 296;
    this._employeeService.updatePositionEmployee(296, ee.positionId, ee).subscribe({
      next: (responseData: any) => {
        console.log(`Successfully updated position employee with ID ${ee.positionId} for employee with ID ${ee.employeeId}`);
      },
      error: (error: Error) => {
        console.error(`Failed to update position employee with ID ${ee.positionId} for employee with ID ${ee.employeeId}: ${error.message}`);
      }
    });
  }
}
