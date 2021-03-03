import { Component, OnInit } from '@angular/core';

import { IDriverTransport } from '../store/models/drive.transport.model';
import { IRideTransport } from '../store/models/ride-transport.model';
import { IVehicle } from 'src/app/vehicle/store/models/vehicle.model';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { TransportFacade } from '../store/facades/transport.facade';
import { VehicleFacade } from 'src/app/vehicle/store/facades/vehicle.facade';

@Component({
  selector: 'app-transport-details',
  templateUrl: './transport-details.component.html',
  styleUrls: ['./transport-details.component.scss'],
})
export class TransportDetailsComponent implements OnInit {
  vehicles$: Observable<IVehicle[]> = this.vehicleFacade.vehicles$;
  type = 'ride';

  constructor(
    public modalController: ModalController,
    private vehicleFacade: VehicleFacade,
    private transportFacade: TransportFacade
  ) {}

  ngOnInit(): void {
    this.vehicleFacade.getVehicles();
  }

  onSubmit(transport: IRideTransport): void {
    this.transportFacade.createRideTransport(transport);
  }

  onDriverFormSubmit(transport: IDriverTransport): void {
    this.transportFacade.createDriveTransport(transport);
  }
}
