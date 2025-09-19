import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuestionItem } from '../category/category.config';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TypingAnimation } from '../../directives/typing-animation';


@Component({
  selector: 'app-generate-answer-modal',
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule, TypingAnimation],
  templateUrl: './generate-answer-modal.html',
  styleUrl: './generate-answer-modal.scss'
})
  
  
export class GenerateAnswerModal implements OnInit {

  isLoading: boolean = false;
  
  constructor(public dialogRef: MatDialogRef<GenerateAnswerModal>,
    @Inject(MAT_DIALOG_DATA)
    public data: Pick<QuestionItem, 'question' | 'answer'>) { }

  ngOnInit(): void {
    if (!this.data.answer) {
      this.regenerateAnswer();
    }
  }

regenerateAnswer() {
  this.isLoading = true;
  setTimeout(() => {
    this.data.answer = "New genearated answer based on some API call or logic.";
    this.isLoading = false;
  }, 2000);
}

saveAnswer() {
  this.dialogRef.close(this.data.answer);
}

}


