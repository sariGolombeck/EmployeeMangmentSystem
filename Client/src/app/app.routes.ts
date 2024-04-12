// import { Routes } from '@angular/router';
// export const routes: Routes = [
//     // { path: '', redirectTo: 'employee', pathMatch: 'full' },
// {path: 'all',
//     loadChildren: () => import('./employee/employee.module').then(c => c.EmployeeModule   )} 
// //   ,  { path: 'employees', loadComponent: () => import('./employee/emplyee.module').then(c => c.EmplyeeModule   ) },
//     // { path: '**', loadChildren: () => import('./not-found/not-found.component').then(c => c.NotFoundComponent) }

import { Routes, RouterModule } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { PositionModule } from './position/position.module';
// ];
export const routes: Routes = [
  // { path: '', loadComponent: () => import('./employee/components/employees/employees.component').then(c => c.EmployeesComponent) },
  // { path: 'yes',component:EmployeeModule },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },  //  loadChildren: () => import('./employee/employee.module').then(c => c.EmployeeModule   )} ,
  //  {path: '',component:HomeComponent },
  //  { path: 'home', loadComponent:()=>import('./home/home.component').then(c=>c.HomeComponent)}, 
  { path: 'employees', loadChildren: () => import('./employee/employee.module').then(c => c.EmployeeModule) },
  { path: 'employees', loadComponent: () => import('./employee/components/employees/employees.component').then(c => c.EmployeesComponent) },
  // { path: 'add-employee', loadComponent: () => import('./employee/components/add-employee/add-employee.component').then(c => c.AddEmployeeComponent) },
{path:'login',component:LoginComponent},
{ path: 'positions', loadChildren: () => import('./position/position.module').then(c => c.PositionModule) },

  // { path: 'login', loadComponent: () => import('./employee/components/login/login.component').then(c => c.LoginComponent) },
  // נתיבים נוספים...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }