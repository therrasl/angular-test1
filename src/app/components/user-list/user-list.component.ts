import { Component,OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import {
  deleteUser,
  loadUsers,
  AddUser,
} from '../../store/users/users.actions';

import { selectUsers } from '../../store/users/users.selector';
import { CreateEditUserComponent } from '../../modal/create-edit-user/create-edit-user.component';

import { MatDialog } from '@angular/material/dialog';
import { IUsers } from '../../models/IUser';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private store: Store, public readonly dialog: MatDialog) {}

  user$ = this.store.select(selectUsers);
  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }
  deleteUser(id: number) {
    this.store.dispatch(deleteUser({ id }));
  }
  isEdit = false;
  openDialogRef(): void {
    const dialogRef = this.dialog.open(CreateEditUserComponent, {
      data: { isEdit: this.isEdit },
    });
    dialogRef.afterClosed().subscribe((user: IUsers) => {
      if (user) {
        this.store.dispatch(AddUser({ user }));
      }
    });
  }
}
