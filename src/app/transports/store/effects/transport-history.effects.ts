import * as fromActions from '../actions/transport-history.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { TransportService } from '../services/transports.service';

@Injectable()
export class TransportHistoryEffect {
  constructor(private actions$: Actions, private transportService: TransportService) {}

  getTransportHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getTransportHistory),
      switchMap(() =>
        this.transportService.getHistory().pipe(
          map((transports) => fromActions.getTransportHistorySuccess({ transports })),
          catchError((error) => [fromActions.getTransportHistoryFail(error)])
        )
      )
    )
  );
}
