import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { IUsers } from '../../models/IUser';
import { UserApiServiceService } from '../../service/user-api.service';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user:IUsers

}
