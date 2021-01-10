import * as fromActions from '../actions/transports.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TransportService } from '../services/transports.service';

@Injectable()
export class TransportEffect {
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

  deleteDriveTransport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteDriveTransport),
      switchMap(({ driveTransportId }) =>
        this.transportService.deleteDriveTransport(driveTransportId).pipe(
          map((driveTransport) => fromActions.deleteDriveTransportSuccess({ driveTransport })),
          catchError((error) => [fromActions.deleteDriveTransportFailed(error)])
        )
      )
    )
  );

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
