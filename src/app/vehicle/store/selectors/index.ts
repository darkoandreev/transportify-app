import { IVehicleState, adapter } from '../reducers/vehicle.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectVehicleState = createFeatureSelector<IVehicleState>('vehicle');

export const { selectEntities, selectAll, selectIds, selectTotal } = adapter.getSelectors(
  selectVehicleState
);

const selectAllVehicles = selectAll;

export const getVehicles = createSelector(selectVehicleState, selectAllVehicles);
