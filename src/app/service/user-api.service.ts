import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUsers } from '../models/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserApiServiceService {
  constructor(private http: HttpClient) {}
  private readonly userApi = 'https://jsonplaceholder.typicode.com/users';
  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.userApi);
  }
  deleteUser(id: number) {
    return this.http.delete(this.userApi + `/${id}`);
  }

  createUser(user: IUsers) {
    return this.http.post(this.userApi, user);
  }
  editUser(editUser: IUsers) {
    return this.http.patch(this.userApi + `/${editUser.id}`, editUser);
  }
}
