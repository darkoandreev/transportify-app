import * as fromActions from '../actions/ride-transport.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TransportService } from '../services/transports.service';

@Injectable({ providedIn: 'root' })
export class RideTransportEffect {
  constructor(
    private actions$: Actions,
    private transportService: TransportService,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

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
      ofType(fromActions.getRideTransports),
      switchMap(() =>
        this.transportService.getAllRideTransports().pipe(
          map((transports) => fromActions.getRideTransportsSuccess({ transports })),
          catchError((error) => [fromActions.getTransportsFailed(error)])
        )
      )
    )
  );

  getRideTransport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getRideTransport),
      switchMap(({ rideTransportId }) =>
        this.transportService.getRideTransportById(rideTransportId).pipe(
          map((rideTransport) => fromActions.getRideTransportSuccess({ rideTransport })),
          catchError((error) => [fromActions.getTransportFailed(error)])
        )
      )
    )
  );

  deleteRideTransport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteRideTransport),
      switchMap(({ rideTransportId }) =>
        this.transportService.deleteRideTransport(rideTransportId).pipe(
          map((rideTransport) => fromActions.deleteRideTransportSuccess({ rideTransport })),
          catchError((error) => [fromActions.deleteRideTransportFailed(error)])
        )
      )
    )
  );

  createRideTransportSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.createRideTransportSuccess),
        tap(({ transport }) => {
          this.router.navigate(['tabs/transports/results/', transport.id]);
          this.modalCtrl.dismiss();
        })
      ),
    {
      dispatch: false,
    }
  );
}
