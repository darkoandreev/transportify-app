import { Component, NgZone, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { PushNotificationService } from './core/services/push-notification.service';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

const { PushNotifications } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private pushNotificationService: PushNotificationService
  ) {
    this.initializeApp();
  }

  ngOnInit(): void {
    this.pushNotificationService.pushNotificationPerformed();
  }

  async initializeApp(): Promise<void> {
    const ready = await this.platform.ready();

    if (!ready) {
      return;
    }
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }
}
