import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {
  @Input() button : string 
  form = new FormGroup({
    username: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  get username() {
    return this.form.controls.username as FormControl;
  }
  get name() {
    return this.form.controls.name as FormControl;
  }
  get email() {
    return this.form.controls.email as FormControl;
  }

  onCreate() {
    console.log('create');
  }
}
