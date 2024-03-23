import { createReducer, on } from '@ngrx/store';
import { IState } from '../../models/IState';
import {
  deleteAction,
 loadUsersFailure,
 loadUsersSuccess
} from './users.actions';

export const initialState: IState = {
  users: [],

};
export const usersReducer = createReducer(
  initialState,
  on( loadUsersSuccess, (state, { user }) => ({
    ...state,
    user,
  })),
  on( loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
