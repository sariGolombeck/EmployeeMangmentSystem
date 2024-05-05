import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../employee.service';
import { Employee } from '../../../models/employee';
import { PositionEmployeePostModel } from '../../../models/position-employee-post-model';
import { PositionService } from '../../../../position/position.service';
import { Position } from '../../../../position/models/position';
import { EditEmployeePositionComponent } from '../edit-employee-position/edit-employee-position.component';
import { PositionEmployeeDto } from '../../../models/position-employee-dto';
import { CanActivate, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { PositionSelectionComponent } from '../position-selection/position-selection.component';
@Component({
  selector: 'app-positions-employee-table',
   templateUrl: 'positions-employee-table.component.html',
  styleUrls: ['positions-employee-table.component.scss'],
})
export class PositionEmployeeTableComponent implements OnInit {
  displayedColumns: string[] = ['positionId', 'entryDateIntoOffice', 'ismanagerial', 'actions'];
  dataSource: MatTableDataSource<PositionEmployeeDto>;
  peForms: FormGroup[] = [];
  employeeId!: number;
  positions: Position[] = [];
  keep: PositionEmployeeDto[] = [];
  pk: PositionEmployeeDto[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isLeanar: boolean = false;
employee!: Employee;
  constructor(
    private _employeeService: EmployeeService,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private positionService: PositionService,
    private _router: Router
  ) {
    this.dataSource = new MatTableDataSource<PositionEmployeeDto>([]);
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeId = +params['id'];
    });
    this.getEmployee();
    this.getPositions();
    this.loadEmployeePositions();
  }
  getEmployee() {
    this._employeeService.getEmployeeById(this.employeeId).subscribe({
      next: (data) => {
        this.employee = data
        console.log("data-table",this.employee)   

      },
      error: (e) => console.error(e),
    });
  }
  getPositions() {
    this.positionService.getPositions().subscribe({
      next: (data) => {
        this.positions = data
      },
      error: (e) => console.error(e),
    });
  }
  loadEmployeePositions() {
    this._employeeService.getEmployeePositions(this.employeeId).subscribe({
      next: (data) => {
        data.forEach((pee: PositionEmployeeDto) => {
          this.pk.push(pee)
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
    const dialogRef = this.dialog.open(PositionSelectionComponent, {
      width: '250px',

      data: { employeeId: this.employeeId, positions: this.positions.filter(y => !this.pk.some(x => x.positionId === y.id)), startOfWorkDate: this.employee.startOfWorkDate }
    });

    dialogRef.afterClosed().subscribe(selectedPosition => {
      if (selectedPosition) {
        selectedPosition as PositionEmployeePostModel[];
        selectedPosition.forEach((element: PositionEmployeePostModel) => {
          console.log("elemetnt to post ", element)
          this._employeeService.addPositionToEmployee(this.employeeId, element).subscribe({
            next: () => {
              this.loadEmployeePositions();
              this._snackBar.open('Position added successfully', 'Close', {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
              });
            },
            error: (error: Error) => {
              console.error(`Failed to add position: ${error.message}`);
              this._snackBar.open('Failed to add position', 'Close', {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
              });
            }
          });
        }
        )
      }
    });
  }

  editPosition(row: any,positionName:any) {
    const dialogRef = this.dialog.open(EditEmployeePositionComponent, {
      width: '250px',
      data:{ row,positionName: this.positions.find(pos => pos.id === row.positionId)?.name, startOfWorkDate: this.employee.startOfWorkDate} }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.keepTheChanges(result);
      }
    });
  }

  keepTheChanges(result: any) {
    this.keep.push(result)
    this.updatePosition(result);
  }
  deletePosition(row: PositionEmployeeDto) {
    if (sessionStorage.getItem("token") == "")
      this._router.navigate(['/login'])
    const confirmDelete = confirm('Are you sure you want to delete this position?');
    if (confirmDelete) {
      this._employeeService.deletePositionEmployee(row.employeeId, row.positionId).subscribe({
        next: () => {
          this.loadEmployeePositions();
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
    this._employeeService.updatePositionEmployee(this.employeeId, data.positionId, data).subscribe({
      next: (responseData: any) => {
        console.log(`Successfully updated position employee with ID ${ee.positionId} for employee with ID ${ee.employeeId}`);
      },
      error: (error: Error) => {
        console.error(`Failed to update position employee with ID ${ee.positionId} for employee with ID ${ee.employeeId}: ${error.message}`);
      }
    });
  }
}
