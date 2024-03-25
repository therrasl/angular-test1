import { createFeatureSelector, createSelector } from '@ngrx/store';


export const userSelector = createFeatureSelector<any>('users');


export const selectUsers = createSelector(
  userSelector,
  state => state.user,

);