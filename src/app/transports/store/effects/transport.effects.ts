import * as fromActions from '../actions/transports.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { TransportService } from '../services/transports.service';

@Injectable()
export class TransportEffect {
  constructor(private actions$: Actions, private transportService: TransportService) {}

  createRideTransport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.createRideTransport),
      switchMap(({ transport }) =>
        this.transportService.createRideTransport(transport).pipe(
          map((createdTransport) =>
            fromActions.createRideTransportSuccess({ transport: createdTransport })
          ),
          catchError((error) => [fromActions.createRideTransportFailed(error)])
        )
      )
    )
  );

  getRideTransports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getRideTransport),
      switchMap(() =>
        this.transportService.getAllRideTransports().pipe(
          map((transports) => fromActions.getRideTransportSuccess({ transports })),
          catchError((error) => [fromActions.getTransportFailed(error)])
        )
      )
    )
  );
}
