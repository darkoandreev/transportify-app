import { Component } from '@angular/core';
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

  constructor(private modalController: ModalController, public transportFacade: TransportFacade) {}

  ionViewWillEnter(): void {
    this.transportFacade.getAllRideTransports();
  }

  async addNewTransport(): Promise<void> {
    const modal = await this.modalController.create({
      component: TransportDetailsComponent,
    });

    await modal.present();
  }
}
