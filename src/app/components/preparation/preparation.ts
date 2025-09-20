import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmModal } from '../delete-confirm-modal/delete-confirm-modal';
import { QuestionItem } from '../category/category.config';
import { MOCK_DATA } from './preparation.config';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { GenerateAnswerModal } from '../generate-answer-modal/generate-answer-modal';

@Component({
  selector: 'app-preparation',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './preparation.html',
  styleUrl: './preparation.scss'
})
export class Preparation {

  displayedColumns: string[] = ['position', 'question', 'actions'];
  dataSource = new MatTableDataSource<QuestionItem>(MOCK_DATA);

  constructor(public dialog: MatDialog) { }
  
  openGenerateDialog(question: QuestionItem): void{
    const dialogRef = this.dialog.open(GenerateAnswerModal, {
      width: '500px',
      data: {
        question: question.question,
        answer: question.answer,
      }
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed', result);
      if (result) {
        // TODO - call the service for updating an answer
      }
    });
  }

openDeleteDialog(question: QuestionItem): void{
  const dialogRef = this.dialog.open(DeleteConfirmModal, {
    width: '333px',
  });

  dialogRef.afterClosed().subscribe((result: boolean) => {
    console.log('The dialog was closed', result);
    if (result) {
      console.log('Question would be deleted.', question);
      // TODO - call the service for deleting an answer
    }
  });
}

}
