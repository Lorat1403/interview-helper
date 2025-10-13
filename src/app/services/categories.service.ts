import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map,of } from 'rxjs';
import {   MOCK_DATA, QuestionItem } from '../components/category/category.config';
import { Response, ResponseArray } from '../models/response.models';
import { get } from 'lodash';


@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
   public baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  getQuestionsByCategory(
    categoryName: string
  ): Observable<ResponseArray<QuestionItem>> {

    //  return this.http
    //   .get<ResponseArray<QuestionItem>>(
    //     `${this.baseUrl}/category/${categoryName}`
    //   )
    //   .pipe(
    //     map((response: any) => {
    //       return { data: response[0]?.questions || [] };
    //     }),
    //     delay(500)
    //   );
    return of(get(MOCK_DATA, categoryName)).pipe(
      map((questions) => ({
        data: [...questions],
      })),
      delay(500)
    );

  }

  //  deleteCategoryQuestionById(id: number): Observable<Response<QuestionItem>> {
  //   return this.http.delete<Response<QuestionItem>>(
  //     `${this.baseUrl}/664/questions/${id}`
  //   );
  // }

    deleteCategoryQuestionById(
    categoryName: string,
    id: number
  ): Observable<Response<QuestionItem>> {
    return of();
   
  }
}


