import { createReducer, on } from '@ngrx/store';
import { IState } from '../../models/IState';
import {
  deleteAction,
 loadUsersFailure,
 loadUsersSuccess
} from './users.actions';

export const initialState: IState = {
  users: [],
  status: false,
};
export const usersReducer = createReducer(
  initialState,
  on(deleteAction, (state) => ({ ...state })),
  on( loadUsersSuccess, (state, { user }) => ({
    ...state,
    user,
  })),
  on( loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
