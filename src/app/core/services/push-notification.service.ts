import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PushNotificationService {
  constructor(private http: HttpClient) {}

  createToken(token: string): Observable<void> {
    return this.http.post<void>(`${environment.API_URL}push-notification`, { token });
  }
}
