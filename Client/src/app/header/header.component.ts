import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon'  ;
// import { MatMenuModule } from '@angular/material/menu';
// import { MatMenu } from '@angular/material/menu';
// import { Router } from 'express';
// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [MatToolbarModule,
//     MatButtonModule,MatIcon,MatMenuModule, MatMenu,MatMenuTrigger],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.scss'
// })

// export class HeaderComponent {
// constructor(router: Router) {}
// }
import matMenuTriggerFor from '@angular/material/menu';
import { Router } from '@angular/router';
import { Employee } from '../employee/models/employee';
import { EmployeeService } from '../employee/employee.service';
import * as XLSX from 'xlsx';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,
        MatButtonModule,MatIcon,HttpClientModule],
        providers:[EmployeeService],
  // imports: [MatToolbarModule, MatButtonModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
onGetPosition() {
  this.router.navigate(['positions']);
}
onMoreInfoClick() {
throw new Error('Method not implemented.');
}
logout() {
throw new Error('Method not implemented.');
}
addPosition() {
this.router.navigate(['positions/add-position']);
}
  constructor(private router: Router,private _employeeService: EmployeeService) {}

  onDownloadClick() {
    this._employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.ToExcel(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
    
  }
  ToExcel(data: Employee[]): void {
    this.exportToExcel(data, 'employees_data');
  }
  private exportToExcel(data: Employee[], filename: string): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `${filename}.xlsx`);
  }
  onAllEmployees(){
    this.router.navigate(['employees']);
  }
  onLogOut(){
    this.router.navigate(['/logout']);
  }
  onAddEmployeeClick() {
    // ניווט לנתיב "employees"
    this.router.navigate(['/add-employee']);
    }
  onHomeClick() {
    // ניווט לנתיב "employees"
    this.router.navigate(['/home']);

    // או ביצוע פעולה אחרת בהתאם לצורך
  }
  onLoginClick(){
    console.log("ddsa")
    this.router.navigate(["/login"]);
  }
  
}
