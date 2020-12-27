import * as fromTransport from './transport.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface IState {
  readonly transport: fromTransport.ITransportState;
}

export const reducerMap: ActionReducerMap<IState> = {
  transport: fromTransport.transportReducer,
};
