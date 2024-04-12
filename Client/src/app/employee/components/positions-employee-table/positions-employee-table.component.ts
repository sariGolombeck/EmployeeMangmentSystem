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
import { Position } from '../../../position/models/position';
import { EditEmployeePositionComponent } from '../edit-employee-position/edit-employee-position.component';
import { PositionEmployeeDto } from '../../../position-employee-dto';
import { CanActivate, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { PositionSelectionComponent } from '../position-selection/position-selection.component';
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
  keep: PositionEmployeeDto[] = [];
  pk: PositionEmployeeDto[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _employeeService: EmployeeService,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private positionService: PositionService,
    private _router:Router
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

      data: { employeeId: this.employeeId, positions: this.positions.filter(y => !this.pk.some(x => x.positionId === y.id)) }
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

  editPosition(row: PositionEmployeeDto) {
    const dialogRef = this.dialog.open(EditEmployeePositionComponent, {
      width: '250px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("result from edit", result)
        this.keepTheChanges(result);
      }
    });
  }

  keepTheChanges(result: any) {
    this.keep.push(result)
    this.updatePosition(result);//אחר כך להעביר את זה בSUBMIT לSERVICE של הPUTץ
  }
  deletePosition(row: PositionEmployeeDto) {
    if(sessionStorage.getItem("token")=="")
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
    // ee.ismanagerial = true;
    // ee.employeeId = this.employeeId;
    console.log("data from edit ", data)
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
