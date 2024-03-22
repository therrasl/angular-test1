import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserApiServiceService } from '../../service/user-api.service';
import { switchMap, map, catchError, of,tap } from 'rxjs';
import {
 loadUsers,
 loadUsersSuccess,
 loadUsersFailure
} from './users.actions';


@Injectable()
export class userEffects {
  constructor(
    private action$: Actions,
    private userApi: UserApiServiceService
  ) {}
  getUser$ = createEffect(() => 
    this.action$.pipe(
      ofType( loadUsers),
      tap(()=> console.log('loading')),
      switchMap(() =>
        this.userApi.getUsers().pipe(
          tap(()=> console.log('loadingSuccses')),
          map((user) => loadUsersSuccess({user})),
          catchError((error) => of(loadUsersFailure({ error })))

        )
      )
    )
        );
}
