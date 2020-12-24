import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransportDetailsComponent } from './transport-details/transport-details.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'transports.page.html',
  styleUrls: ['transports.page.scss'],
})
export class TransportsPage {
  type = 'ride';

  constructor(private modalController: ModalController) {}

  segmentChanged(event): void {
    console.log(event);
  }

  async addNewTransport(): Promise<void> {
    const modal = await this.modalController.create({
      component: TransportDetailsComponent,
    });

    await modal.present();
  }
}
