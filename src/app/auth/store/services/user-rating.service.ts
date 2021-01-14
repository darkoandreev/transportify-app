import { HttpClient, HttpParams } from '@angular/common/http';
import { IUser, IUserRating, IUserRatingOccuranceResponse } from '../models';

import { IRateUserRequest } from '../models/request/rate-user.request';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserRatingService {
  constructor(private http: HttpClient) {}

  getAllByUserId(ratingValue: number, userId?: string): Observable<IUserRating[]> {
    let params = new HttpParams();
    if (userId) {
      params = params.append('ratedUserId', userId);
    }
    return this.http.get<IUserRating[]>(`${environment.API_URL}user-rating/${ratingValue}`, {
      params,
    });
  }

  getAllOccurrences(userId?: string): Observable<IUserRatingOccuranceResponse> {
    let params = new HttpParams();
    if (userId) {
      params = params.append('ratedUserId', userId);
    }
    return this.http.get<IUserRatingOccuranceResponse>(
      `${environment.API_URL}user-rating/occurrences`,
      { params }
    );
  }

  rateUser(rateUserRequest: IRateUserRequest): Observable<IUserRating> {
    return this.http.post<IUserRating>(`${environment.API_URL}user-rating`, rateUserRequest);
  }
}
