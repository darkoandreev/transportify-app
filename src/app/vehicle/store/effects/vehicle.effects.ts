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

  getVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getVehicle),
      switchMap(({ vehicleId }) =>
        this.vehicleService.getVehicle(vehicleId).pipe(
          map((vehicle) => fromActions.getVehicleSuccess({ vehicle })),
          catchError((error) => [fromActions.getVehicleFailed(error)])
        )
      )
    )
  );

  deleteVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteVehicle),
      switchMap(({ vehicleId }) =>
        this.vehicleService.deleteVehicle(vehicleId).pipe(
          map((vehicle) => fromActions.deleteVehicleSuccess({ vehicleId })),
          catchError((error) => [fromActions.deleteVehicleFailed(error)])
        )
      )
    )
  );

  updateVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.updateVehicle),
      switchMap(({ vehicle }) =>
        this.vehicleService.updateVehicle(vehicle).pipe(
          map((updatedVehicle) => fromActions.updateVehicleSuccess({ vehicle: updatedVehicle })),
          catchError((error) => [fromActions.updateVehicleFailed(error)])
        )
      )
    )
  );
}
