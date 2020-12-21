import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToasterService } from '../services/toaster.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private toasterService: ToasterService,
    private storage: Storage
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        if (response.error.statusCode === 403 || response.status === 403) {
          this.storage.remove('parsedToken');
          this.router.navigate(['auth/login']);
        }

        const errorMessage = `Status: ${response.error?.statusCode || response.status} Message: ${
          response.error?.message
        }`;

        this.toasterService.showToaster(errorMessage, 'danger');
        return throwError(errorMessage);
      })
    );
  }
}
