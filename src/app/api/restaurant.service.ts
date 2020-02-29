import { Injectable } from '@angular/core';
import { URL_API } from '../app.api';
import { Restaurant } from './../models/restaurant/restaurant';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  private url: string;
  constructor(
    private http: HttpClient,
  ) {
    this.url = `${URL_API}page/get_ionic`;
  }
  
  getRestaurantes(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.url)
      .pipe(
        tap(todos => this.log('listando restaurantes')),
        catchError(this.handleError('getRestaurantes', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`RestauranteService: ${message}`);
  }
}
