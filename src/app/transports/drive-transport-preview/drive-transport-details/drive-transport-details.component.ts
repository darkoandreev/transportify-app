import { ApplicantStatusEnum, IApplicant } from '../../store/models/applicant.model';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { IDriverTransport } from '../../store/models/drive.transport.model';
import { IUser } from 'src/app/auth/store/models';

@Component({
  selector: 'app-drive-transport-details',
  templateUrl: './drive-transport-details.component.html',
  styleUrls: ['./drive-transport-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriveTransportDetailsComponent {
  readonly applicantStatus = ApplicantStatusEnum;

  @Input() driveTransport: IDriverTransport;
  @Input() user: IUser;

  @Output() updateStatus = new EventEmitter<IApplicant>();
  @Output() rejectApplicant = new EventEmitter<IApplicant>();

  updateApplicantStatus(applicant: IApplicant, applicantStatus: ApplicantStatusEnum): void {
    applicant = {
      ...applicant,
      applicantStatus,
    };
    this.updateStatus.emit(applicant);
  }
}
