import * as jwtDecode from 'jwt-decode';

import { HttpClient, HttpParams } from '@angular/common/http';
import { ILoginResponse, IToken, IUser } from '../models';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private storage: Storage) {}

  login(user: Partial<IUser>): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`${environment.API_URL}user/login`, user, {
      withCredentials: true,
    });
  }

  register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${environment.API_URL}user/signup`, user, {
      withCredentials: true,
    });
  }

  updateUserDetails(user: Partial<IUser>): Observable<IUser> {
    return this.http.put<IUser>(`${environment.API_URL}user/user-details`, user, {
      withCredentials: true,
    });
  }

  getUserDetails(username: string): Observable<IUser> {
    let params = new HttpParams();

    if (username) {
      params = params.append('username', username);
    }

    return this.http.get<IUser>(`${environment.API_URL}user${username ? '/user-details' : ''}`, {
      withCredentials: true,
      params,
    });
  }

  isRegistrationFinished(user: IUser): boolean {
    return !!(
      user.firstName &&
      user.lastName &&
      user.phoneNumber &&
      user.gender &&
      user.dateOfBirth
    );
  }

  async getUser(): Promise<IUser> {
    return await this.storage.get('parsedToken');
  }

  decodeToken(token: string): IUser {
    return JSON.parse(jwtDecode.default<IToken>(token).sub) as IUser;
  }
}
