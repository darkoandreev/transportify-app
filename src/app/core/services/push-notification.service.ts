import { Injectable, NgZone } from '@angular/core';
import {
  Plugins,
  PushNotification,
  PushNotificationActionPerformed,
  PushNotificationToken,
} from '@capacitor/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const { PushNotifications } = Plugins;

@Injectable({ providedIn: 'root' })
export class PushNotificationService {
  constructor(
    private http: HttpClient,
    private ngZone: NgZone,
    private router: Router,
    private platform: Platform
  ) {}

  createToken(token: string): Observable<void> {
    return this.http.post<void>(`${environment.API_URL}push-notification`, { token });
  }

  pushNotificationReceived(callback: (notification: PushNotification) => void) {
    if (!this.isCordova) {
      return;
    }
    PushNotifications.addListener('pushNotificationReceived', (notification: PushNotification) => {
      this.ngZone.run(() => {
        callback(notification);
      });
    });
  }

  pushNotificationPerformed(): void {
    if (!this.isCordova) {
      return;
    }
    PushNotifications.addListener('pushNotificationActionPerformed', (action: any) => {
      this.ngZone.run(() => {
        this.router.navigate([action.notification.data.returnUrl]);
      });
    });
  }

  private get isCordova(): boolean {
    return this.platform.is('cordova');
  }
}
