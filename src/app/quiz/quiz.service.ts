import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Question } from './quiz.model';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }
  getQuestions(): Observable<Question[]> {
   return this.http.get<Question[]>('//cocktail-trivia-api.herokuapp.com/api/sample');
  }
}
