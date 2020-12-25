import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { IVehicle } from '../store/models/vehicle.model';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleListComponent {
  @Input() vehicles: IVehicle[];
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();
}
