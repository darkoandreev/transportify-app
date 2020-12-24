import * as fromVehicle from './vehicle.reducers';

import { ActionReducerMap } from '@ngrx/store';

export interface IState {
  readonly vehicle: fromVehicle.IVehicleState;
}

export const reducerMap: ActionReducerMap<IState> = {
  vehicle: fromVehicle.vehicleReducer,
};
