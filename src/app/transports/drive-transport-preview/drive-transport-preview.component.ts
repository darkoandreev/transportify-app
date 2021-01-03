import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { IApplicant } from '../store/models/applicant.model';
import { IDriverTransport } from '../store/models/drive.transport.model';
import { Observable } from 'rxjs';
import { TransportFacade } from '../store/facades/transport.facade';

@Component({
  selector: 'app-drive-transport-preview',
  templateUrl: './drive-transport-preview.component.html',
  styleUrls: ['./drive-transport-preview.component.scss'],
})
export class DriveTransportPreviewComponent {
  driveTransport$: Observable<IDriverTransport> = this.transportFacade.driveTransport$;

  constructor(private transportFacade: TransportFacade, private route: ActivatedRoute) {}

  ionViewWillEnter() {
    const driveTransportId = +this.route.snapshot.paramMap.get('id');
    this.transportFacade.getDriveTransportById(driveTransportId);
  }

  updateApplicantStatus(applicant: IApplicant): void {
    this.transportFacade.updateApplicantStatus(applicant);
  }
}
