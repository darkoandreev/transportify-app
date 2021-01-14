import { createAction, props } from '@ngrx/store';

import { IDriverTransport } from '../models/drive.transport.model';
import { IRideTransport } from '../models/ride-transport.model';

// SEARCH DRIVE TRANSPORTS
export const searchDriveTransports = createAction(
  '[Transports Page] Search drive transports',
  props<{ transport: IRideTransport }>()
);
export const searchDriveTransportSuccess = createAction(
  '[Transports Page] Search drive transports success',
  props<{ transports: IDriverTransport[] }>()
);
export const searchDriveTransportFailed = createAction(
  '[Transports Page] Search drive transports failed',
  (error: Error) => ({ error })
);

// RESET
export const resetSearchResult = createAction('[Transports page] Reset search results');
