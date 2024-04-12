// // // // // import { Component } from '@angular/core';

// // // // // @Component({
// // // // //   selector: 'app-get-all-employees',
// // // // //   standalone: true,
// // // // //   imports: [],
// // // // //   templateUrl: './get-all-employees.component.html',
// // // // //   styleUrl: './get-all-employees.component.scss'
// // // // // })
// // // // // export class GetAllEmployeesComponent {










  
// // // // // }
// import { Component,OnInit, PipeTransform } from '@angular/core';
// import { Router } from '@angular/router';
// import { EmployeeService } from '../../employee.service';
// import { Employee } from '../../../employee';
// import { DecimalPipe } from '@angular/common';
// import { FormControl } from '@angular/forms';
// import { Observable, map, pipe, startWith } from 'rxjs';
// import { text } from 'express';

// @Component({
//   selector: 'get-all-employees',
//   templateUrl: './get-all-employees.component.html',
//   styleUrl: './get-all-employees.component.scss'
// })
// export class GetAllEmployeesComponent implements OnInit{
// /**
//   */

// employees$!: Observable<Employee[]>;
// filter = new FormControl('', { nonNullable: true });




// page = 1;
// pageSize = 4;
// allEmployees: Employee[] = [];
//  collectionSize !: number;
// xx!:string;
// // constructor(
// //   _pipe: DecimalPipe,
// //   this.employees$ = this.filter.valueChanges.pipe(
// //     startWith(''),
// //     map((text) => search(text, pipe)),
// //   private _router: Router,
// //   private _employeeService: EmployeeService,
// //   ) {this.refreshEmployees()}
//   refreshEmployees(){ 
//     this.allEmployees = this.allEmployees.map((country, i) => ({ id: i + 1, ...country })).slice(
// 			(this.page - 1) * this.pageSize,
// 			(this.page - 1) * this.pageSize + this.pageSize,
// 		);
//   }

// constructor(
//   private _router: Router,
//   private _employeeService: EmployeeService,
//   private _pipe: DecimalPipe // Assuming DecimalPipe is required for formatting
// ) {
//   // Fetch initial employee data
//   this._employeeService.getAllEmployees().subscribe({
//     next: (data) => {
//       console.log(data);
//       this.allEmployees = data;
//       this.collectionSize = this.allEmployees.length;
//       this.refreshEmployees();
//     },
//     error: (err) => {
//       console.error(err);
//     },
//     complete: () => {
//       console.log('complete');
//     }
//   });

//   // Set up search filtering using filter FormControl valueChanges
//   this.employees$ = this.filter.valueChanges.pipe(
//     startWith(''),
//     map((text) => this.search(text, this._pipe)) // Use injected DecimalPipe for formatting if needed
//   );
// }



// ngOnInit() :void{
//   this._employeeService.getAllEmployees().subscribe({
//     next: (data) => {
//       console.log(data);
//       this.allEmployees=data;
// this.collectionSize = this.allEmployees.length;
// this.refreshEmployees();
//     },
//     error: (err) => {
      
//       console.log(err);
//     },
//     complete: () => {
//       console.log('complete');
//     },
//   });
//   }

//   sortField = 'firstName';
//   sortOrder = 'asc';

//   sortEmployees(): void {
//     this.allEmployees.sort((a, b) => {
//       const sortValueA = String(a[this.sortField as keyof Employee]).toLowerCase();
//       const sortValueB = String(b[this.sortField as keyof Employee]).toLowerCase();

//       let order = 0;

//       if (this.sortOrder === 'asc') {
//         order = sortValueA.localeCompare(sortValueB);
//       } else {
//         order = sortValueB.localeCompare(sortValueA);
//       }

//       return order;
//     });

//     this.refreshEmployees();
//   }

//   searchTerm = '';

//   onSearch() {
//     if (this.searchTerm) {
//       this.allEmployees = this.allEmployees.filter(emp => emp.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()));
//     } else {
//       this.refreshEmployees();
//     }
//   }

//   onSortChange(field: keyof Employee): void {
//     if (this.sortField === field) {
//       this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
//     } else {
//       this.sortField = field;
//       this.sortOrder = 'asc';
//     }
//     this.sortEmployees();
//   }
//    search(text: string, pipe: PipeTransform): Employee[] {
//     return this.allEmployees.filter((country) => {
//       const term = text.toLowerCase();
//       return (
//         country.firstName.toLowerCase().includes(term) ||
//         pipe.transform(country.identity).includes(term) ||
//         pipe.transform(country.birthdate).includes(term)
//       );
//     });
//   }
  
  
// }