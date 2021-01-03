import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IDriverTransport } from '../../store/models/drive.transport.model';
import { IVehicle } from 'src/app/vehicle/store/models/vehicle.model';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport-drive-form',
  templateUrl: './transport-drive-form.component.html',
  styleUrls: ['./transport-drive-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportDriveFormComponent {
  private _vehicles: IVehicle[];

  @Output() submitForm = new EventEmitter<IDriverTransport>();

  @Input()
  get vehicles(): IVehicle[] {
    return this._vehicles;
  }
  set vehicles(vehicles: IVehicle[]) {
    this._vehicles = vehicles;

    if (vehicles?.length) {
      this.availableNumberOfSeats = Array.from(
        Array(this.getmaxNumberOfSeats(vehicles)),
        (_, x) => x + 1
      );
    }
  }

  driveForm: FormGroup;
  availableNumberOfSeats: number[];
  today = new Date();

  constructor(
    private router: Router,
    private modalController: ModalController,
    private fb: FormBuilder
  ) {
    this.init();
  }

  onSubmit(): void {
    const driveTransport: IDriverTransport = this.driveForm.value;
    driveTransport.transportTime = `${new Date(driveTransport.transportTime).getHours()}:${new Date(
      driveTransport.transportTime
    ).getMinutes()}`;
    this.submitForm.next(driveTransport);
    console.log(driveTransport);
  }

  navigateToAddVehicle(): void {
    this.router.navigate(['vehicle/details']);
    this.modalController.dismiss();
  }

  private getmaxNumberOfSeats(vehicles: IVehicle[]): number {
    const numberOfSeats = vehicles.map((vehicle) => vehicle.numberOfSeats);
    return Math.max(...numberOfSeats);
  }

  private init(): void {
    this.driveForm = this.fb.group({
      cityFrom: ['', Validators.required],
      cityTo: ['', Validators.required],
      transportTime: ['', Validators.required],
      transportDate: ['', Validators.required],
      transportPrice: ['', Validators.required],
      availableSeats: ['', Validators.required],
      additionalDetails: '',
      vehicleId: '',
    });
  }
}
