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
} from './users.actions';
import { UserListComponent } from '../../components/user-list/user-list.component';


@Injectable()
export class userEffects {
  constructor(
    private action$: Actions,
    private userApi: UserApiServiceService
  ) {}

  getUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadUsers),
      tap(() => console.log('loading')),
      switchMap(() =>
        this.userApi.getUsers().pipe(
          tap(() => console.log('loadingSuccses')),
          map((users) => loadUsersSuccess({ user : users})),
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteUser),
      tap(() => console.log('delete')),
      switchMap(({ id }) =>
        this.userApi.deleteUser(id).pipe(
          tap(() => console.log({ id })),
          map(() => DeleteUserSuccsess({ id })),
          tap(() => console.log('deleteSuccses ')),
          catchError((error) => of(DeleteUserFailure({ error })))
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(AddUser),
      tap(() => console.log('delete')),
      switchMap(({ user }) =>
        this.userApi.createUser(user).pipe(
          tap(() => console.log({user})),
          map(() => AddUserSucsess({user})),
          tap(() => console.log('add Succses ')),
          catchError((error) => of(AddUserFailure({ error })))
        )
      )
    )
  );
}
