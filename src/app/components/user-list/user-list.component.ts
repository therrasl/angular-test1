import { Component, Inject, OnInit } from '@angular/core';

import { IUsers } from '../../models/IUser';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadUsers } from '../../store/users/users.actions';
import { ModalService } from '../../service/modal.service';
import { selectUsers} from '../../store/users/users.selector';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(public modalService: ModalService, private store: Store) {}
  
 
  user$: Observable<IUsers[]>= this.store.select(selectUsers)
   
  ngOnInit(): void {
    this.store.dispatch(loadUsers())
  this.user$ = this.store.select(selectUsers)
  
}
