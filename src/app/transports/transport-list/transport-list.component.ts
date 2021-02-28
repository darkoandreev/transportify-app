import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

import { IDriverTransport } from '../store/models/drive.transport.model';
import { IRideTransport } from '../store/models/ride-transport.model';
import { ITransportHistory } from '../store/models/transport-history.model';
import { TransportType } from '../store/models/enums/transport-type.enum';

@Component({
  selector: 'app-transport-list',
  templateUrl: './transport-list.component.html',
  styleUrls: ['./transport-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportListComponent {
  @Input() transports: IRideTransport[] & IDriverTransport[] & ITransportHistory[];

  @Input() type: TransportType = TransportType.RIDE;

  @Input() headerLabel: string;

  @Output() itemClicked = new EventEmitter<IRideTransport>();

  @Output() deleteChange = new EventEmitter<number>();
}
