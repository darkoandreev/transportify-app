import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  Plugins,
  PushNotification,
  PushNotificationActionPerformed,
  PushNotificationToken,
} from '@capacitor/core';

import { IDriverTransport } from '../../store/models/drive.transport.model';
import { IRideTransport } from '../../store/models/ride-transport.model';
import { Observable } from 'rxjs';
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
  driveTransports$: Observable<IDriverTransport[]> = this.transportFacade.driveTransports$;

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
    private zone: NgZone,
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
    PushNotifications.removeAllListeners();
  }

  applyForTransport(transport: IDriverTransport): void {
    this.transportFacade.applyForTransport(transport);
  }
}
