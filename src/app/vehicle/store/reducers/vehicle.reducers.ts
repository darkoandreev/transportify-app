import * as fromActions from '../actions/vehicle.actions';

import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { IVehicle } from '../models/vehicle.model';

export interface IVehicleState extends EntityState<IVehicle> {
  error: Error;
}

export const adapter: EntityAdapter<IVehicle> = createEntityAdapter<IVehicle>();

const initialState: IVehicleState = adapter.getInitialState({
  error: null,
});

const vehicleFeatureReducer = createReducer(
  initialState,
  on(fromActions.addVehicleSuccess, (state, { vehicle }) => adapter.addOne(vehicle, state)),
  on(fromActions.addVehicleFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.getVehiclesSuccess, (state, { vehicles }) => adapter.addMany(vehicles, state)),
  on(fromActions.getVehiclesFailed, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function vehicleReducer(state: IVehicleState | undefined, action: Action) {
  return vehicleFeatureReducer(state, action);
}
