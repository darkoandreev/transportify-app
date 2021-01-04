import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { ApplicantStatusEnum } from 'src/app/transports/store/models/applicant.model';
import { AuthService } from 'src/app/auth/store/services/auth.service';
import { IDriverTransport } from 'src/app/transports/store/models/drive.transport.model';

@Component({
  selector: 'app-transport-search-result-list-item',
  templateUrl: './transport-search-result-list-item.component.html',
  styleUrls: ['./transport-search-result-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportSearchResultListItemComponent implements OnInit {
  @Input() driveTransport: IDriverTransport;

  @Output() apply = new EventEmitter<IDriverTransport>();

  isAlreadyApplied$: Promise<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAlreadyApplied$ = this.getIsAlreadyApplied(this.driveTransport);
  }

  private async getIsAlreadyApplied(transport: IDriverTransport): Promise<boolean> {
    const user = await this.authService.getUser();
    return transport.applicants.some(
      (applicant) =>
        +applicant.rider.id === +user.id &&
        (applicant.applicantStatus === ApplicantStatusEnum.PENDING ||
          applicant.applicantStatus === ApplicantStatusEnum.ACCEPTED)
    );
  }
}
