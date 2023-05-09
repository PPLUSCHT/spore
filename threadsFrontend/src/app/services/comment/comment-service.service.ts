import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, debounceTime, map } from 'rxjs';
import { ReceivedComment } from 'src/app/interfaces/recievedObjects/ReceivedComment';
import { CommentRequest } from 'src/app/interfaces/requestObjects/CommentRequest';
import { routeCreator } from '../routeCreator';
import { errorHandler } from '../errorHandler';
import { CommentVoteRequest } from 'src/app/interfaces/requestObjects/CommentVoteRequest';
import { ReceivedCommentVote } from 'src/app/interfaces/recievedObjects/ReceivedCommentVote';
import { addZeroVoteComment } from '../addZeroVote';
import { convertCommentTime } from '../localTime';

@Injectable({
  providedIn: 'root'
})
export class CommentService{

  constructor(private http: HttpClient) { }

  public postComment(commentRequest: CommentRequest): Observable<ReceivedComment>{
    return this.http.post<ReceivedComment>(routeCreator("Comments"), commentRequest)
                    .pipe(
                    map(x => {
                      if(Object(x) instanceof HttpErrorResponse){
                        throw x;
                      }
                      return x;
                    }),
                    map((comment) => {return convertCommentTime(comment)}), 
                    catchError(errorHandler)
                    );
  }

  public getComment(commentID: number): Observable<ReceivedComment>{
    return this.http.get<ReceivedComment>(routeCreator(`Comments/${commentID}`))
                    .pipe(map(x => {
                      if(Object(x) instanceof HttpErrorResponse){
                        throw x;
                      }
                      return addZeroVoteComment(x);
                    }),
                    map((comment) => {return convertCommentTime(comment)}), 
                    catchError(errorHandler));
  }

  public deleteComment(commentID: number): Observable<number>{
    return this.http.delete<number>(routeCreator(`Comments/${commentID}`))
                    .pipe(
                    map(x => {
                      if(Object(x) instanceof HttpErrorResponse){
                        throw x;
                      }
                      return x;
                      }), 
                    catchError(errorHandler));
  }

  public getChildren(commentID:number): Observable<Array<ReceivedComment>>{
    return this.http.get<Array<ReceivedComment>>(routeCreator(`Comments/${commentID}/Children`))
                    .pipe(map(x => {
                      if(Object(x) instanceof HttpErrorResponse){
                        throw x;
                      }
                      return x.map(c => addZeroVoteComment(c));
                      }),
                      map((x) => {return x.map((comment) => convertCommentTime(comment))}),
                    catchError(errorHandler));
  }

  public patchComment(comment: CommentRequest, id: number): Observable<string>{
    return this.http.patch(routeCreator(`Comments/${id}`), comment, {responseType: "text"})
                    .pipe(map(x => {
                      if(Object(x) instanceof HttpErrorResponse){
                        throw x;
                      }
                      return x;
                      }), 
                    catchError(errorHandler));
  }

  public postCommentVote(vote: CommentVoteRequest): Observable<ReceivedCommentVote>{
    return this.http.post<ReceivedCommentVote>(routeCreator(`Comments/${vote.commentID}/Votes`), vote)
                    .pipe(map(x => {
                      if(Object(x) instanceof HttpErrorResponse){
                        throw x;
                      }
                      return x;
                      }), 
                    catchError(errorHandler));
  }

  public patchCommentVote(vote: CommentVoteRequest): Observable<ReceivedCommentVote>{
    return this.http.patch<ReceivedCommentVote>(routeCreator(`Comments/${vote.commentID}/Votes`), vote)
                    .pipe(map(x => {
                      if(Object(x) instanceof HttpErrorResponse){
                        throw x;
                      }
                      return x;
                      }), 
                    catchError(errorHandler));
  }

  public deleteCommentVote(vote: CommentVoteRequest): Observable<ReceivedCommentVote>{
    return this.http.delete<ReceivedCommentVote>(routeCreator(`Comments/${vote.commentID}/Votes`), {body: vote})
                    .pipe(map(x => {
                      if(Object(x) instanceof HttpErrorResponse){
                        throw x;
                      }
                      return x;
                      }), 
                    catchError(errorHandler));
  }

}
