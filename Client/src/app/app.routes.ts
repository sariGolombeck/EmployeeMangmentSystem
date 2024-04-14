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
import { LoginComponent } from './register/login/login.component';
import { PositionModule } from './position/position.module';
import { LogoutComponent } from './register/login/logout/logout.component';
// ];
export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },  
  { path: 'employees', loadChildren: () => import('./employee/employee.module').then(c => c.EmployeeModule) },
  { path: 'employees', loadComponent: () => import('./employee/components/employees/employees.component').then(c => c.EmployeesComponent) },
  { path: 'login', component: LoginComponent },
  { path: 'positions', loadChildren: () => import('./position/position.module').then(c => c.PositionModule) },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }