import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/store/services/auth.service';
import { Component } from '@angular/core';
import { IApplicant } from '../store/models/applicant.model';
import { IDriverTransport } from '../store/models/drive.transport.model';
import { IUser } from 'src/app/auth/store/models';
import { Observable } from 'rxjs';
import { PushNotificationService } from 'src/app/core/services/push-notification.service';
import { TransportFacade } from '../store/facades/transport.facade';

@Component({
  selector: 'app-drive-transport-preview',
  templateUrl: './drive-transport-preview.component.html',
  styleUrls: ['./drive-transport-preview.component.scss'],
})
export class DriveTransportPreviewComponent {
  driveTransport$: Observable<IDriverTransport> = this.transportFacade.driveTransport$;
  user$: Promise<IUser>;

  constructor(
    public authService: AuthService,
    private transportFacade: TransportFacade,
    private route: ActivatedRoute,
    private pushNotificationService: PushNotificationService
  ) {}

  ionViewWillEnter(): void {
    const driveTransportId = +this.route.snapshot.paramMap.get('id');
    this.user$ = this.authService.getUser();

    if (!driveTransportId) {
      return;
    }

    this.transportFacade.getDriveTransportById(driveTransportId);

    this.pushNotificationService.pushNotificationReceived((notification) => {
      if (notification.data.type === 'APPLY_FOR_DRIVE') {
        this.transportFacade.getDriveTransportById(driveTransportId);
      }
    });
  }

  updateApplicantStatus(applicant: IApplicant): void {
    this.transportFacade.updateApplicantStatus(applicant);
  }
}
