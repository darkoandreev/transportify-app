import { Injectable, NgZone } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Plugins, PushNotification } from '@capacitor/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const { PushNotifications } = Plugins;

@Injectable({ providedIn: 'root' })
export class PushNotificationService {
  constructor(
    private http: HttpClient,
    private ngZone: NgZone,
    private platform: Platform,
    private navCtrl: NavController
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
        this.navCtrl.navigateRoot([action.notification.data.returnUrl]);
      });
    });
  }

  private get isCordova(): boolean {
    return this.platform.is('cordova');
  }
}
