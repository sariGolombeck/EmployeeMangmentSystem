// // // import { Component } from '@angular/core';

// // import { DecimalPipe } from "@angular/common";
// // import { FormsModule } from "@angular/forms";
// // import { NgbPaginationModule, NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";

// // // @Component({
// // //   selector: 'app-employee-table',
// // //   standalone: true,
// // //   imports: [],
// // //   templateUrl: './employee-table.component.html',
// // //   styleUrl: './employee-table.component.scss'
// // // })
// // // export class EmployeeTableComponent {

// // // }
// // // import { Component } from '@angular/core';
// // // import { DecimalPipe } from '@angular/common';
// // // import { FormsModule } from '@angular/forms';
// // // import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

// // // interface Country {
// // // 	id?: number;
// // // 	name: string;
// // // 	flag: string;
// // // 	area: number;
// // // 	population: number;
// // // }

// // // const COUNTRIES: Country[] = [
// // // 	{
// // // 		name: 'Russia',
// // // 		flag: 'f/f3/Flag_of_Russia.svg',
// // // 		area: 17075200,
// // // 		population: 146989754,
// // // 	},
// // // 	{
// // // 		name: 'France',
// // // 		flag: 'c/c3/Flag_of_France.svg',
// // // 		area: 640679,
// // // 		population: 64979548,
// // // 	},
// // // 	{
// // // 		name: 'Germany',
// // // 		flag: 'b/ba/Flag_of_Germany.svg',
// // // 		area: 357114,
// // // 		population: 82114224,
// // // 	},
// // // 	{
// // // 		name: 'Portugal',
// // // 		flag: '5/5c/Flag_of_Portugal.svg',
// // // 		area: 92090,
// // // 		population: 10329506,
// // // 	},
// // // 	{
// // // 		name: 'Canada',
// // // 		flag: 'c/cf/Flag_of_Canada.svg',
// // // 		area: 9976140,
// // // 		population: 36624199,
// // // 	},
// // // 	{
// // // 		name: 'Vietnam',
// // // 		flag: '2/21/Flag_of_Vietnam.svg',
// // // 		area: 331212,
// // // 		population: 95540800,
// // // 	},
// // // 	{
// // // 		name: 'Brazil',
// // // 		flag: '0/05/Flag_of_Brazil.svg',
// // // 		area: 8515767,
// // // 		population: 209288278,
// // // 	},
// // // 	{
// // // 		name: 'Mexico',
// // // 		flag: 'f/fc/Flag_of_Mexico.svg',
// // // 		area: 1964375,
// // // 		population: 129163276,
// // // 	},
// // // 	{
// // // 		name: 'United States',
// // // 		flag: 'a/a4/Flag_of_the_United_States.svg',
// // // 		area: 9629091,
// // // 		population: 324459463,
// // // 	},
// // // 	{
// // // 		name: 'India',
// // // 		flag: '4/41/Flag_of_India.svg',
// // // 		area: 3287263,
// // // 		population: 1324171354,
// // // 	},
// // // 	{
// // // 		name: 'Indonesia',
// // // 		flag: '9/9f/Flag_of_Indonesia.svg',
// // // 		area: 1910931,
// // // 		population: 263991379,
// // // 	},
// // // 	{
// // // 		name: 'Tuvalu',
// // // 		flag: '3/38/Flag_of_Tuvalu.svg',
// // // 		area: 26,
// // // 		population: 11097,
// // // 	},
// // // 	{
// // // 		name: 'China',
// // // 		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
// // // 		area: 9596960,
// // // 		population: 1409517397,
// // // 	},
// // // ];

// // @Component({
// // 	selector: 'ngbd-table-pagination',
// // 	//imports: [DecimalPipe, FormsModule, NgbTypeaheadModule, NgbPaginationModule],
// // 	templateUrl: './table-pagination.html',
// // })
// // export class NgbdTablePagination {
// // 	page = 1;
// // 	pageSize = 4;
// // 	collectionSize = COUNTRIES.length;
// // 	countries: Country[];

// // 	constructor() {
// // 		this.refreshCountries();
// // 	}

// // 	refreshCountries() {
// // 		this.countries = COUNTRIES.map((country, i) => ({ id: i + 1, ...country })).slice(
// // 			(this.page - 1) * this.pageSize,
// // 			(this.page - 1) * this.pageSize + this.pageSize,
// // 		);
// // 	}
// // }






// ------------------------
// // import { Component, OnInit } from '@angular/core';
// // import { Router } from '@angular/router';
// // import { EmployeeService } from '../../employee.service';
// // import { Employee } from '../../../employee';

// // @Component({
// //   selector: 'get-all-employees',
// //   templateUrl: './get-all-employees.component.html',
// //   styleUrls: ['./get-all-employees.component.scss']
// // })
// // export class GetAllEmployeesComponent implements OnInit {
// //   page = 1;
// //   pageSize = 4;
// //   allEmployees: Employee[] = [];
// //   collectionSize!: number;
// //   sortField = 'firstName'; // Default sort field
// //   sortOrder = 'asc'; // Default sort order

// //   constructor(
// //     private _router: Router,
// //     private _employeeService: EmployeeService
// //   ) {}

// //   ngOnInit(): void {
// //     this._employeeService.getAllEmployees().subscribe({
// //       next: (data) => {
// //         console.log(data);
// //         this.allEmployees = data;
// //         this.collectionSize = this.allEmployees.length;
// //         this.sortEmployees(); // Sort on initial load
// //       },
// //       error: (err) => {
// //         console.error(err);
// //       },
// //       complete: () => {
// //         console.log('complete');
// //       }
// //     });
// //   }
// //   // sortEmployees(): void {
// //   //   const collator = new Intl.Collator(undefined, {
// //   //     sensitivity: 'accent',
// //   //     usage: 'search'
// //   //   });
  
