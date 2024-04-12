// // // // get-all-employees.component.ts

// // // import { Component, OnInit, ViewChild } from '@angular/core';
// // // import { MatPaginator } from '@angular/material/paginator';
// // // import { MatSort } from '@angular/material/sort';
// // // import { MatTableDataSource } from '@angular/material/table';
// // // import { EmployeeService } from '../../employee.service';
// // // import { Employee } from '../../../employee';
// // // import { Router } from '@angular/router';
// // // import { ActivatedRoute } from '@angular/router';

// // // import { PositionEmployeeTableComponent } from '../positions-employee-table/positions-employee-table.component';
// // // @Component({
// // //   selector: 'get-all-employees',
// // //   styleUrls: ['get-all-employees.component.scss'],
// // //   templateUrl: 'get-all-employees.component.html',
// // // })
// // // export class GetAllEmployeesComponent implements OnInit {
// // //   displayedColumns: string[] = ['identity', 'firstName', 'lastName', 'startOfWorkDate', 'actions']; // Add 'actions' column
// // //   dataSource: MatTableDataSource<Employee>;

// // //   @ViewChild(MatPaginator) paginator!: MatPaginator;
// // //   @ViewChild(MatSort) sort!: MatSort;

// // //   constructor(private _employeeService: EmployeeService,
// // //               private _router:Router
// // //   ) {
// // //     this.dataSource = new MatTableDataSource<Employee>([]);
// // //     console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkk")
// // //   }

// // //   ngOnInit(): void {
// // //     this._employeeService.getAllEmployees().subscribe({
// // //       next: (data) => {
// // //         console.log("datasdfghjkl;'dfghjkl;ta",data)
// // //         console.log(data);
// // //         this.dataSource.data = data; // Update data source with actual employees
// // //       },
// // //       error: (err) => {
// // //         console.error(err);
// // //       },
// // //       complete: () => {
// // //         console.log('complete');
// // //       },
// // //     });
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

// // //   // editEmployee(employee: Employee) {
// // //   //   // Implement edit functionality here
// // //   //   console.log('Edit employee:', employee);
// // //   //   this._router.navigate(['edit-employee']);
// // //   // }
// // //   editEmployee(employee: Employee) {
// // //     // Implement edit functionality here
// // //     console.log('Edit employee:', employee);
// // //     this._router.navigate(['update',employee.id]);
// // //   }
// // //   deleteEmployee(employee: Employee) {
// // //     // Implement delete functionality here
// // //     console.log('Delete employee:', employee);
// // //   }
// // // }

// // // get-all-employees.component.ts

// // import { Component, OnInit, ViewChild } from '@angular/core';
// // import { MatPaginator } from '@angular/material/paginator';
// // import { MatSort } from '@angular/material/sort';
// // import { MatTableDataSource } from '@angular/material/table';
// // import { EmployeeService } from '../../employee.service';
// // import { Employee } from '../../../employee';
// // import { Router } from '@angular/router';
// // import { ActivatedRoute } from '@angular/router';

// // import { PositionEmployeeTableComponent } from '../positions-employee-table/positions-employee-table.component';
// // @Component({
// //   selector: 'get-all-employees',
// //   styleUrls: ['get-all-employees.component.scss'],
// //   templateUrl: 'get-all-employees.component.html',
// // })
// // export class GetAllEmployeesComponent implements OnInit {
// //   displayedColumns: string[] = ['identity', 'firstName', 'lastName', 'startOfWorkDate', 'actions']; // Add 'actions' column
// //   dataSource: MatTableDataSource<Employee>;

// //   @ViewChild(MatPaginator) paginator!: MatPaginator;
// //   @ViewChild(MatSort) sort!: MatSort;

// //   constructor(private _employeeService: EmployeeService,
// //               private _router:Router
// //   ) {
// //     this.dataSource = new MatTableDataSource<Employee>([]);
// //     console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkk")
// //   }

// //   ngOnInit(): void {
// //     this._employeeService.getAllEmployees().subscribe({
// //       next: (data) => {
// //         console.log("datasdfghjkl;'dfghjkl;ta",data)
// //         console.log(data);
// //         this.dataSource.data = data; // Update data source with actual employees
// //       },
// //       error: (err) => {
// //         console.error(err);
// //       },
// //       complete: () => {
// //         console.log('complete');
// //       },
// //     });
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

