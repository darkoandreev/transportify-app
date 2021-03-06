import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { filter, mergeMap, switchMap } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/store/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (
      request.url.includes('login') ||
      request.url.includes('signup') ||
      request.url.includes('confirm-account')
    ) {
      return next.handle(request);
    }
    return from(this.authService.getUser()).pipe(
      filter((user) => !!user),
      mergeMap((user) => {
        request = request.clone({
          setHeaders: {
            userId: user.id.toString(),
          },
          withCredentials: true,
        });

        return next.handle(request);
      })
    );
  }
}
