import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { PostRequest } from 'src/app/interfaces/requestObjects/PostRequest';
import { routeCreator } from '../routeCreator';
import { errorHandler } from '../errorHandler';
import { ReceivedPost } from 'src/app/interfaces/recievedObjects/ReceivedPost';
import { ReceivedComment } from 'src/app/interfaces/recievedObjects/ReceivedComment';
import { PostVoteRequest } from 'src/app/interfaces/requestObjects/PostVoteRequest';
import { ReceivedPostVote } from 'src/app/interfaces/recievedObjects/ReceivedPostVote';
import { addZeroVoteComment, addZeroVotePost } from '../addZeroVote';
import { convertCommentTime, convertPostTime } from '../localTime';
import { PostTitleDTO } from 'src/app/interfaces/recievedObjects/PostTitleDTO';

@Injectable({
  providedIn: 'root'
})
export class PostDataService{

  constructor(private http: HttpClient) {
  }

  public postPost(postRequest: PostRequest): Observable<ReceivedPost>{
    return this.http.post<ReceivedPost>(routeCreator("Posts"), postRequest)
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x;
                      }),
                      map((x) => {return convertPostTime(x)}),
                      catchError(errorHandler)
                    )
  }

  public getPost(id: number): Observable<ReceivedPost>{
    return this.http.get<ReceivedPost>(routeCreator(`Posts/${id}`))
                    .pipe(map(x => {
                        if (x instanceof HttpErrorResponse) {
                          throw x;
                        }
                        return addZeroVotePost(x);
                        }),
                        map((x) => {return convertPostTime(x)}),
                        catchError(errorHandler)
      )
  }

  public patchPost(postRequest: PostRequest, postID: number): Observable<string>{
    return this.http.patch(routeCreator(`Posts/${postID}`), postRequest, {responseType: "text"})
                    .pipe(map(x => {
                      if (typeof x !== "string") {
                        throw x;
                      }
                      return x;
                      }),
                      catchError(errorHandler)
                    )
  }

  public deletePost(id:number): Observable<number>{
    return this.http.delete<number | HttpErrorResponse>(routeCreator(`Posts/${id}`))
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x;
                      }),
                      catchError(errorHandler)
                    )
  }

  public getComments(id:number): Observable<Array<ReceivedComment>>{
    return this.http.get<Array<ReceivedComment>>(routeCreator(`Posts/${id}/Comments`))
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x.map(c => addZeroVoteComment(c));
                      }),
                      map((x) => {return x.map((comment) => convertCommentTime(comment))}),
                      catchError(errorHandler)
                    )
  }

  public postVote(voteRequest: PostVoteRequest): Observable<ReceivedPostVote>{
    return this.http.post<ReceivedPostVote>(routeCreator(`Posts/${voteRequest.postID}/Votes`), voteRequest)
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x;
                      }),
                      catchError(errorHandler)
                    )
  }

  public patchVote(voteRequest:PostVoteRequest): Observable<ReceivedPostVote>{
    return this.http.patch<ReceivedPostVote>(routeCreator(`Posts/${voteRequest.postID}/Votes`), voteRequest)
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x;
                      }),
                      catchError(errorHandler)
                    )
  }

  public deleteVote(voteRequest:PostVoteRequest): Observable<ReceivedPostVote>{
    return this.http.delete<ReceivedPostVote>(routeCreator(`Posts/${voteRequest.postID}/Votes`), {body: voteRequest})
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x;
                      }),
                      catchError(errorHandler)
                    )
  }

  public getSuggested(query: string): Observable<Array<PostTitleDTO>>{
    if(!query || query.trim() === ""){
      return of([])
    }
    return this.http.get<Array<PostTitleDTO>>(routeCreator(`Posts/Suggested?query=${query.trim()}`))
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x;
                      }),
                      catchError(errorHandler)
                    )
  }

  public search(query: string, page: number): Observable<Array<ReceivedPost>>{
    if(!query || query.trim() === ""){
      return of([])
    }
    return this.http.get<Array<ReceivedPost>>(routeCreator(`Posts?query=${query.trim()}&pageNumber=${page}`))
                    .pipe(map(x => {
                              if (x instanceof HttpErrorResponse) {
                                throw x;
                              }
                              return x;
                              }),
                              catchError(errorHandler)
                            )
  }

}

