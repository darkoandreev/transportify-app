import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { AuthService } from 'src/app/auth/store/services/auth.service';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('login') || request.url.includes('signup')) {
      return next.handle(request);
    }
    return from(this.authService.getUser()).pipe(
      switchMap((user) => {
        request = request.clone({
          setHeaders: {
            userId: user.id.toString(),
          },
        });

        return next.handle(request);
      })
    );
  }
}
