import { Component, OnInit } from '@angular/core';

import { IVehicle } from 'src/app/vehicle/store/models/vehicle.model';
import { Observable } from 'rxjs';
import { VehicleFacade } from 'src/app/vehicle/store/facades/vehicle.facade';

@Component({
  selector: 'app-transport-drive-form',
  templateUrl: './transport-drive-form.component.html',
  styleUrls: ['./transport-drive-form.component.scss'],
})
export class TransportDriveFormComponent implements OnInit {
  vehicles$: Observable<IVehicle[]> = this.vehicleFacade.vehicles$;

  constructor(private vehicleFacade: VehicleFacade) {}

  ngOnInit() {
    this.vehicleFacade.getVehicles();
  }
}
