import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import {
  Plugins,
  PushNotification,
  PushNotificationActionPerformed,
  PushNotificationToken,
} from '@capacitor/core';

import { AlertService } from '../shared/services/alert.service';
import { IDriverTransport } from './store/models/drive.transport.model';
import { IRideTransport } from './store/models/ride-transport.model';
import { PushNotificationService } from '../core/services/push-notification.service';
import { TransportDetailsComponent } from './transport-details/transport-details.component';
import { TransportFacade } from './store/facades/transport.facade';
import { TransportType } from './store/models/enums/transport-type.enum';

const { PushNotifications } = Plugins;
@Component({
  selector: 'app-tab1',
  templateUrl: 'transports.page.html',
  styleUrls: ['transports.page.scss'],
})
export class TransportsPage implements OnInit {
  type = TransportType.RIDE;

  constructor(
    private modalController: ModalController,
    public transportFacade: TransportFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private paltform: Platform,
    private pushNotificationService: PushNotificationService
  ) {}

  ngOnInit(): void {
    this.initPushNotifications();
  }

  ionViewWillEnter(): void {
    this.getTransportsBySegmentType();
  }

  doRefresh(event: any): void {
    this.getTransportsBySegmentType();
    event.target.complete();
  }

  segmentChange(): void {
    this.getTransportsBySegmentType();
  }

  rideItemClicked(transport: IRideTransport): void {
    this.router.navigate(['results', transport.id], { relativeTo: this.activatedRoute });
  }

  deleteRideTranport(rideTransportId: number): void {
    this.alertService.confirmAlert(
      'Delete',
      'Are you sure you want to delete this transport?',
      () => {
        this.transportFacade.deleteRideTransport(rideTransportId);
      }
    );
  }

  deleteDriveTranport(driveTransportId: number): void {
    this.alertService.confirmAlert(
      'Delete',
      'Are you sure you want to delete this transport?',
      () => {
        this.transportFacade.deleteDriveTransport(driveTransportId);
      }
    );
  }

  driveItemClicked(transport: IDriverTransport): void {
    this.router.navigate(['drive-transport', transport.id], { relativeTo: this.activatedRoute });
  }

  async addNewTransport(): Promise<void> {
    const modal = await this.modalController.create({
      component: TransportDetailsComponent,
    });

    await modal.present();
  }

  private getTransportsBySegmentType(): void {
    if (this.type === TransportType.DRIVE) {
      this.transportFacade.getAllDriveTransports();
    } else if (this.type === TransportType.RIDE) {
      this.transportFacade.getAllRideTransports();
    }
  }

  private initPushNotifications(): void {
    if (!this.paltform.is('cordova')) {
      return;
    }
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then((result) => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('registration', (token: PushNotificationToken) => {
      console.log('Push registration success, token: ' + token.value);
      this.pushNotificationService.createToken(token.value).subscribe();
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener('pushNotificationReceived', (notification: PushNotification) => {
      console.log('Push received: ' + JSON.stringify(notification.data));
    });
  }
}
