

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes, Router } from '@angular/router';

import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

// import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { PositionEmployeeTableComponent } from './components/positions-employee-table/positions-employee-table.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
const EMPLOYEE_ROUTES: Route[] = [
  { path: '', component: EmployeesComponent },  // הסר נתיב כפול
  // ניתן להוסיף כאן נתיבים נוספים...
  { path: 'employees', component: EmployeesComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-employee/:id', component: PositionEmployeeTableComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },

  { path: '**', redirectTo: 'employees', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(EMPLOYEE_ROUTES), CommonModule],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
