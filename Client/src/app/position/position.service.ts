import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Position } from './models/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  public basicUrl = 'https://localhost:7195/api/Position';
  constructor(private http: HttpClient) { }
  //   getPositions():Observable <Position []>{
  // const x=this.http.get<Position[]>(this.basicUrl)
  //   return this.http.get<Position[]>(this.basicUrl)
  getPositions(): Observable<Position[]> {
    console.log("the service")
    return this.http.get<Position[]>(this.basicUrl)
    // .pipe(
    //   tap(x => console.log('lalla value:', x,"qqqq")) // Log intermediate value
    // );

  }
  addPosition(position: Position): Observable<Position> {
    return this.http.post<Position>(this.basicUrl, position);

  }
}
