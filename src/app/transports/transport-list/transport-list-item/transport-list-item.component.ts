import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IDriverTransport } from '../../store/models/drive.transport.model';
import { IRideTransport } from '../../store/models/ride-transport.model';
import { ITransportHistory } from '../../store/models/transport-history.model';
import { TransportType } from '../../store/models/enums/transport-type.enum';

@Component({
  selector: 'app-transport-list-item',
  templateUrl: './transport-list-item.component.html',
  styleUrls: ['./transport-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportListItemComponent implements OnInit {
  @Input() transport: IRideTransport & IDriverTransport & ITransportHistory;
  @Input() type: TransportType = TransportType.RIDE;

  iconName: string;

  ngOnInit() {
    this.iconName = this._iconName;
  }

  private get _iconName(): string {
    if (this.type === TransportType.RIDE) {
      return 'person';
    } else if (this.type === TransportType.DRIVE) {
      return 'card';
    } else {
      return this.transport.drive ? 'car' : 'person';
    }
  }
}
