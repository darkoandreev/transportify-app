import { createAction, props } from '@ngrx/store';

import { ITransportHistory } from '../models/transport-history.model';

export const getTransportHistory = createAction('[Transport History] Get transport history');
export const getTransportHistorySuccess = createAction(
  '[Transport History] Get transport history success',
  props<{ transports: ITransportHistory[] }>()
);
export const getTransportHistoryFail = createAction(
  '[Transport History] Get transport history failed',
  (error: Error) => ({ error })
);
