import * as fromActions from '../actions/user-rating.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { UserRatingService } from '../services/user-rating.service';

@Injectable()
export class UserRatingEffect {
  constructor(private actions$: Actions, private userRatingService: UserRatingService) {}

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getUserRatings),
      switchMap(({ ratingValue, userId }) =>
        this.userRatingService.getAllByUserId(ratingValue, userId).pipe(
          map((userRatings) => fromActions.getUserRatingsSuccess({ userRatings })),
          catchError((error) => [fromActions.getUserRatingsFailed(error)])
        )
      )
    )
  );

  getAllOccurrences$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getUserRatingOccurrences),
      switchMap(({ userId }) =>
        this.userRatingService.getAllOccurrences(userId).pipe(
          map((occurrences) => fromActions.getUserRatingOccurrencesSuccess({ occurrences })),
          catchError((error) => [fromActions.getUserRatingOccurrencesFailed(error)])
        )
      )
    )
  );

  rateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.rateUser),
      switchMap(({ rateUser }) =>
        this.userRatingService.rateUser(rateUser).pipe(
          map((userRating) => fromActions.rateUserSuccess({ userRating })),
          catchError((error) => [fromActions.rateUserFailed(error)])
        )
      )
    )
  );
}
