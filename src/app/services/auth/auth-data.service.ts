import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {
  private base_url = "https://hutopia-api-managment.myviva.net/api";
  private http_json_option = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.base_url}/auth/login`, { "email": email, "password": password }, this.http_json_option).pipe(
      tap(_ => console.log("Success")),
      map(response => {
        localStorage.setItem("auth_token", response.data.token);
        return response;
      }),
      catchError(_ => throwError(() => new Error("Failed to login")))
    );
  }
}
