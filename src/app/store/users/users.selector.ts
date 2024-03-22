import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUsers } from '../../models/IUser';
import { IState } from '../../models/IState';

// export const userSelector = createFeatureSelector<IUsers[]>('users');


export const selectUsers = createSelector(
  // userSelector,
  (state: any) => state.users,
  (users) => users
);