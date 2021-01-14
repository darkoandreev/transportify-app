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

  applyForTransport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.applyForTransport),
      switchMap(({ transport }) =>
        this.transportService.applyForTransport(transport).pipe(
          map((applicant) => fromActions.applyForTransportSuccess({ applicant })),
          catchError((error) => [fromActions.applyForTransportFailed(error)])
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
