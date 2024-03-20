import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseDataService {

  public base_url = "https://hutopia-enterpriseapi.myviva.net:81/api";

  constructor(private http: HttpClient) { }

  getAllEnterprises(): Observable<any> {
    return this.http.get<any>(`${this.base_url}/enterprise/getAllEnterprises`).pipe(
      tap(_ => console.log("Success")),
      catchError(_ => throwError(() => new Error('Failed to fetch enterprises')))
    );
  }
}