// //   // editEmployee(employee: Employee) {
// //   //   // Implement edit functionality here
// //   //   console.log('Edit employee:', employee);
// //   //   this._router.navigate(['edit-employee']);
// //   // }
// //   editEmployee(employee: Employee) {
// //     // Implement edit functionality here
// //     console.log('Edit employee:', employee);
// //     this._router.navigate(['update',employee.id]);
// //   }
// //   deleteEmployee(employee: Employee) {
// //     // Implement delete functionality here
// //     this._employeeService.deleteEmployee(employee.id).subscribe({
// //       next: (data) => {
// //         console.log(data);
// //         this._employeeService.getAllEmployees().subscribe({
// //           next: (data) => {
// //             console.log(data);
// //             this.dataSource.data = data; // Update data source with actual employees
// //           },
// //           error: (err) => {
// //             console.error(err);
// //           },
// //           complete: () => {
// //             console.log('complete');
// //           },
// //         });
// //       }
// //     })
// //     console.log('Delete employee:', employee);
// //   }
// // }
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatDialog } from '@angular/material/dialog'; // Import for MatDialog

// import { EmployeeService } from '../../employee.service';
// import { Employee } from '../../../employee';
// import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

// import { PositionEmployeeTableComponent } from '../positions-employee-table/positions-employee-table.component';
// import { DeleteEmployeeConfirmationDialogComponent } from './delete-employee-confirmation-dialog.component'; // Import for confirmation dialog

// @Component({
//   selector: 'get-all-employees',
//   styleUrls: ['get-all-employees.component.scss'],
//   templateUrl: 'get-all-employees.component.html',
// })
// export class GetAllEmployeesComponent implements OnInit {
//   displayedColumns: string[] = ['identity', 'firstName', 'lastName', 'startOfWorkDate', 'actions'];
//   dataSource: MatTableDataSource<Employee>;

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   constructor(
//     private _employeeService: EmployeeService,
//     private _router: Router,
//     private _dialog: MatDialog // Inject MatDialog for confirmation dialog
//   ) {
//     this.dataSource = new MatTableDataSource<Employee>([]);
//   }

//   ngOnInit(): void {
//     this._employeeService.getAllEmployees().subscribe({
//       next: (data) => {
//         this.dataSource.data = data;
//       },
//       error: (err) => {
//         console.error(err);
//       },
//     });
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

//   editEmployee(employee: Employee) {
//     this._router.navigate(['update', employee.id]);
//   }

//   deleteEmployee(employee: Employee) {
//     const dialogRef = this._dialog.open(DeleteEmployeeConfirmationDialogComponent, {
//       width: '400px',
//       data: { employeeName: `${employee.firstName} ${employee.lastName}` }, // Pass employee name for confirmation message
//     });

//     dialogRef.afterClosed().subscribe((confirmed) => {
//       if (confirmed) {
//         this._employeeService.deleteEmployee(employee.id).subscribe({
//           next: (data) => {
//             console.log(data);
//             this._employeeService.getAllEmployees().subscribe({
//               next: (updatedData) => {
//                 this.dataSource.data = updatedData;
//                 this.openDeleteSuccessSnackbar(); // Call method to display success message
//               },
//               error: (err) => {
//                 console.error(err);
//               },
//             });
//           },
//           error: (err) => {
//             console.error(err);
//             // Handle deletion error (optional: display error message)
//           },
//         });
//       }
//     });
//   }

//   openDeleteSuccessSnackbar() {
//     // Implement logic to display a Material Snackbar or custom notification
//     // Here's an example using Material Snackbar (assuming you have it set up):
//     // this._snackBar.open('Employee deleted successfully!', '', {
//     //   duration: 2000, // Adjust duration as needed
//     //   horizontalPosition: 'center',
//     //   verticalPosition: 'top',
//     // });
//   }
// }
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';
import { DeleteEmployeeConfirmationDialogComponent } from '../delete-employee-confirmation-dialog/delete-employee-confirmation-dialog.component';


@Component({
  selector: 'app-employees',
  styleUrls: ['./employees.component.scss'],
  templateUrl: './employees.component.html',
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['identity', 'firstName', 'lastName', 'startOfWorkDate', 'actions']; // Add 'actions' column
  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _employeeService: EmployeeService,
    private _router: Router,
    private dialog: MatDialog // Inject MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Employee>([]);
  }

  ngOnInit(): void {
    this._employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.dataSource.data = data; // Update data source with actual employees
      },
      error: (err) => {
        console.error(err);
      },
    });
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

  editEmployee(employee: Employee) {
    this._router.navigate(['update', employee.id]);
  }

  deleteEmployee(employee: Employee) {
    const dialogRef = this.dialog.open(DeleteEmployeeConfirmationDialogComponent, {
      width: '350px',
      data: employee
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._employeeService.deleteEmployee(employee.id).subscribe(() => {
          this._employeeService.getAllEmployees().subscribe({
            next: (data) => {
              this.dataSource.data = data; // Update data source with actual employees
            },
            error: (err) => {
              console.error(err);
            },
          });
        });
      }
    });
  }
}
