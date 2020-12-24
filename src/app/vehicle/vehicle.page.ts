import { Component, OnInit } from '@angular/core';

import { IVehicle } from './store/models/vehicle.model';
import { Observable } from 'rxjs';
import { VehicleFacade } from './store/facades/vehicle.facade';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {
  vehicles$: Observable<IVehicle[]> = this.vehicleFacade.vehicles$;

  constructor(private vehicleFacade: VehicleFacade) {}

  ngOnInit() {
    this.vehicleFacade.getVehicles();
  }
}
