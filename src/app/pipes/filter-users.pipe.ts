import { Pipe, PipeTransform } from '@angular/core';
import { IUsers } from '../models/IUser';

@Pipe({
  name: 'filterUsers',
})
export class FilterProductsPipe implements PipeTransform {
  transform(users: IUsers[], search: string): IUsers[] {
    return users.filter((u) =>
      u.name.toLowerCase().includes(search)
    );
  }
}
