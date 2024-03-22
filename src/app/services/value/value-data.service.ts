import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueDataService {
  // private base_url = "http://hutopia-managementapi.myviva.net:82/api";
  private base_url = "https://hutopia-api-managment.myviva.net/api";

  constructor(private http: HttpClient) { }

  getValuesByTypeId(type_id: number, page_number: number, page_size: number): Observable<any>{
    let parameters = new HttpParams({
      fromObject: {
        search: "",
        id: type_id,
        pageNumber: page_number,
        pageSize: page_size
      }
    });
    return this.http.get<any>(`${this.base_url}/values/getAllValues`, {params: parameters}).pipe(
      tap(_ => console.log("Fetched values successfully")),
      catchError(_ => throwError(() => new Error("Failed to fetch values")))
    );
  }
}
