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

// LOGOUT
export const logOut = createAction('[Logout] User logout');
export const logOutSuccess = createAction('[Logout] User logout success');

// IS AUTHENTICATED
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

// GET USER DETAILS
export const getUserDetails = createAction(
  '[Profile Page] Get user details',
  props<{ username: string }>()
);
export const getUserDetailsSuccess = createAction(
  '[Profile Page] Get user details Success',
  props<{ user: IUser }>()
);
export const getUserDetailsFailed = createAction(
  '[Profile Page] Get user details Failed',
  props<{ error: IAuthError }>()
);

export const confirmAccount = createAction(
  '[Confirm account] Confirm your account',
  props<{ confirmationToken: string }>()
);
export const confirmAccountSuccess = createAction(
  '[Confirm account] Confirm your account success',
  props<{ user: IUser }>()
);
export const confirmAccountFailed = createAction(
  '[Confirm account] Confirm your account failed',
  (error: Error) => ({ error })
);
