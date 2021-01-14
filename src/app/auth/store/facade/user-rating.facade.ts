import * as fromActions from '../actions/user-rating.actions';
import * as fromSelectors from '../reducers/user-rating.reducer';

import { IUserRating, IUserRatingOccuranceResponse } from '../models';
import { Store, select } from '@ngrx/store';

import { IRateUserRequest } from '../models/request/rate-user.request';
import { IState } from '../reducers';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserRatingFacade {
  userRatings$: Observable<IUserRating[]> = this.store.pipe(select(fromSelectors.getAllRatings));
  ratingOccurrences$: Observable<IUserRatingOccuranceResponse> = this.store.pipe(
    select(fromSelectors.getAllRatingOccurrences)
  );

  constructor(private store: Store<IState>) {}

  getAll(ratingValue: number, userId?: string): void {
    this.store.dispatch(fromActions.getUserRatings({ ratingValue, userId }));
  }

  getAllOccurrences(userId?: string): void {
    this.store.dispatch(fromActions.getUserRatingOccurrences({ userId }));
  }

  rateUser(rateUser: IRateUserRequest): void {
    this.store.dispatch(fromActions.rateUser({ rateUser }));
  }
}
