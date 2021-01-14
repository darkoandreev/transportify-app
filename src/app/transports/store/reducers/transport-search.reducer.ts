import * as fromActions from '../actions/transport-search.actions';

import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { ApplicantStatusEnum, IApplicant } from '../models/applicant.model';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import {
  applyForTransportSuccess,
  updateApplicantStatusSuccess,
} from '../actions/transports.actions';

import { IDriverTransport } from '../models/drive.transport.model';
import { IState } from '.';
import produce from 'immer';

export interface ITransportSearchResultState extends EntityState<IDriverTransport> {
  error?: Error;
}

export const adapter: EntityAdapter<IDriverTransport> = createEntityAdapter<IDriverTransport>({
  selectId: (transport) => transport.id,
});

const initialState: ITransportSearchResultState = adapter.getInitialState();

const featureReducer = createReducer(
  initialState,
  on(fromActions.searchDriveTransportSuccess, (state, { transports }) =>
    adapter.setAll(transports, state)
  ),
  on(fromActions.searchDriveTransportFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.resetSearchResult, (state) => adapter.removeAll(state)),
  on(applyForTransportSuccess, (state, { applicant }) => {
    return produce(state, (draftState) => {
      const idx = (draftState.ids as number[]).find((id) => id === applicant.driveTransportId);

      const searchTransportResult = draftState.entities[idx];
      searchTransportResult.applicants.push(applicant);

      if (applicant.applicantStatus === ApplicantStatusEnum.ACCEPTED) {
        searchTransportResult.availableSeats -= 1;
      } else if (applicant.applicantStatus === ApplicantStatusEnum.REJECTED) {
        searchTransportResult.availableSeats += 1;
      }
    });
  })
);

export function transportSearchReducer(
  state: ITransportSearchResultState | undefined,
  action: Action
) {
  return featureReducer(state, action);
}

const selectState = createFeatureSelector<IState>('transport');

const selectSearchResultState = createSelector(selectState, (state) => state.searchResults);

const { selectAll } = adapter.getSelectors(selectSearchResultState);

export const getAll = selectAll;
