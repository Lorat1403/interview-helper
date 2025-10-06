import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { QuestionItem } from './category.config';
import { DeleteConfirmModal } from '../delete-confirm-modal/delete-confirm-modal';
import { CategoriesService } from '../../services/categories.service';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { TruncatePipe } from '../../pipes/truncate-pipe';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatProgressSpinnerModule, TruncatePipe],
  templateUrl: './category.html',
  styleUrl: './category.scss'
})
export class Category implements  OnInit, OnDestroy{
  displayedColumns: string[] = ['position', 'question', 'answer', 'actions'];
  dataSource = new MatTableDataSource<QuestionItem>();
  category: string = '';
  isLoading = false;

  private destroy$ = new Subject<void>();

  constructor(public dialog: MatDialog, public categoriesService: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap((param) => {
          this.category = param.get('categoryId') || '';
          this.isLoading = true;
          return this.categoriesService.getQuestionsByCategory(this.category);
        })
      )
      .subscribe((response) => {
        this.isLoading = false;
        this.dataSource = response.data as any;
      });
  }
   ngOnDestroy(): void {
    this.destroy$.next();
     this.destroy$.complete();
  }
  
  deleteAnswer(categoryName: string, id: number): void {
    this.categoriesService
      .deleteCategoryQuestionById(categoryName, id)
      .subscribe((response) => {
        console.log(response);
      });
  }
  
  openDeleteDialog(question: QuestionItem): void {
    const dialogRef = this.dialog.open(DeleteConfirmModal, {
      width: '333px',
    });

     dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log('The dialog was closed', result);
      if (result) {
        console.log('Question would be deleted.', question);
        this.deleteAnswer(this.category, question.id);
      }
    });
  }
}
