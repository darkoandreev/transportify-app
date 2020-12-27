import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IDriverTransport } from '../../store/models/drive.transport.model';
import { IRideTransport } from '../../store/models/ride-transport.model';
import { TransportType } from '../../store/models/enums/transport-type.enum';

@Component({
  selector: 'app-transport-list-item',
  templateUrl: './transport-list-item.component.html',
  styleUrls: ['./transport-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportListItemComponent implements OnInit {
  @Input() transport: IRideTransport & IDriverTransport;
  @Input() type: TransportType = TransportType.RIDE;

  constructor() {}

  ngOnInit() {}
}
