import { createAction, props } from '@ngrx/store';
import { IUsers } from '../../models/IUser';

export const loadUsers = createAction('[Users] load users');

export const deleteUser = createAction(
  '[Users/delete] delete ',
  props<{ id: number }>()
);

export const loadUsersSuccess = createAction(
  '[Users] Get Users Success',
  props<{ user: IUsers[] }>()
);

export const loadUsersFailure = createAction(
  '[Users] Get Users Failure',
  props<{ error: Error }>()
);

export const DeleteUserSuccsess = createAction(
  '[Users/Delete] Delete User Succses',
  props<{ id: number }>()
);
export const DeleteUserFailure = createAction(
  '[Users/Delete] Delete User Failure',
  props<{ error: Error }>()
);
export const AddUser = createAction(
  '[Users/Add] Add User',
  props<{ user: IUsers }>()
);
export const AddUserSucsess = createAction(
  '[Users/add] Add User Succses',
  props<{ user: IUsers }>()
);
export const AddUserFailure = createAction(
  '[Users/add] Add User Failure',
  props<{ error: Error }>()
);
export const EditUser = createAction(
  '[Users/edit] Edit User',
  props<{ editUser: IUsers }>()
);
export const EditUserSuccess = createAction(
  '[Users/edit] Edit User Success',
  props<{ editUser: IUsers }>()
);
export const EditUserFailure = createAction(
  '[Users/edit] Edit User error',
  props<{ error: Error }>()
);
