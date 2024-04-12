// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeService {

//   constructor() { }
// }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './models/employee';
import { PositionEmployeeDto } from '../position-employee-dto';
import { Observable, catchError, of, throwError } from 'rxjs';
import { PositionEmployeePostModel } from '../position-employee-post-model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public basicUrl = 'https://localhost:7195/api/Employee';
  constructor(private http: HttpClient) { }
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  });
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.basicUrl}/${id}`);
  }
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.basicUrl);
  }
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.basicUrl, employee);
  }
  addPositionToEmployee(id: number, position: any): Observable<any> {
    // var x:any={
    //   positionId:position.positionId,
    //   entryDateIntoOffice:position.entryDateIntoOffice,
    //   ismanagerial:position.ismanagerial
    // }
    console.log("id of service", id, "position", position)
    return this.http.post<any>(`${this.basicUrl}/${id}/positions`, position);
  }
  getEmployeePositions(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.basicUrl}/${id}/positions`)
  }
  updatePositionEmployee(employeeId: number, positionId: number, position: PositionEmployeeDto): Observable<any> {
    return this.http.put(`${this.basicUrl}/${employeeId}/positions/${positionId}`, position, {
      headers: this.headers
    })
  }
  deletePositionEmployee(employeeId: number, positionId: number): Observable<any> {
    return this.http.delete(`${this.basicUrl}/${employeeId}/positions/${positionId}`)
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.basicUrl}/${id}`)
  }
  updateEmployee(id: number, employee: any): Observable<any> {
    console.log("id of service", id)

    return this.http.put(`${this.basicUrl}/${id}`, employee)
  }
}
// addPositionToEmployee(employeeId: number, position: PositionEmployeePostModel): Observable<any> {
//   // כאן נוסיף את ה-employeeId לכתובת ה-URL
//   const url = `${this.basicUrl}/${230}/positions`;
//   // שליחת בקשת POST לשרת עם הגוף של ה-position
//   return this.http.post<any>(url, position);
// }
