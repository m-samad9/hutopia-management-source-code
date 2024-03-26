import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseDataService {
  public base_url = "https://hutopia-api-managment.myviva.net/api";

  constructor(private http: HttpClient) { }

  getAllEnterprises(): Observable<any> {
      let http_auth_option = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem("auth_token")}` });
      return this.http.get<any>(`${this.base_url}/enterprise/getAllEnterprises`, { headers: http_auth_option }).pipe(
        tap(_ => console.log("Success")),
        catchError(_ => throwError(() => new Error('Failed to fetch enterprises')))
      );
    }
}
