import { Component, OnInit } from '@angular/core';

import { AlertService } from '../shared/services/alert.service';
import { IVehicle } from './store/models/vehicle.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { VehicleFacade } from './store/facades/vehicle.facade';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {
  vehicles$: Observable<IVehicle[]> = this.vehicleFacade.vehicles$;

  constructor(
    private vehicleFacade: VehicleFacade,
    private alertService: AlertService,
    public router: Router
  ) {}

  ngOnInit() {
    this.vehicleFacade.getVehicles();
  }

  deleteVehicle(vehicleId: number): void {
    this.alertService.confirmAlert('Delete', 'Are you sure you want to delete this vehicle?', () =>
      this.vehicleFacade.deleteVehicle(vehicleId)
    );
  }

  editVehicle(vehicleId: number): void {
    this.router.navigate(['vehicle', 'details'], { queryParams: { vehicleId } });
  }
}
