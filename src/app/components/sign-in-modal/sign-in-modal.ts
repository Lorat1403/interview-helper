import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { SignInService } from '../../services/sign-in.service';

@Component({
  selector: 'app-sign-in-modal',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './sign-in-modal.html',
  styleUrl: './sign-in-modal.scss'
})
export class SignInModal {
 signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SignInModal>,
    public signInService: SignInService,
  
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      console.log('Email:', email);
      console.log('Password:', password);
      // TODO - Call the service
     this.signInService.login(email, password).subscribe(() => {
        this.dialogRef.close(this.signInForm.value);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }
}
