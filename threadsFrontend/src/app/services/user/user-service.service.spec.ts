import { TestBed } from '@angular/core/testing';

import { UserService } from './user-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ReceivedUser } from 'src/app/interfaces/recievedObjects/ReceivedUser';
import { UserRequest } from 'src/app/interfaces/requestObjects/UserRequest';
import { routeCreator } from '../routeCreator';

describe('UserServiceService', () => {
  let service: UserService;
  let http: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    
    http = TestBed.inject(HttpClient);
    service = new UserService(http);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a User', () => {
    const exampleUserData: ReceivedUser = {
      username: "Bob",
      userID: 1
    };

    const userRequest: UserRequest = {
      userName: "Bob",
      password: "password123!"
    };

    service.createUser(userRequest)
           .subscribe((user) => {expect(user).toEqual(exampleUserData)});

    const req = httpTestingController.expectOne(routeCreator("Users"));
    expect(req.request.method).toEqual('POST');
    req.flush(exampleUserData);
  });

  it('should catch an error when a User request is made', () => {
    const userRequest: UserRequest = {
      userName: "Bob",
      password: "password123!"
    };

    let error = new Error("uninitialized");

    service.createUser(userRequest)
           .subscribe({
                        next: (user) => console.log(user),
                        error: (err) => error = err
                      });

    const req = httpTestingController.expectOne(routeCreator("Users"));
    expect(req.request.method).toEqual('POST');
    req.flush(new HttpErrorResponse({}));

    expect(error).toEqual(new Error("Something went wrong"));
  });

  it('should delete a user', () => {
    const userID = 1;
    service.deleteUser(userID)
           .subscribe({
                        next: (userId) => expect(userId).toEqual(userID) 
                      });
    
    const req = httpTestingController.expectOne(routeCreator(`Users/${userID}`));
    expect(req.request.method).toEqual('DELETE');
    req.flush(userID);
  });

  it('should throw an erorr when deleting a user', () => {
    const userID = 1;
    let error = new Error("blank")
    service.deleteUser(userID)
           .subscribe({
                        next: (userId) => console.log(userID),
                        error: (err) => error = err
                      });
    
    const req = httpTestingController.expectOne(routeCreator(`Users/${userID}`));
    expect(req.request.method).toEqual('DELETE');
    req.flush(new HttpErrorResponse({}));

    expect(error.message).toEqual("Something went wrong");
  });

  it('should get a user', () => {
    const userID = 1;
    const user1: ReceivedUser = {
      username: 'user1',
      userID: 1
    }

    service.getUser(userID)
           .subscribe({
                        next: (user) => expect(user).toEqual(user1) 
                      });
    const req = httpTestingController.expectOne(routeCreator(`Users/${userID}`));
    expect(req.request.method).toEqual('GET');
    req.flush(user1);
  });

  it('should catch the error thrown by get user', () => {
    const userID = 1;
    let error = new Error('uninitialized');
    service.getUser(userID)
           .subscribe({
                        next: (user) => console.log(user),
                        error: (err) => error = err
                      });
    const req = httpTestingController.expectOne(routeCreator(`Users/${userID}`));
    expect(req.request.method).toEqual('GET');
    req.flush(new HttpErrorResponse({}));

    expect(error.message).toEqual("Something went wrong");
  });

});

