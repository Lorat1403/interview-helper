import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuestionItem, MOCK_DATA_ANSWERS, findAnswerById } from '../category/category.config';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TypingAnimation } from '../../directives/typing-animation';
import { OpenAiIntegrationService } from '../../services/open-ai-integration.service';
import { catchError, of } from 'rxjs';


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
    public data: QuestionItem & { index: number }, public openApi: OpenAiIntegrationService) { }

  ngOnInit(): void {
      if (!this.data.answer) {
      if (this.data.index < 10) { // Remove this if statement compelely if you would like to connect OpenAPI 
        this.data.answer = findAnswerById(this.data.id, MOCK_DATA_ANSWERS);
        return;
      }
      this.regenerateAnswer();
    }
  }

regenerateAnswer() {
 this.isLoading = true;
    this.openApi
      .generateAnswerForQuestion(this.data.question)
      .pipe(
        catchError((err) => {
          console.warn(err);
          this.isLoading = false;
          return of('Error with OpenAI integration');
        })
      )
      .subscribe((response) => {
        this.data.answer = response;
        this.isLoading = false;
      });
}

saveAnswer() {
  this.dialogRef.close();
}

}


