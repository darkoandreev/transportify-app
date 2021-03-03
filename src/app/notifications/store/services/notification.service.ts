import { HttpClient } from '@angular/common/http';
import { INotification } from '../models/notifications.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<INotification[]> {
    return this.http.get<INotification[]>(`${environment.API_URL}my-notification`);
  }

  updateIsRead(notificationIds: number[], isRead: boolean): Observable<number> {
    return this.http.patch<number>(`${environment.API_URL}my-notification`, {
      notificationIds,
      isRead,
    });
  }
}
