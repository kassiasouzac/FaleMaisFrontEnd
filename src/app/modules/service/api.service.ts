import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';


import { ICalculo, IDDD, IForm, IPlano } from 'src/app/modules/interface/IFaleMaisAPI';

import { API_PATH } from 'src/environments/environment';

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private readonly API = '/api/calculadora';

  constructor(
    private httpClient: HttpClient) {

    }

     getPlanos(): Observable<IPlano[]>{
      return  this.httpClient.get<IPlano[]>(`${API_PATH}`+this.API+'/planos').pipe(
       tap((res => res)),
       retry(2),
        catchError(this.handleError)
      );
    }

    getDDD(): Observable<IDDD[]>{
      return this.httpClient.get<IDDD[]>(`${API_PATH}`+this.API+'/ddds')
      .pipe(
        map((res => res)),
        retry(2),
         catchError(this.handleError)
       );
    }

    submitCalc(form: IForm): Observable<ICalculo>
    {
        return this.httpClient.post<ICalculo>(`${API_PATH}`+this.API,
          form, httpOptions).pipe(
          map((res => res)),
         catchError(this.handleError)
        )
    }

    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };

}
