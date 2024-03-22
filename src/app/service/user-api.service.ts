import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../models/IUser';
@Injectable({
  providedIn: 'root',
})
export class UserApiServiceService {
  constructor(private http: HttpClient) {}
  getUsers():Observable<IUsers[]> {
    return this.http.get<IUsers[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
  deleteUser(id: number) {
    return this.http.delete(this.http +`/${id}`);
  }
}
