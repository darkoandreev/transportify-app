import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { Plugins, PushNotificationToken } from '@capacitor/core';
import {
  SpeechRecognition,
  SpeechRecognitionListeningOptions,
} from '@ionic-native/speech-recognition/ngx';

import { AlertService } from '../shared/services/alert.service';
import { IDriverTransport } from './store/models/drive.transport.model';
import { IRideTransport } from './store/models/ride-transport.model';
import { PushNotificationService } from '../core/services/push-notification.service';
import { Subject } from 'rxjs';
import { TransportDetailsComponent } from './transport-details/transport-details.component';
import { TransportFacade } from './store/facades/transport.facade';
import { TransportHistoryFacade } from './store/facades/transport-history.facade';
import { TransportType } from './store/models/enums/transport-type.enum';
import { takeUntil } from 'rxjs/operators';

const { PushNotifications } = Plugins;
@Component({
  selector: 'app-transports',
  templateUrl: 'transports.page.html',
  styleUrls: ['transports.page.scss'],
})
export class TransportsPage implements OnInit {
  type = TransportType.RIDE;

  private navigationMap = new Map<string[], string>([
    [
      ['open notifications', 'open notification', 'go to notification', 'go to notifications'],
      '/tabs/notifications',
    ],
    [['open profile', 'open profiles', 'go to profile', 'go to profiles'], '/tabs/profile'],
    [['find transport'], 'ride transport modal'],
  ]);
  private destroyed$ = new Subject<void>();

  constructor(
    public transportFacade: TransportFacade,
    public transportHistoryFacade: TransportHistoryFacade,
    private modalController: ModalController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private paltform: Platform,
    private pushNotificationService: PushNotificationService,
    private speechRecognition: SpeechRecognition
  ) {}

  ngOnInit(): void {
    this.initPushNotifications();
  }

  ionViewWillEnter(): void {
    this.getTransportsBySegmentType();
  }

  ionViewWillLeave(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  startSpeachRecognition(): void {
    const options: SpeechRecognitionListeningOptions = {
      language: 'bg-BG',
    };
    this.speechRecognition
      .startListening()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (matches: string[]) => {
          matches.forEach((match, index) => {
            if (index < 1) {
              let value = '';
              this.navigationMap.forEach((_, key) => {
                if (key.includes(match) && this.navigationMap.get(key)) {
                  value = this.navigationMap.get(key);
                  if (value.includes('modal')) {
                    this.addNewTransport();
                  }
                }
              });

              this.router.navigate([value]);
            }
          });
        },
        (onerror) => console.log('error:', onerror)
      );
  }

  doRefresh(event: any): void {
    this.getTransportsBySegmentType();
    event.target.complete();
  }

  segmentChange(): void {
    this.getTransportsBySegmentType();
  }

  rideItemClicked(transport: IRideTransport): void {
    this.router.navigate(['results', transport.id], {
      relativeTo: this.activatedRoute,
      queryParams: {
        cityFrom: transport.cityFrom,
        cityTo: transport.cityTo,
        transportDate: transport.transportDate,
      },
    });
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
    } else {
      this.transportHistoryFacade.getAll();
    }
  }

  private initPushNotifications(): void {
    if (!this.paltform.is('cordova')) {
      return;
    }
    this.speechRecognition.requestPermission().then();

    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then((result) => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      }
    });

    PushNotifications.addListener('registration', (token: PushNotificationToken) => {
      this.pushNotificationService
        .createToken(token.value)
        .pipe(takeUntil(this.destroyed$))
        .subscribe();
    });
  }
}
