import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// Update the import path if the service is located elsewhere
import { SignUpService } from '../../services/sign-up.service';

@Component({
  selector: 'app-sign-up-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up-modal.html',
  styleUrl: './sign-up-modal.scss'
})
export class SignUpModal {
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SignUpModal>,
    public signUpService: SignUpService,
      ) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  onSubmit() {
    if(this.signUpForm.valid) {
    const {email, password, firstName, lastName } = this.signUpForm.value;
     this.signUpService.register(email, password, firstName, lastName).subscribe(() => {
        this.dialogRef.close(this.signUpForm.value);
      });
    }
  }

onCancel(): void {
    this.dialogRef.close();
}
  
// get login() {
//   return this.signUpForm.get('login');
// }

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


