import { ActivatedRoute, Router } from '@angular/router';

import { Component } from '@angular/core';
import { IDriverTransport } from './store/models/drive.transport.model';
import { IRideTransport } from './store/models/ride-transport.model';
import { ModalController } from '@ionic/angular';
import { TransportDetailsComponent } from './transport-details/transport-details.component';
import { TransportFacade } from './store/facades/transport.facade';
import { TransportType } from './store/models/enums/transport-type.enum';

@Component({
  selector: 'app-tab1',
  templateUrl: 'transports.page.html',
  styleUrls: ['transports.page.scss'],
})
export class TransportsPage {
  type = TransportType.RIDE;

  constructor(
    private modalController: ModalController,
    public transportFacade: TransportFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ionViewWillEnter(): void {
    this.transportFacade.getAllRideTransports();
  }

  segmentChange(): void {
    if (this.type === TransportType.DRIVE) {
      this.transportFacade.getAllDriveTransports();
    } else if (this.type === TransportType.RIDE) {
      this.transportFacade.getAllRideTransports();
    }
  }

  rideItemClicked(transport: IRideTransport): void {
    this.router.navigate(['results', transport.id], { relativeTo: this.activatedRoute });
  }

  driveItemClicked(transport: IDriverTransport): void {
    this.router.navigate(['drive-transport', transport.id], { relativeTo: this.activatedRoute });
  }

  async addNewTransport(): Promise<void> {
    const modal = await this.modalController.create({
      component: TransportDetailsComponent,
    });

    await modal.present();
  }
}
