import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes, Router } from '@angular/router';
import { PositionEmployeeTableComponent } from './components/update/positions-employee-table/positions-employee-table.component';
import { UpdateEmployeeComponent } from './components/update/update-employee/update-employee.component';
import { EmployeesComponent } from './components/get-employees/employees/employees.component';
import { AddEmployeeComponent } from './components/add/add-employee/add-employee.component';
import { DisplayDetailsAndPositionsComponent } from './components/update/display-details-and-positions/display-details-and-positions.component';
import { AuthGuard } from '../auth-guard';
import { DeleteEmployeeConfirmationDialogComponent } from './components/delete-employee-confirmation-dialog/delete-employee-confirmation-dialog.component';
const EMPLOYEE_ROUTES: Route[] = [
  { path: '', component: EmployeesComponent },  
  { path: 'employees', component: EmployeesComponent },
  { path: 'add-employee', canActivate: [AuthGuard], component: AddEmployeeComponent },
  // { path: 'edit-employee/:id', component: PositionEmployeeTableComponent },
  { path: 'update/:id', canActivate: [AuthGuard], component: DisplayDetailsAndPositionsComponent },

  { path: '**', redirectTo: 'employees', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(EMPLOYEE_ROUTES), CommonModule],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
