
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
import { PositionsComponent } from './components/positions/positions.component';
import {  AddPositionComponent } from './components/add-position/add-position.component';
import { UpdatePositionComponent } from './components/update-position/update-position.component';

// import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
const POSITION_ROUTES: Route[] = [
  { path: '', component: PositionsComponent },  // הסר נתיב כפול
  // ניתן להוסיף כאן נתיבים נוספים...
  { path: 'positions', component: PositionsComponent },
  { path: 'add-position', component: AddPositionComponent },
//   { path: 'edit-employee/:id', component: PositionEmployeeTableComponent },
  { path: 'update/:id', component: UpdatePositionComponent },

  { path: '**', redirectTo: 'positions', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(POSITION_ROUTES), CommonModule],
  exports: [RouterModule]
})
export class PositionRoutingModule { }
