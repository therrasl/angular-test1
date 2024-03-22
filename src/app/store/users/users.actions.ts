import { createAction ,props} from '@ngrx/store';
import { IUsers } from '../../models/IUser';



export const loadUsers = createAction('[Users] load users')
export const deleteAction = createAction('[Users/delete] delete ');


export const loadUsersSuccess = createAction(
    '[Users] Get Users Success',
    props<{ user : IUsers[] }>()
  );
  
  export const loadUsersFailure = createAction(
    '[Users] Get Users Failure',
    props<{ error: Error}>()
  );