// import { Injectable } from '@angular/core';
// import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService extends HttpHandler {
//   override handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
//     throw new Error('Method not implemented.');
//   }
//   public basicUrl = 'https://localhost:7195/api/Auth';

//   constructor(private http: HttpClient) {
//     super();
//   }

//   login(user: any): Observable<any> {
//     return this.http.post<any>(`${this.basicUrl}/login`, user); // נתיב API
//   }
// }
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
interface LoginResponse {
  token: string;
  
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
public baseUrl='https://localhost:7195/api/Auth'
  constructor(private http:HttpClient) { }

  login(user:User):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.baseUrl,user)
  }
  getIsTrueToken():Observable<boolean>{
    const headers=new HttpHeaders({
   
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<boolean>('https://localhost:7195/api/Auth/verifyToken',{headers});
  }
}
