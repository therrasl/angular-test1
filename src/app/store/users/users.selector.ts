import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from '../../models/IState';

export const userSelector = createFeatureSelector<IState>('users');


export const selectUsers = createSelector(
  userSelector,
  state => state.users,

);