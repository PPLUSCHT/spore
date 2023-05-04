import { Injectable } from '@angular/core';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { BehaviorSubject, Observable, catchError, map, tap, timer } from 'rxjs';
import { UserRequest } from 'src/app/interfaces/requestObjects/UserRequest';
import { errorHandler } from '../errorHandler';
import { routeCreator } from '../routeCreator';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface MyToken{
  UserID: string,
  exp: number
}

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService{


  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  public loginRequest(userInfo:UserRequest):Observable<string>{
    return this.http.post<string>(routeCreator("Session"), userInfo, {responseType: 'text' as 'json'})
        .pipe(map(x => {
                        if (Object(x) instanceof HttpErrorResponse) {
                          throw x;
                        }
                        return x;
                        }),
              catchError(errorHandler)
              )
  }

  private setJWT(jwt: string): void{
    localStorage.setItem("currentCredentials", jwt);
  }

  public testLogin(): boolean{
    let token = localStorage.getItem("currentCredentials");
    let userID = localStorage.getItem("UserID");
    if(token == null || userID == null){
      this.loggedIn.next(false)
      return false;
    }
    const expiry =  jwtDecode<MyToken>(token).exp
    
    if((Math.floor((new Date).getTime() / 1000)) >= expiry){
      localStorage.removeItem("UserID");
      localStorage.removeItem("currentCredentials");
      this.loggedIn.next(false)
      return false;
    }
    this.loggedIn.next(true)
    return true;
  }

  public getUserID(): number | null{
    let userID = localStorage.getItem("UserID");
    return userID ? parseInt(userID) : null;
  }

  public getExpiration(): number | null{
    let expiration = localStorage.getItem("Expiration");
    return expiration ? parseInt(expiration) : null;
  }
  
  private setUserID(jwt: string): void{
    localStorage.setItem("UserID", jwtDecode<MyToken>(jwt).UserID)
  }

  private setExpiration(jwt: string): void{
    localStorage.setItem("Expiration", jwtDecode<MyToken>(jwt).exp.toString())
  }

  public login(userInfo:UserRequest): Observable<void>{
    return this.loginRequest(userInfo)
              .pipe(map( (jwt) => {
                this.setJWT(jwt),
                this.setUserID(jwt),
                this.setExpiration(jwt)
                this.loggedIn.next(true),
                this.setSessionTimer()
              }
            ))
  }

  public logout(){
    localStorage.clear()
    this.loggedIn.next(false)
  }

  public getToken(): string | null{
    return localStorage.getItem("currentCredentials");
  }

  public getLoginSubject(): BehaviorSubject<boolean>{
    this.testLogin()
    return this.loggedIn
  }

  public setSessionTimer(): void{
    let date = new Date()
    date.setDate(this.getExpiration()!)
    timer(date).subscribe(() => this.loggedIn.next(false))
  }

}