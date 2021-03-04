import { ApplicantStatusEnum, IApplicant } from 'src/app/transports/store/models/applicant.model';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { AuthService } from 'src/app/auth/store/services/auth.service';
import { IDriverTransport } from 'src/app/transports/store/models/drive.transport.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-transport-search-result-list-item',
  templateUrl: './transport-search-result-list-item.component.html',
  styleUrls: ['./transport-search-result-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportSearchResultListItemComponent {
  @Input()
  get driveTransport(): IDriverTransport {
    return this._driveTransport;
  }
  set driveTransport(driveTransport: IDriverTransport) {
    if (driveTransport) {
      this._driveTransport = driveTransport;
      this.applicant$ = this.getApplicant(driveTransport);
      this.isAlreadyApplied$ = this.getIsAlreadyApplied(this.applicant$);
    }
  }

  @Output() apply = new EventEmitter<IDriverTransport>();
  @Output() cancelRide = new EventEmitter<IApplicant>();

  readonly applicantStatus = ApplicantStatusEnum;
  readonly env = environment;
  isAlreadyApplied$: Promise<boolean>;
  applicant$: Promise<IApplicant>;

  private _driveTransport: IDriverTransport;

  constructor(private authService: AuthService) {}

  private async getIsAlreadyApplied(applicant: Promise<IApplicant>): Promise<boolean> {
    const appl = await applicant;
    return (
      appl?.applicantStatus === ApplicantStatusEnum.PENDING ||
      appl?.applicantStatus === ApplicantStatusEnum.ACCEPTED ||
      appl?.applicantStatus === ApplicantStatusEnum.CANCELED
    );
  }

  private async getApplicant(transport: IDriverTransport): Promise<IApplicant> {
    const user = await this.authService.getUser();
    return transport.applicants.find((applicant) => applicant.rider.id === user.id);
  }
}
