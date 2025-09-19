import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { QuestionItem, MOCK_DATA } from './category.config';
import { GenerateAnswerModal } from '../generate-answer-modal/generate-answer-modal'; 
import { DeleteConfirmModal } from '../delete-confirm-modal/delete-confirm-modal';
import { TruncatePipe } from '../../pipes/truncate-pipe';


@Component({
  selector: 'app-category',
  imports: [MatTableModule, MatButtonModule, TruncatePipe],
  templateUrl: './category.html',
  styleUrl: './category.scss'
})
export class Category {
  displayedColumns: string[] = ['position', 'question', 'answer', 'actions'];
  dataSource = new MatTableDataSource<QuestionItem>(MOCK_DATA);

  constructor(public dialog: MatDialog) { }
  
  openDeleteDialog(question: QuestionItem): void {
    const dialogRef = this.dialog.open(DeleteConfirmModal, {
      width: '333px',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        console.log('Question wuold be deleted.', question);
        // TODO - call the service for deleting an answer
      }
    });
  }
}
