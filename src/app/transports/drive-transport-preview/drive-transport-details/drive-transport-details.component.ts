import { ApplicantStatusEnum, IApplicant } from '../../store/models/applicant.model';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { IDriverTransport } from '../../store/models/drive.transport.model';
import { IUser } from 'src/app/auth/store/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-drive-transport-details',
  templateUrl: './drive-transport-details.component.html',
  styleUrls: ['./drive-transport-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriveTransportDetailsComponent {
  readonly applicantStatus = ApplicantStatusEnum;

  @Input()
  set driveTransport(value: IDriverTransport) {
    if (!value) {
      return;
    }
    this._driveTransport = value;
    this.currentApplicant = this.driveTransport?.applicants.find(
      (applicant) => applicant.rider.id === this.user.id
    );
  }
  get driveTransport(): IDriverTransport {
    return this._driveTransport;
  }

  @Input() user: IUser;

  @Output() updateStatus = new EventEmitter<IApplicant>();
  @Output() rejectApplicant = new EventEmitter<IApplicant>();
  @Output() openChat = new EventEmitter<IDriverTransport>();

  currentApplicant: IApplicant;

  readonly env = environment;

  private _driveTransport: IDriverTransport;

  updateApplicantStatus(applicant: IApplicant, applicantStatus: ApplicantStatusEnum): void {
    applicant = {
      ...applicant,
      applicantStatus,
    };
    this.updateStatus.emit(applicant);
  }
}
