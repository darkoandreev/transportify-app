import * as fromActions from '../actions/vehicle.actions';

import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { IVehicle } from '../models/vehicle.model';

export interface IVehicleState extends EntityState<IVehicle> {
  error: Error;
  selectedVehicle: IVehicle;
}

export const adapter: EntityAdapter<IVehicle> = createEntityAdapter<IVehicle>();

const initialState: IVehicleState = adapter.getInitialState({
  error: null,
  selectedVehicle: null,
});

const vehicleFeatureReducer = createReducer(
  initialState,
  on(fromActions.addVehicleSuccess, (state, { vehicle }) => adapter.addOne(vehicle, state)),
  on(fromActions.addVehicleFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.updateVehicleSuccess, (state, { vehicle }) =>
    adapter.updateOne({ id: vehicle.id, changes: vehicle }, state)
  ),
  on(fromActions.updateVehicleFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.getVehiclesSuccess, (state, { vehicles }) => adapter.addMany(vehicles, state)),
  on(fromActions.getVehiclesFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.getVehicleSuccess, (state, { vehicle }) => ({
    ...state,
    selectedVehicle: vehicle,
  })),
  on(fromActions.getVehicleFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.deleteVehicleSuccess, (state, { vehicleId }) =>
    adapter.removeOne(vehicleId, state)
  ),
  on(fromActions.deleteVehicleFailed, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function vehicleReducer(state: IVehicleState | undefined, action: Action) {
  return vehicleFeatureReducer(state, action);
}
