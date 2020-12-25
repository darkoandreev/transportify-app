import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IVehicle } from '../../store/models/vehicle.model';

@Component({
  selector: 'app-vehicle-list-item',
  templateUrl: './vehicle-list-item.component.html',
  styleUrls: ['./vehicle-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleListItemComponent {
  @Input() vehicle: IVehicle;
}
