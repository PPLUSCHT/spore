import { AuthorizationService } from './authorization.service';
import { UserRequest } from 'src/app/interfaces/requestObjects/UserRequest';
import {Observable, catchError, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


describe('AuthorizationService', () => {

  it('should call login and store jwt', () => {

    let httpClient = jasmine.createSpyObj("HttpClient", ["post"]);
    let service = new AuthorizationService(httpClient);

    const dummyJWT:string = "dummyJWT";
    const dummyUser:UserRequest = {userName: "dummyUsername", password: "dummyPassword"};
    httpClient.post.and.returnValue(of(dummyJWT));

    service.login(dummyUser);
    expect(localStorage.getItem("currentCredentials")).toEqual(dummyJWT);
  });

  it('should call login and throw an error', () => {

    let httpClient = jasmine.createSpyObj("HttpClient", ["post"]);
    let service = new AuthorizationService(httpClient);
    let error = new Error("Unitialized");
    
    const dummyUser:UserRequest = {userName: "dummyUsername", password: "dummyPassword"};
    httpClient.post.and.returnValue(of(new HttpErrorResponse({status: 0})));
    service.loginRequest(dummyUser).subscribe({error: (err) => error = err})
    expect(error).toEqual(new Error("Something went wrong"));
  })
});
