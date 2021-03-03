import * as fromActions from '../actions/transport-history.actions';

import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { IState } from '.';
import { ITransportHistory } from '../models/transport-history.model';

export interface ITransportHistoryState extends EntityState<ITransportHistory> {
  error?: Error;
}

export const adapter: EntityAdapter<ITransportHistory> = createEntityAdapter<ITransportHistory>({
  selectId: (transport) => transport.id,
});

const initialState: ITransportHistoryState = adapter.getInitialState();

const featureReducer = createReducer(
  initialState,
  on(fromActions.getTransportHistorySuccess, (state, { transports }) =>
    adapter.setAll(transports, state)
  ),
  on(fromActions.getTransportHistoryFail, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function transportHistoryReducer(state: ITransportHistoryState | undefined, action: Action) {
  return featureReducer(state, action);
}

const selectState = createFeatureSelector<IState>('transport');

const selectTransportHistoryState = createSelector(selectState, (state) => state.transportHistory);

const { selectAll } = adapter.getSelectors(selectTransportHistoryState);

export const getAll = selectAll;
