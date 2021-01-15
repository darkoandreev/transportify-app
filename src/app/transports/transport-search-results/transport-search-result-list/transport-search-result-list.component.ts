import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';

import { IDriverTransport } from '../../store/models/drive.transport.model';
import { IRideTransport } from '../../store/models/ride-transport.model';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { PushNotificationService } from 'src/app/core/services/push-notification.service';
import { TransportFacade } from '../../store/facades/transport.facade';

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-transport-search-result-list',
  templateUrl: './transport-search-result-list.component.html',
  styleUrls: ['./transport-search-result-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportSearchResultListComponent implements OnInit, OnDestroy {
  driveTransports$: Observable<IDriverTransport[]> = this.transportFacade.searchResults$;

  @Input()
  get rideTransport(): IRideTransport {
    return this._rideTransport;
  }
  set rideTransport(rideTransport: IRideTransport) {
    if (rideTransport) {
      this._rideTransport = rideTransport;
      this.transportFacade.searchDriveTransports(rideTransport);
    }
  }

  private _rideTransport: IRideTransport;

  constructor(
    private transportFacade: TransportFacade,
    private platform: Platform,
    private pushService: PushNotificationService
  ) {}

  ngOnInit(): void {
    this.pushService.pushNotificationReceived((notification) => {
      if (notification.data.type === 'CHANGE_APPLICANT_STATUS') {
        this.transportFacade.searchDriveTransports(this.rideTransport);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.platform.is('cordova')) {
      PushNotifications.removeAllListeners();
    }
  }

  applyForTransport(transport: IDriverTransport): void {
    this.transportFacade.applyForTransport(transport);
  }
}
