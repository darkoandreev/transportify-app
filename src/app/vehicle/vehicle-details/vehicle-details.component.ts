import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { IVehicle } from '../store/models/vehicle.model';
import { Observable } from 'rxjs';
import { VehicleFacade } from '../store/facades/vehicle.facade';

@Component({
  selector: 'app-car-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
})
export class VehicleDetailsComponent implements OnInit {
  vehicle$: Observable<IVehicle> = this.vehicleFacade.vehicle$;
  carDetailsForm: FormGroup;
  vehicleId: number;

  constructor(
    private fb: FormBuilder,
    private vehicleFacade: VehicleFacade,
    private route: ActivatedRoute
  ) {
    this.init();
  }

  ngOnInit() {
    this.vehicleId = this.route.snapshot.queryParams?.vehicleId;

    if (this.vehicleId) {
      this.vehicleFacade.getVehicle(this.vehicleId);
    }
  }

  onSubmit(vehicle: IVehicle): void {
    if (this.vehicleId) {
      vehicle = {
        ...vehicle,
        id: this.vehicleId,
      };
      this.vehicleFacade.updateVehicle(vehicle);
    } else {
      this.vehicleFacade.addVehicle(vehicle);
    }
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
