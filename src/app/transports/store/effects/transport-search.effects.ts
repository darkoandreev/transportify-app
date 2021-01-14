import * as fromActions from '../actions/transport-search.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { TransportService } from '../services/transports.service';

@Injectable({ providedIn: 'root' })
export class TransportSearchEffect {
  constructor(private actions$: Actions, private transportService: TransportService) {}

  searchDriveTransports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.searchDriveTransports),
      mergeMap(({ transport }) =>
        this.transportService.searchDriveTransports(transport).pipe(
          map((transports) => fromActions.searchDriveTransportSuccess({ transports })),
          catchError((error) => [fromActions.searchDriveTransportFailed(error)])
        )
      )
    )
  );
}
