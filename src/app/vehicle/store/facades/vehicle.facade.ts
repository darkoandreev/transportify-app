import * as fromActions from '../actions/vehicle.actions';

import { Store, select } from '@ngrx/store';
import { getVehicle, getVehicles } from '../selectors';

import { IState } from '../reducers';
import { IVehicle } from '../models/vehicle.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VehicleFacade {
  vehicles$: Observable<IVehicle[]> = this.store.pipe(select(getVehicles));
  vehicle$: Observable<IVehicle> = this.store.pipe(select(getVehicle));

  constructor(private store: Store<IState>) {}

  addVehicle(vehicle: IVehicle): void {
    this.store.dispatch(fromActions.addVehicle({ vehicle }));
  }

  getVehicles(): void {
    this.store.dispatch(fromActions.getVehicles());
  }

  getVehicle(vehicleId: number): void {
    this.store.dispatch(fromActions.getVehicle({ vehicleId }));
  }

  deleteVehicle(vehicleId: number): void {
    this.store.dispatch(fromActions.deleteVehicle({ vehicleId }));
  }

  updateVehicle(vehicle: IVehicle): void {
    this.store.dispatch(fromActions.updateVehicle({ vehicle }));
  }
}
