import { createReducer, on } from '@ngrx/store';
import { IState } from '../../models/IState';
import { IUsers } from '../../models/IUser';
import {
  DeleteUserSuccsess,
  loadUsersFailure,
  loadUsersSuccess,
} from './users.actions';


export const initialState : IState = {
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
  })),
  on(DeleteUserSuccsess , (state , {id }) =>({
    ...state,
    user : state.users.filter((user: IUsers) => user.id !== id)
  }))
);