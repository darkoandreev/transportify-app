import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IVehicle } from 'src/app/vehicle/store/models/vehicle.model';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport-drive-form',
  templateUrl: './transport-drive-form.component.html',
  styleUrls: ['./transport-drive-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportDriveFormComponent {
  @Input() vehicles: IVehicle[];

  constructor(private router: Router, private modalController: ModalController) {}

  navigateToAddVehicle(): void {
    this.router.navigate(['vehicle/details']);
    this.modalController.dismiss();
  }
}
