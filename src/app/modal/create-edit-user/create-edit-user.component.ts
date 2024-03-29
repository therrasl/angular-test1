import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUsers } from '../../models/IUser';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrl: './create-edit-user.component.scss',
})
export class CreateEditUserComponent {
  constructor(
    private readonly dialogRef: MatDialogRef<CreateEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isEdit: boolean; userData: IUsers }
  ) {}

  ngOnInit(): void {
    if (this.data.isEdit) {
      this.userForm.patchValue(this.data.userData);
    }
  }

  closeDialogRef(): void {
    this.dialogRef.close();
  }

  userForm = new FormGroup({
    id: new FormControl(new Date().getTime(), Validators.required),
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}
