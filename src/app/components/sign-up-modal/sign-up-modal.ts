import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-sign-up-modal',
  imports: [MatDialogModule, MatButtonModule, MatInputModule, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up-modal.html',
  styleUrl: './sign-up-modal.scss'
})
export class SignUpModal {
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SignUpModal>
  ) {
    this.signUpForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  onSubmit() {
    if(this.signUpForm.valid) {
    const { login, email, password, firstName, lastName } = this.signUpForm.value;
    console.log('User Data:', { login, email, password, firstName, lastName });
    //TODO -Call the service
    this.dialogRef.close(this.signUpForm.value);
    }
  }
onCancel(): void {
    this.dialogRef.close();
}
  
get login() {
  return this.signUpForm.get('login');
}

get email() {
  return this.signUpForm.get('email');
}

get password() {
  return this.signUpForm.get('password');
}

get firstName() {
  return this.signUpForm.get('firstName');
}

get lastName() {
  return this.signUpForm.get('lastName');
}
}


