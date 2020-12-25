import { Component, OnInit } from '@angular/core';

import { IVehicle } from 'src/app/vehicle/store/models/vehicle.model';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { VehicleFacade } from 'src/app/vehicle/store/facades/vehicle.facade';

@Component({
  selector: 'app-transport-drive-form',
  templateUrl: './transport-drive-form.component.html',
  styleUrls: ['./transport-drive-form.component.scss'],
})
export class TransportDriveFormComponent implements OnInit {
  vehicles$: Observable<IVehicle[]> = this.vehicleFacade.vehicles$;

  constructor(
    private vehicleFacade: VehicleFacade,
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.vehicleFacade.getVehicles();
  }

  navigateToAddVehicle(): void {
    this.router.navigate(['vehicle/details']);
    this.modalController.dismiss();
  }
}
