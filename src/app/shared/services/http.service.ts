import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) { }
  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  get headerToken() {
    const token:any = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${JSON.parse(token)}`,
      }),
    };
  }

  post(url: string, data: any, token: boolean) {
    LoaderService.loader.next(true)
    return this.http
      .post(
        environment.baseUrl + url,
        data,
        token ? this.headerToken : this.header
      )
      .pipe(
        finalize(() => LoaderService.loader.next(false)),
        tap((res: any) => {
          if (res?.message || res?.messsage) {
            this.toastr.success(res?.message ? res?.message : res?.messsage);
          }
        }),
        catchError((error: HttpErrorResponse) => {
          LoaderService.loader.next(false)
          return throwError(error.message || 'Server error');
        })
      );
  }

  get(url: string, token: boolean) {
    LoaderService.loader.next(true)
    return this.http
      .get(environment.baseUrl + url, token ? this.headerToken : this.header)
      .pipe(
        finalize(() => LoaderService.loader.next(false)),
        tap((res: any) => {
          if (res?.message || res?.messsage) {
            this.toastr.success(res?.message ? res?.message : res?.messsage);
          }
        }),
        catchError((error: HttpErrorResponse) => {
          LoaderService.loader.next(false)
          return throwError(error.message || 'Server error');
        })
      );
  }
}
