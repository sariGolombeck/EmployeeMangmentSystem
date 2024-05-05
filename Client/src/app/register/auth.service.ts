
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
interface LoginResponse {
  token: string;

}
@Injectable({
  providedIn: 'root',
  
})
export class AuthService {
  public baseUrl = 'https://localhost:7195/api/Auth'
  constructor(private http: HttpClient) { }

  auth(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl, user)
  }
  isAuthorized(): boolean {
    const token = sessionStorage.getItem('token');
    if (!token) {
      // this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  // getIsTrueToken(): Observable<boolean> {
  //   const headers = new HttpHeaders({

  //     'Authorization': `Bearer ${localStorage.getItem('token')}`
  //   });
  //   return this.http.get<boolean>('https://localhost:7195/api/Auth/verifyToken', { headers });
  // }
}
