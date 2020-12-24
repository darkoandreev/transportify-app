import * as fromActions from '../actions/vehicle.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';

@Injectable()
export class VehicleEffect {
  constructor(private actions$: Actions, private vehicleService: VehicleService) {}

  addVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addVehicle),
      switchMap(({ vehicle }) =>
        this.vehicleService.addVehicle(vehicle).pipe(
          map((response) => fromActions.addVehicleSuccess({ vehicle: response })),
          catchError((error) => [fromActions.addVehicleFailed(error)])
        )
      )
    )
  );

  getVehicles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getVehicles),
      switchMap(() =>
        this.vehicleService.getVehicles().pipe(
          map((vehicles) => fromActions.getVehiclesSuccess({ vehicles })),
          catchError((error) => [fromActions.getVehiclesFailed(error)])
        )
      )
    )
  );
}
