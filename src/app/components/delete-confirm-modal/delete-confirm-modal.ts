import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-confirm-modal',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './delete-confirm-modal.html',
  styleUrl: './delete-confirm-modal.scss'
})
export class DeleteConfirmModal {
  constructor(public dialogRef:MatDialogRef<DeleteConfirmModal>) {}

  cancel() {
    this.dialogRef.close(false);
  }

  deleteQuestion() {
    this.dialogRef.close(true);
  }
}
