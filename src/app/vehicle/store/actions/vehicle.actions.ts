import { createAction, props } from '@ngrx/store';

import { IVehicle } from '../models/vehicle.model';

// ADD VEHICLE
export const addVehicle = createAction(
  '[Vehicle Page] Add vehicle',
  props<{ vehicle: IVehicle }>()
);
export const addVehicleSuccess = createAction(
  '[Vehicle Page] Add vehicle success',
  props<{ vehicle: IVehicle }>()
);
export const addVehicleFailed = createAction(
  '[Vehicle Page] Add vehicle failed',
  (error: Error) => ({ error })
);

// GET VEHICLES
export const getVehicles = createAction('[Vehicle Page] Get vehicles');
export const getVehiclesSuccess = createAction(
  '[Vehicle Page] Get vehicles success',
  props<{ vehicles: IVehicle[] }>()
);
export const getVehiclesFailed = createAction(
  '[Vehicle Page] Get vehicles failed',
  (error: Error) => ({ error })
);
