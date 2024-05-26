
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
    if (typeof sessionStorage === 'undefined' )  
      return false;

    const token = sessionStorage.getItem('token');
    if (!token) {
      // this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
