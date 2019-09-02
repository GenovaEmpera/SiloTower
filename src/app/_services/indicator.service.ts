import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Indicator } from '../_models/indicator.module';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const WEB_API = 'api/indicators';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  constructor(private http: HttpClient) { }

  public getIndicatorList(): Observable<Indicator[]> {
    return this.http.get<Indicator[]>(WEB_API).pipe(
      catchError(this.handleError<Indicator[]>('getIndicatorList', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
