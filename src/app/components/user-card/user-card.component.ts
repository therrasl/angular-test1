import { Component, Output } from '@angular/core';
import { Input , EventEmitter } from '@angular/core';
import { IUsers } from '../../models/IUser';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditUserComponent } from '../../modal/create-edit-user/create-edit-user.component';
import { tap , map } from 'rxjs';
import { Store } from '@ngrx/store';
import { EditUser } from '../../store/users/users.actions';
import { takeUntil } from 'rxjs';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  constructor(public readonly dialogRef : MatDialog , private store : Store){}
  @Input() user: IUsers; 

  @Output()
  id = new EventEmitter<number>();

  onDeleteUser(){
    this.id.emit(this.user.id)
  }
  isEdit :boolean =true
  onEditUser() : void{
  const  dialogEdit=this.dialogRef.open(CreateEditUserComponent, {data :{ isEdit : this.isEdit , userData : this.user}})
  dialogEdit.afterClosed().pipe(
    tap(()=> console.log('edit user')),
    map((editUser: IUsers) => {
    this.store.dispatch(EditUser({editUser}))
    takeUntil(dialogEdit.afterClosed())
    }),
  ).subscribe();
    }
  }

