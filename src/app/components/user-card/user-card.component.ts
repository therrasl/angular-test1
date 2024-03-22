import { Component, Output } from '@angular/core';
import { Input } from '@angular/core';
import { IUsers } from '../../models/IUser';
import EventEmitter from 'events';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() user: IUsers;

  @Output()
  userId = new EventEmitter();
}
