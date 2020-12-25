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

// DELETE VEHICLE
export const deleteVehicle = createAction(
  '[Vehicle Page] Delete vehicle',
  props<{ vehicleId: number }>()
);
export const deleteVehicleSuccess = createAction(
  '[Vehicle Page] Delete vehicle success',
  props<{ vehicleId: number }>()
);
export const deleteVehicleFailed = createAction(
  '[Vehicle Page] Delete vehicle failed',
  (error: Error) => ({ error })
);

// GET VEHICLE
export const getVehicle = createAction(
  '[Vehicle Page] Get vehicle',
  props<{ vehicleId: number }>()
);
export const getVehicleSuccess = createAction(
  '[Vehicle Page] Get vehicle success',
  props<{ vehicle: IVehicle }>()
);
export const getVehicleFailed = createAction('[Vehicle Page] Get vehicle', (error: Error) => ({
  error,
}));

// UPDATE VEHICLE
export const updateVehicle = createAction(
  '[Vehicle Page] Update vehicle',
  props<{ vehicle: IVehicle }>()
);
export const updateVehicleSuccess = createAction(
  '[Vehicle Page] Update vehicle success',
  props<{ vehicle: IVehicle }>()
);
export const updateVehicleFailed = createAction(
  '[Vehicle Page] Update vehicle',
  (error: Error) => ({ error })
);
