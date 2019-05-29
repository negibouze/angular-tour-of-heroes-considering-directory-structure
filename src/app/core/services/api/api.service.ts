import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

const BASE_URL = 'base';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private httpClient: HttpClient) {}

  public get<T>(endpoint: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient.get(this.createPath(endpoint), { params }).pipe(catchError(this.formatErrors));
  }

  public put<T>(endpoint: string, body: object = {}): Observable<T> {
    return this.httpClient
      .put(this.createPath(endpoint), JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public post<T>(endpoint: string, body: object = {}): Observable<T> {
    return this.httpClient
      .post(this.createPath(endpoint), JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public delete<T>(endpoint: string): Observable<T> {
    return this.httpClient.delete(this.createPath(endpoint)).pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }

  private createPath(endpoint: string): string {
    return `${BASE_URL}/${endpoint}`;
  }
}
