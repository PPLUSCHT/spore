import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { ReceivedUser} from 'src/app/interfaces/recievedObjects/ReceivedUser';
import { UserRequest } from 'src/app/interfaces/requestObjects/UserRequest';
import { routeCreator } from '../routeCreator';
import { errorHandler } from '../errorHandler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public createUser(userRequest:UserRequest): Observable<ReceivedUser>{
    return this.http.post<ReceivedUser>(routeCreator('Users'), userRequest)
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x;
                      }),
                      catchError(errorHandler)
                    )
  };

  public deleteUser(userID: number): Observable<number>{
    return this.http.delete<number | HttpErrorResponse>(routeCreator(`Users/${userID}`))
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x;
                      }),
                      catchError(errorHandler)
                    )
  };

  public getUser(userID: number): Observable<ReceivedUser>{
    return this.http.get<ReceivedUser>(routeCreator(`Users/${userID}`))
                    .pipe(map(x => {
                      if (x instanceof HttpErrorResponse) {
                        throw x;
                      }
                      return x;
                      }),
                      catchError(errorHandler)
                    )
  };

  public checkUsernameUniqueness(username: string): Observable<boolean>{
    return this.http.get(routeCreator(`Users/unique?username=${username}`))
                    .pipe(map(x => {
                      if (typeof x !== "boolean") {
                        throw x;
                      }
                      return x;
                      }),
                      catchError(errorHandler)
                    )
  }

}
