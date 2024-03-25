import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { Observable ,map } from 'rxjs';
import { IUsers } from '../models/IUser';
import { State, Store } from '@ngrx/store';
import { IState } from '../models/IState';

@Injectable({
  providedIn: 'root',
})
export class UserApiServiceService {
  constructor(private http: HttpClient  ) {}
  api='https://jsonplaceholder.typicode.com/users'
  getUsers():Observable<IUsers[]> {
    return this.http.get<IUsers[]>(
    this.api
    );
  
    }
    deleteUser(  id : number){
    return this.http.delete(this.api+`/${id}`)
    }
    
}
