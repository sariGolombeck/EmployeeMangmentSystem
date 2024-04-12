
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Route, RouterModule } from '@angular/router';
// import { GetAllEmployeesComponent } from './components/get-all-employees/get-all-employees.component';
// const RECIPE_ROUTES: Route[] = [
//   {path: '',
//   component:GetAllEmployeesComponent
// },
//  { path: '', redirectTo: 'all', pathMatch: 'full' },
//   { path: 'all',  component:GetAllEmployeesComponent },
//  //{ path: 'recipe-details/:id', component: SmallRecipeComponent, canActivate: [recipeGuard] },
// //  // { path: 'add-recipe', loadComponent: () => import('./components/add-recipe/add-recipe.component').then(c => c.AddRecipeComponent) },
// //  { path: 'edit-recipe/:id', component:EditRecipeComponent },
// //  { path: 'recipe-details/:id', component:RecipeDetailsComponent },
// //   { path: 'add-recipe', component:AddRecipeComponent },

// ]

// @NgModule({
//   declarations: [],
//   imports: [RouterModule.forChild(RECIPE_ROUTES),
//     CommonModule
//   ],
//   exports: [RouterModule]
// })
// export class EmployeeRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';

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

  { path: '**', redirectTo: 'all-employees', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(EMPLOYEE_ROUTES), CommonModule],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
