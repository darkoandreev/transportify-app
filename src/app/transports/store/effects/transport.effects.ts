import * as fromActions from '../actions/transports.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { TransportService } from '../services/transports.service';
import { pipe } from 'rxjs';

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

  createDriveTransport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.createDriveTransport),
      switchMap(({ transport }) =>
        this.transportService.createDriveTransport(transport).pipe(
          map((createdTransport) =>
            fromActions.createDriveTransportSuccess({ transport: createdTransport })
          ),
          catchError((error) => [fromActions.createDriveTransportFailed(error)])
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
          catchError((error) => {
            console.log(error);
            return [fromActions.getTransportFailed(error)];
          })
        )
      )
    )
  );

  getDriveTransports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getDriveTransports),
      switchMap(() =>
        this.transportService.getAllDriveTransports().pipe(
          map((transports) => fromActions.getDriveTransportSuccess({ transports })),
          catchError((error) => [fromActions.getDriveTransportFailed(error)])
        )
      )
    )
  );

  getDriveTransport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getDriveTransportById),
      switchMap(({ driveTransportId }) =>
        this.transportService.getDriveTransportById(driveTransportId).pipe(
          map((transport) => fromActions.getDriveTransportByIdSuccess({ transport })),
          catchError((error) => [fromActions.getDriveTransportByIdFailed(error)])
        )
      )
    )
  );

  searchDriveTransports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.searchDriveTransports),
      switchMap(({ transport }) =>
        this.transportService.searchDriveTransports(transport).pipe(
          map((transports) => fromActions.searchDriveTransportSuccess({ transports })),
          catchError((error) => [fromActions.searchDriveTransportFailed(error)])
        )
      )
    )
  );

  applyForTransport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.applyForTransport),
      switchMap(({ transport }) =>
        this.transportService.applyForTransport(transport).pipe(
          map((applicant) => fromActions.applyForTransportSuccess({ applicant })),
          catchError((error) => [fromActions.searchDriveTransportFailed(error)])
        )
      )
    )
  );

  updateApplicantStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.updateApplicantStatus),
      switchMap(({ applicant }) =>
        this.transportService.updateApplicantStatus(applicant).pipe(
          map((updatedApplicant) =>
            fromActions.updateApplicantStatusSuccess({ applicant: updatedApplicant })
          ),
          catchError((error) => [fromActions.updateApplicantStatusFailed(error)])
        )
      )
    )
  );
}
