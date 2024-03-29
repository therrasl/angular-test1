import { createReducer, on } from '@ngrx/store';
import { IUsers } from '../../models/IUser';
import {
  AddUser,
  DeleteUserSuccsess,
  loadUsersFailure,
  loadUsersSuccess,
  EditUser,
  EditUserFailure,
  EditUserSuccess,
} from './users.actions';
import { IState } from '../../models/IState';

export const initialState: IState = {
  users: <IUsers[]>[],
};

export const usersReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { user }) => ({
    ...state,
    users: user,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(DeleteUserSuccsess, (state, { id }) => ({
    ...state,
    users: state.users.filter((user: IUsers) => user.id !== id),
  })),
  on(AddUser, (state, { user }) => ({
    ...state,
    users: <IUsers[]>[...state.users, user],
  })),
  on(EditUser, (state) => ({
    ...state,
  })),
  on(EditUserSuccess, (state, { editUser }) => ({
    ...state,
    users: [
      ...state.users.map((user) => (user.id == editUser.id ? editUser : user)),
    ],
  })),
  on(EditUserFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
