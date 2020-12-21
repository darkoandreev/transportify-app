import { IAuthError, ILoginResponse, IUser } from '../models';
import { createAction, props } from '@ngrx/store';

// LOGIN ACTIONS
export const login = createAction('[Login Page] Login', props<{ user: Partial<IUser> }>());
export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ response: ILoginResponse }>()
);
export const loginFailed = createAction(
  '[Login Page] Login Failed',
  props<{ error: IAuthError }>()
);
export const isAuthenticated = createAction('[Login Page] Is user authenticated');
export const isAuthenticatedSuccess = createAction('[Login Page] Is user authenticated success');
export const isAuthenticatedFailed = createAction('[Login Page] Is user authenticated failed');

// SIGNUP ACTIONS
export const signUp = createAction('[SignUp Page] SignUp', props<{ user: IUser }>());
export const signUpSuccess = createAction('[SignUp Page] SignUp Success', props<{ user: IUser }>());
export const signUpFailed = createAction(
  '[SignUp Page] SignUp Failed',
  props<{ error: IAuthError }>()
);

// UPDATE USER DETAILS ACTIONS
export const updateUserDetails = createAction(
  '[User details Page] Update user details',
  props<{ user: Partial<IUser> }>()
);
export const updateUserDetailsSuccess = createAction(
  '[User details Page] Update user details Success',
  props<{ user: IUser }>()
);
export const updateUserDetailsFailed = createAction(
  '[User details Page] Update user details Failed',
  props<{ error: IAuthError }>()
);
