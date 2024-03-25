import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserApiServiceService } from '../../service/user-api.service';
import { switchMap, map, catchError, of,tap} from 'rxjs';
import {
 deleteUser,
 loadUsers,
 loadUsersSuccess,
 loadUsersFailure,
 DeleteUserSuccsess,
 DeleteUserFailure
} from './users.actions';
import { usersReducer } from './users.reducer';



@Injectable()
export class userEffects {
  constructor(
    private action$: Actions,
    private userApi: UserApiServiceService
  ) {}
  getUser$ = createEffect(() => 
    this.action$.pipe(
      ofType(loadUsers),
      tap(()=> console.log('loading')),
      switchMap(() =>
        this.userApi.getUsers().pipe(
          tap(()=> console.log('loadingSuccses')),
          map((user) => loadUsersSuccess({user : user})),
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
        );

    deleteUser$ = createEffect(()=>
    this.action$.pipe(
    ofType(deleteUser),
    tap(()=>console.log('delete' )),
    switchMap(({id})=> 
      this.userApi.deleteUser(id).pipe(
      tap(()=>console.log({id})),
      map(()=> DeleteUserSuccsess({id})),
      tap(()=>console.log('deleteSuccses ')),
      catchError((error)=>of(DeleteUserFailure({error})))
        )
      )
    )
    
    )};