// //   //   this.allEmployees.sort((a, b) => {
// //   //     return collator.compare(a[this.sortField], b[this.sortField]) * (this.sortOrder === 'asc' ? 1 : -1);
// //   //   });
// //   // }
// //   refreshEmployees(): void {
// //     this.allEmployees = this.allEmployees.slice(
// //       (this.page - 1) * this.pageSize,
// //       (this.page - 1) * this.pageSize + this.pageSize
// //     );
// //   }

// //   sortEmployees(): void {
// //     this.allEmployees.sort((a, b) => {
// //       const sortValueA = a[this.sortField].toLowerCase();
// //       const sortValueB = b[this.sortField].toLowerCase();

// //       return sortValueA.localeCompare(sortValueB, undefined, {
// //         sensitivity: 'accent',
// //         usage: 'search'
// //       }) * (this.sortOrder === 'asc' ? 1 : -1);
// //     });

// //     this.refreshEmployees();
// //   }

// //   onSortChange(field: string): void {
// //     this.sortField = field;
// //     this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
// //     this.sortEmployees();
// //   }
// // }



// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { EmployeeService } from '../../employee.service';
// import { Employee } from '../../../employee';

// @Component({
//   selector: 'get-all-employees',
//   templateUrl: './get-all-employees.component.html',
//   styleUrls: ['./get-all-employees.component.scss']
// })
// export class GetAllEmployeesComponent implements OnInit {
//   page = 1;
//   pageSize = 4;
//   allEmployees: Employee[] = [];
//   collectionSize!: number;
//   sortField = 'firstName'; // Default sort field
//   sortOrder = 'asc'; // Default sort order

//   constructor(
//     private _router: Router,
//     private _employeeService: EmployeeService
//   ) {}

//   ngOnInit(): void {
//     this._employeeService.getAllEmployees().subscribe({
//       next: (data) => {
//         console.log(data);
//         this.allEmployees = data;
//         this.collectionSize = this.allEmployees.length;
//         this.sortEmployees(); // Sort on initial load
//       },
//       error: (err) => {
//         console.error(err);
//       },
//       complete: () => {
//         console.log('complete');
//       }
//     });
//   }

//   refreshEmployees(): void {
//     this.allEmployees = this.allEmployees.slice(
//       (this.page - 1) * this.pageSize,
//       (this.page - 1) * this.pageSize + this.pageSize
//     );
//   }

//   sortEmployees(): void {
//     this.allEmployees.sort((a, b) => {
//       const sortValueA = typeof a[this.sortField] === 'string' ? (a[this.sortField] as string).toLowerCase() : '';
//       const sortValueB = typeof b[this.sortField] === 'string' ? (b[this.sortField] as string).toLowerCase() : '';

//       return sortValueA.localeCompare(sortValueB, undefined, {
//         sensitivity: 'accent',
//         usage: 'search'
//       }) * (this.sortOrder === 'asc' ? 1 : -1);
//     });

//     this.refreshEmployees();
//   }

//   onSortChange(field: string): void {
//     if (this.sortField === field) {
//       this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
//     } else {
//       this.sortField = field;
//       this.sortOrder = 'asc';
//     }
//     this.sortEmployees();
//   }
// }
// // import { Component, OnInit } from '@angular/core';
// // import { Router } from '@angular/router';
// // import { EmployeeService } from '../../employee.service';
// // import { Employee } from '../../../employee';

// // @Component({
// //   selector: 'get-all-employees',
// //   templateUrl: './get-all-employees.component.html',
// //   styleUrls: ['./get-all-employees.component.scss']
// // })
// // export class GetAllEmployeesComponent implements OnInit {
// //   page = 1;
// //   pageSize = 4;
// //   allEmployees: Employee[] = [];
// //   collectionSize = 0;
// //   sortField: keyof Employee = 'firstName'; // Default sort field
// //   sortOrder: 'asc' | 'desc' = 'asc'; // Default sort order

// //   constructor(
// //     private _router: Router,
// //     private _employeeService: EmployeeService
// //   ) {}

// //   ngOnInit(): void {
// //     this._employeeService.getAllEmployees().subscribe({
// //       next: (data: Employee[]) => {
// //         console.log(data);
// //         this.allEmployees = data;
// //         this.collectionSize = this.allEmployees.length;
// //         // this.sortEmployees(); // Sort on initial load
// //       },
// //       error: (err) => {
// //         console.error(err);
// //       },
// //       complete: () => {
// //         console.log('complete');
// //       }
// //     });
// //   }

// //   refreshEmployees(): void {
// //     this.allEmployees = this.allEmployees.slice(
// //       (this.page - 1) * this.pageSize,
// //       (this.page - 1) * this.pageSize + this.pageSize
// //     );
// //   }

// //   // sortEmployees(): void {
// //   //   this.allEmployees.sort((a, b) => {
// //   //     const sortValueA = String(a[this.sortField]).toLowerCase();
// //   //     const sortValueB = String(b[this.sortField]).toLowerCase();

// //   //     return sortValueA.localeCompare(sortValueB, undefined, {
// //   //       sensitivity: 'accent',
// //   //       usage: 'search'
// //   //     }) * (this.sortOrder === 'asc' ? 1 : -1);
// //   //   });

// //   //   this.refreshEmployees();
// //   // }

// //   onSortChange(field: keyof Employee): void {
// //     if (this.sortField === field) {
// //       this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
// //     } else {
// //       this.sortField = field;
// //       this.sortOrder = 'asc';
// //     }
// //     this.sortEmployees();
// //   }
// // }
