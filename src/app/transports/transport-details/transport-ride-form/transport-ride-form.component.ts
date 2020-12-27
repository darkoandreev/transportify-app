import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IRideTransport } from '../../store/models/ride-transport.model';
import { IVehicle } from 'src/app/vehicle/store/models/vehicle.model';

@Component({
  selector: 'app-transport-ride-form',
  templateUrl: './transport-ride-form.component.html',
  styleUrls: ['./transport-ride-form.component.scss'],
})
export class TransportRideFormComponent {
  @Input() vehicles: IVehicle[];
  @Output() submitForm = new EventEmitter<IRideTransport>();

  rideForm: FormGroup;
  readonly seats: number[] = [1, 2, 3, 4, 5, 6, 7];

  constructor(private fb: FormBuilder) {
    this.init();
  }

  private init(): void {
    this.rideForm = this.fb.group({
      cityFrom: ['', Validators.required],
      cityTo: ['', Validators.required],
      numberOfSeats: 1,
      transportDate: ['', Validators.required],
    });
  }
}
