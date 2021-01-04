import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ToasterService } from '../services/toaster.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private toasterService: ToasterService,
    private storage: Storage,
    private navCtrl: NavController
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        if (response.error.statusCode === 403 || response.status === 403) {
          this.storage.remove('parsedToken');
          this.navCtrl.navigateRoot('auth/login');
        }

        const errorMessage = `Status: ${response.error?.statusCode || response.status} Message: ${
          response.error?.message || response.error?.error
        }`;

        this.toasterService.showToaster(errorMessage, 'danger');
        return throwError(errorMessage);
      })
    );
  }
}
