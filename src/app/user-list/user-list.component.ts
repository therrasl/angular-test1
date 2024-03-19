import { Component, OnInit } from '@angular/core';
import { UserApiServiceService } from '../service/user-api.service';

import { UserService } from '../service/user.service';
import { IUsers } from '../models/IUser';
import { Observable, map, tap } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
    constructor(
      private userApi : UserApiServiceService , 
      public userService : UserService
      ){}
      
      user$:Observable<IUsers[]>
      ngOnInit(): void {
        this.user$= this.userApi.getUsers()
          }

      
}
