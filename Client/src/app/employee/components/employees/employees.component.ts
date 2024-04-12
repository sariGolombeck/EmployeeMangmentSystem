
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
  addEmployee() {
    this._router.navigate(['employees/add-employee']);
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
    if(sessionStorage.getItem("token")=="")
    this._router.navigate(['login', employee.id]);
  }

  deleteEmployee(employee: Employee) {
    if(sessionStorage.getItem('token') == ""){
      this._router.navigate(['/login']);
      
    }
    const dialogRef = this.dialog.open(DeleteEmployeeConfirmationDialogComponent, {
      width: '350px',
      data: employee
    });

    dialogRef.afterClosed().subscribe((result: any) => {
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
