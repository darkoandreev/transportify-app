import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IVehicle } from '../../store/models/vehicle.model';

@Component({
  selector: 'app-vehicle-details-form',
  templateUrl: './vehicle-details-form.component.html',
  styleUrls: ['./vehicle-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleDetailsFormComponent {
  @Output() formSubmit = new EventEmitter<IVehicle>();
  @Input()
  get vehicle(): IVehicle {
    return this._vehicle;
  }
  set vehicle(vehicle: IVehicle) {
    if (vehicle) {
      this._vehicle = vehicle;
      this.carDetailsForm.patchValue(vehicle);
    }
  }

  carDetailsForm: FormGroup;

  private _vehicle: IVehicle;

  constructor(private fb: FormBuilder) {
    this.init();
  }

  private init(): void {
    this.carDetailsForm = this.fb.group({
      model: ['', Validators.required],
      brand: ['', Validators.required],
      image: ['', Validators.required],
      color: ['', Validators.required],
      yearOfProduction: ['', Validators.required],
      numberOfSeats: ['', Validators.required],
      hasLuggageSpace: true,
      hasAirCondition: false,
      smokingAllowed: false,
      foodAllowed: false,
      drinkAllowed: false,
      petAllowed: false,
    });
  }
}
