import { Injectable, OnInit } from '@angular/core';
import { IUsers } from '../models/IUser';
import { UserApiServiceService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService  {
  
  users : IUsers[]= []
 
}
