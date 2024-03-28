import { createReducer, on } from '@ngrx/store';
import { IUsers } from '../../models/IUser';
import {
  AddUser,
  DeleteUserSuccsess,
  loadUsersFailure,
  loadUsersSuccess,
} from './users.actions';

export const initialState = {
  users : <IUsers[]>[],
};

export const usersReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { user }) => ({
    ...state,
    users : user,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(DeleteUserSuccsess, (state, { id }) => ({
    ...state,
   users : state.users.filter((user : IUsers) => user.id !== id),
  })) , 
  on(AddUser , (state, {user} ) => ({
    ...state ,
     users :  <IUsers[]>[...state.users ,user]
  }))
);
