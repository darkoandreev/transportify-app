import * as fromActions from '../actions/vehicle.actions';

import { Store, select } from '@ngrx/store';

import { IState } from '../reducers';
import { IVehicle } from '../models/vehicle.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getVehicles } from '../selectors';

@Injectable({ providedIn: 'root' })
export class VehicleFacade {
  vehicles$: Observable<IVehicle[]> = this.store.pipe(select(getVehicles));
  constructor(private store: Store<IState>) {}

  addVehicle(vehicle: IVehicle): void {
    this.store.dispatch(fromActions.addVehicle({ vehicle }));
  }

  getVehicles(): void {
    this.store.dispatch(fromActions.getVehicles());
  }
}
