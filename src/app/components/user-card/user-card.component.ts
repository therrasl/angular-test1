import { Component, Output } from '@angular/core';
import { Input , EventEmitter } from '@angular/core';
import { IUsers } from '../../models/IUser';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() user: IUsers; 

  @Output()
  id = new EventEmitter<number>();

  onDelete(id : number){
    this.id.emit(this.user.id)
  }
}
