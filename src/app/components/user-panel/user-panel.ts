import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable, map, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SignInModal } from '../sign-in-modal/sign-in-modal';
import { SignUpModal } from '../sign-up-modal/sign-up-modal';
// import { StorageService } from '../../services/storage.service';
// import {jwtDecode} from 'jwt-decode';


@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './user-panel.html',
  styleUrl: './user-panel.scss'
})
export class UserPanel  {
  // user$ = of({ firstName: 'Antony', lastName: 'Fox' });
   user$: Observable<{firstName: string, lastName: string}> = of();

  constructor(
    private dialog: MatDialog,
    
  ) {
    
  }

  // ngOnInit(): void {}

  signOut(): void {
    
  }

  openSignInModal(): void {
    const dialogRef = this.dialog.open(SignInModal, {
      width: '400px',
    });

      dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Call the service
      }
    });
  }

  openSignUpModal(): void {
    const dialogRef = this.dialog.open(SignUpModal, {
      width: '400px',
    });

      dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Call the service
      }
    });
  }
}