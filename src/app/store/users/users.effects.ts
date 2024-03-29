import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserApiServiceService } from '../../service/user-api.service';
import { switchMap, map, catchError, of, tap } from 'rxjs';
import {
  deleteUser,
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
  DeleteUserSuccsess,
  DeleteUserFailure,
  AddUser,
  AddUserSucsess,
  AddUserFailure,
  EditUser,
  EditUserSuccess,
  EditUserFailure,
} from './users.actions';

@Injectable()
export class userEffects {
  constructor(
    private action$: Actions,
    private userApi: UserApiServiceService
  ) {}

  getUserEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadUsers),
      tap(() => console.log('loading')),
      switchMap(() =>
        this.userApi.getUsers().pipe(
          tap(() => console.log('loadingSuccses')),
          map((users) => loadUsersSuccess({ user: users })),
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  deleteUserEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteUser),
      tap(() => console.log('delete')),
      switchMap(({ id }) =>
        this.userApi.deleteUser(id).pipe(
          tap(() => console.log('delete user', { id })),
          map(() => DeleteUserSuccsess({ id })),
          tap(() => console.log('deleteSuccses ')),
          catchError((error) => of(DeleteUserFailure({ error })))
        )
      )
    )
  );

  addUserEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(AddUser),
      tap(() => console.log('delete')),
      switchMap(({ user }) =>
        this.userApi.createUser(user).pipe(
          tap(() => console.log({ user })),
          map(() => AddUserSucsess({ user })),
          tap(() => console.log('add Succses ')),
          catchError((error) => of(AddUserFailure({ error })))
        )
      )
    )
  );
  editUserEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(EditUser),
      switchMap(({ editUser }) =>
        this.userApi.editUser(editUser).pipe(
          map(() => EditUserSuccess({ editUser })),
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  );
}
