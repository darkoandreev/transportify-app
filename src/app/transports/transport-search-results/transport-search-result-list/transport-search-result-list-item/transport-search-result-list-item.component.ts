import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

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

  isAlreadyApplied: boolean;

  constructor() {}

  ngOnInit() {
    this.isAlreadyApplied = this.getIsAlreadyApplied(this.driveTransport);
  }

  private getIsAlreadyApplied(transport: IDriverTransport): boolean {
    return transport.applicants.some(
      (applicant) => applicant.rider.id === 1 && applicant.applicantStatus === 'PENDING'
    );
  }
}
