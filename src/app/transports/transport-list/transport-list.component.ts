import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IDriverTransport } from '../store/models/drive.transport.model';
import { IRideTransport } from '../store/models/ride-transport.model';
import { TransportType } from '../store/models/enums/transport-type.enum';

@Component({
  selector: 'app-transport-list',
  templateUrl: './transport-list.component.html',
  styleUrls: ['./transport-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportListComponent implements OnInit {
  @Input() transports: IRideTransport & IDriverTransport;

  @Input() type: TransportType = TransportType.RIDE;

  @Input() headerLabel: string;

  constructor() {}

  ngOnInit() {}
}
