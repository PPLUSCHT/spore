import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { ReceivedPost } from 'src/app/interfaces/recievedObjects/ReceivedPost';
import { routeCreator } from '../routeCreator';
import { addZeroVotePost } from '../addZeroVote';
import { errorHandler } from '../errorHandler';
import { convertPostTime } from '../localTime';
import { Timeframe, timeframeToString } from 'src/app/enums/Timeframe';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http:HttpClient) { }

  public getTopAllTime(page: number): Observable<Array<ReceivedPost>>{
    return this.http.get<Array<ReceivedPost>>(routeCreator(`Homepage/AllTime/${page}`))
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x.map(post => addZeroVotePost(post));
                      }),
                      map((x) => {return x.map((post) => convertPostTime(post))}),
                      catchError(errorHandler)
                    )
  }

  public getTopYear(page: number): Observable<Array<ReceivedPost>>{
    return this.http.get<Array<ReceivedPost>>(routeCreator(`Homepage/Year/${page}`))
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x.map(post => addZeroVotePost(post));
                      }),
                      map((x) => {return x.map((post) => convertPostTime(post))}),
                      catchError(errorHandler)
                    )
  }

  public getTopMonth(page: number): Observable<Array<ReceivedPost>>{
    return this.http.get<Array<ReceivedPost>>(routeCreator(`Homepage/Month/${page}`))
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x.map(post => addZeroVotePost(post));
                      }),
                      map((x) => {return x.map((post) => convertPostTime(post))}),
                      catchError(errorHandler)
                    )
  }

  public getTopWeek(page: number): Observable<Array<ReceivedPost>>{
    return this.http.get<Array<ReceivedPost>>(routeCreator(`Homepage/Week/${page}`))
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x.map(post => addZeroVotePost(post));
                      }),
                      map((x) => {return x.map((post) => convertPostTime(post))}),
                      catchError(errorHandler)
                    )
  }

  public getTopToday(page: number): Observable<Array<ReceivedPost>>{
    return this.http.get<Array<ReceivedPost>>(routeCreator(`Homepage/Today/${page}`))
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x.map(post => addZeroVotePost(post));
                      }),
                      map((x) => {return x.map((post) => convertPostTime(post))}),
                      catchError(errorHandler)
                    )
  }

  public getTopPeriod(page: number, timeframe: Timeframe): Observable<Array<ReceivedPost>>{
    return this.http.get<Array<ReceivedPost>>(routeCreator(`Homepage/${timeframeToString(timeframe)}/${page}`))
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x.map(post => addZeroVotePost(post));
                      }),
                      map((x) => {return x.map((post) => convertPostTime(post))}),
                      catchError(errorHandler)
                    )
  }
}
