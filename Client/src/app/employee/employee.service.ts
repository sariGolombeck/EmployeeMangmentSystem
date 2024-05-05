
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './models/employee';
import { PositionEmployeeDto } from './models/position-employee-dto';
import { Observable, catchError, of, throwError } from 'rxjs';
import { PositionEmployeePostModel } from './models/position-employee-post-model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public basicUrl = 'https://localhost:7195/api/Employee';
  constructor(private http: HttpClient) { }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.basicUrl}/${id}`);
  }
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.basicUrl);
  }
  addEmployee(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.post<Employee>(this.basicUrl, employee, { headers: headers });
  }
  addPositionToEmployee(id: number, position: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    console.log("id of service", id, "position", position)
    return this.http.post<any>(`${this.basicUrl}/${id}/positions`, position, { headers: headers });
  }
  getEmployeePositions(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.basicUrl}/${id}/positions`)
  }
  updatePositionEmployee(employeeId: number, positionId: number, position: PositionEmployeeDto): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.put(`${this.basicUrl}/${employeeId}/positions/${positionId}`, position, {
      headers: headers
    })
  }
  deletePositionEmployee(employeeId: number, positionId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.delete(`${this.basicUrl}/${employeeId}/positions/${positionId}`, { headers: headers })
  }
  deleteEmployee(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.delete(`${this.basicUrl}/${id}`, { headers: headers })
  }
  updateEmployee(id: number, employee: any): Observable<any> {
    console.log("id of service", id)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.put(`${this.basicUrl}/${id}`, employee, { headers: headers })
  }

}