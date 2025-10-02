import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SignInModal } from '../sign-in-modal/sign-in-modal';
import { SignUpModal } from '../sign-up-modal/sign-up-modal';
import { StorageService } from '../../services/storage.service';
import {jwtDecode} from 'jwt-decode';


@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './user-panel.html',
  styleUrl: './user-panel.scss'
})
export class UserPanel implements OnInit {
  // user$ = of({ firstName: 'Antony', lastName: 'Fox' });
  user$: Observable<{ email: string } | null>;

  constructor(
    private dialog: MatDialog,
    private storageService: StorageService
  ) {
    this.user$ = this.storageService.getTokenObservable().pipe(
      map((token) => {
        if (token) {
          const parsedPoken = jwtDecode(token) as any;
          return {
            email: parsedPoken?.email,
          };
        } else {
          return null;
        }
      })
    );
  }

  ngOnInit(): void {}

  signOut(): void {
    this.storageService.removeToken();
  }

  openSignInModal(): void {
    const dialogRef = this.dialog.open(SignInModal, {
      width: '400px',
    });
  }

  openSignUpModal(): void {
    const dialogRef = this.dialog.open(SignUpModal, {
      width: '400px',
    });
  }
}