import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IDriverTransport } from '../../store/models/drive.transport.model';
import { IRideTransport } from '../../store/models/ride-transport.model';
import { Observable } from 'rxjs';
import { TransportFacade } from '../../store/facades/transport.facade';

@Component({
  selector: 'app-transport-search-result-list',
  templateUrl: './transport-search-result-list.component.html',
  styleUrls: ['./transport-search-result-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportSearchResultListComponent {
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

  constructor(private transportFacade: TransportFacade) {}

  applyForTransport(transport: IDriverTransport): void {
    this.transportFacade.applyForTransport(transport);
  }
}
