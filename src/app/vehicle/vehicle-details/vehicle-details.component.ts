import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IVehicle } from '../store/models/vehicle.model';
import { VehicleFacade } from '../store/facades/vehicle.facade';

@Component({
  selector: 'app-car-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
})
export class VehicleDetailsComponent implements OnInit {
  carDetailsForm: FormGroup;

  constructor(private fb: FormBuilder, private vehicleFacade: VehicleFacade) {
    this.init();
  }

  ngOnInit() {}

  onSubmit(vehicle: IVehicle): void {
    this.vehicleFacade.addVehicle(vehicle);
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
      isSmokingAllowed: false,
      isFoodAllowed: false,
      isDrinkAllowed: false,
      isPetAllowed: false,
    });
  }
}
