import { TestBed } from '@angular/core/testing';

import { CommentService } from './comment-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReceivedComment } from 'src/app/interfaces/recievedObjects/ReceivedComment';
import { CommentRequest } from 'src/app/interfaces/requestObjects/CommentRequest';
import { routeCreator } from '../routeCreator';
import { response } from 'express';
import { ReceivedCommentVote } from 'src/app/interfaces/recievedObjects/ReceivedCommentVote';
import { CommentVoteRequest } from 'src/app/interfaces/requestObjects/CommentVoteRequest';

describe('CommentServiceService', () => {
  let service: CommentService;
  let http: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    
    http = TestBed.inject(HttpClient);
    service = new CommentService(http);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a valid post request', () => {
    const recievedComment: ReceivedComment = {
      posterName: 'bob',
      timeString: '10 seconds ago',
      content: 'content',
      voteTotal: 1,
      commentID: 1,
      userID: 0
    };
    
    const commentRequest: CommentRequest = {
      userID: 0,
      postID: 0,
      content: ''
    }

    service.postComment(commentRequest).subscribe((res) => expect(res).toEqual(recievedComment));
    const req = httpTestingController.expectOne(routeCreator(`Comments`));
    expect(req.request.method).toEqual('POST');
    req.flush(recievedComment);

  });

  it('should fail throw an error when creating a post', () => {
    let error = new Error('blank');
    
    const commentRequest: CommentRequest = {
      userID: 0,
      postID: 0,
      content: ''
    }

    service.postComment(commentRequest).subscribe({ 
                                                    next: (res) => console.log(res),
                                                    error: (err) => error = err
                                                  });
    const req = httpTestingController.expectOne(routeCreator(`Comments`));
    expect(req.request.method).toEqual('POST');
    req.flush(new HttpErrorResponse({}));

    expect(error.message).toEqual("Something went wrong");
    
  });

  it('should create a valid get request', () => {
    const recievedComment: ReceivedComment = {
      posterName: 'bob',
      timeString: '10 seconds ago',
      content: 'content',
      voteTotal: 1,
      commentID: 1,
      userID:0
    };
    
    const commentID = 1;

    service.getComment(commentID).subscribe((res) => expect(res).toEqual(recievedComment));
    const req = httpTestingController.expectOne(routeCreator(`Comments/${commentID}`));
    expect(req.request.method).toEqual('GET');
    req.flush(recievedComment);
  });

  it('should throw an error on a get request', () => {
    let error = new Error('blank');
    const commentID = 1;

    service.getComment(commentID).subscribe({ 
                                                next: (res) => console.log(res),
                                                error: (err) => error = err
                                            });
    const req = httpTestingController.expectOne(routeCreator(`Comments/${commentID}`));
    expect(req.request.method).toEqual('GET');
    req.flush(new HttpErrorResponse({}));

    expect(error.message).toEqual("Something went wrong");
  });

  it('should delete a comment', () => {
    const commentID = 1;
    service.deleteComment(commentID).subscribe((res) => expect(res).toEqual(commentID));
    const req = httpTestingController.expectOne(routeCreator(`Comments/${commentID}`));
    expect(req.request.method).toEqual('DELETE');
    req.flush(commentID);
  });

  it(`should try to delete a comment and throw an error`, () => {
    const commentID = 1;
    let error = new Error('blank');

    service.deleteComment(commentID).subscribe({ 
      next: (res) => console.log(res),
      error: (err) => error = err
    });

    const req = httpTestingController.expectOne(routeCreator(`Comments/${commentID}`));
    expect(req.request.method).toEqual('DELETE');
    req.flush(new HttpErrorResponse({}));

    expect(error.message).toEqual("Something went wrong");
  });

  it(`should try to get all children comments`, () => {
    const commentID = 1;
    let res:Array<ReceivedComment> = [{
      posterName: 'bob',
      timeString: '10 seconds',
      content: 'content',
      voteTotal: 0,
      commentID: 1,
      userID:0
    }];

    service.getChildren(commentID).subscribe((resp) => expect(resp).toEqual(res));
    const req = httpTestingController.expectOne(routeCreator(`Comments/${commentID}/Children`));
    expect(req.request.method).toEqual('GET');
    req.flush(res);
  });

  it(`should throw an error when trying to get Children`, () => {
    const commentID = 1;
    let error = new Error('blank');

    service.getChildren(commentID).subscribe({
                                              next: (resp) => console.log(resp),
                                              error: (err) => error = err
                                            });

    const req = httpTestingController.expectOne(routeCreator(`Comments/${commentID}/Children`));
    expect(req.request.method).toEqual('GET');
    req.flush(new HttpErrorResponse({}));

    expect(error.message).toEqual("Something went wrong");
  });

  it(`should try to patch a comment`, () => {
    const content:string = "new content"
    const commentID = 1;

    service.patchComment(content, commentID).subscribe((res) => expect(res).toEqual(content));
    const req = httpTestingController.expectOne(routeCreator(`Comments/${commentID}`));
    expect(req.request.method).toEqual('PATCH');
    req.flush(content);
  });

  it(`should throw an error when trying to patch a comment`, () => {
    const content:string = "new content"
    const commentID = 1;
    let error = new Error(`blank`);

    service.patchComment(content, commentID).subscribe({
      next: (resp) => console.log(resp),
      error: (err) => error = err
    });

    const req = httpTestingController.expectOne(routeCreator(`Comments/${commentID}`));
    expect(req.request.method).toEqual('PATCH');
    req.flush(new HttpErrorResponse({}));

    expect(error.message).toEqual("Something went wrong");
  });

  it('should post a vote', () => {
    let response: ReceivedCommentVote = {
      value: 1,
      userID: 1,
      commentID: 10
    }

    let sent: CommentVoteRequest = {
      value: 1, 
      userID: 1,
      commentID: 10
    }

    const postID = 10;

    service.postCommentVote(sent).subscribe((res) => expect(res).toEqual(response));

    const req = httpTestingController.expectOne(routeCreator(`Comments/${postID}/Votes`));
    expect(req.request.method).toEqual('POST');
    req.flush(response);

  });

  it('should post a vote', () => {

    let error = new Error("uninitialized");
    let sent: CommentVoteRequest = {
      value: 1, 
      userID: 1,
      commentID: 10
    }

    const postID = 10;

    service.postCommentVote(sent).subscribe({next: (res) => console.log(res),
                                      error: (err) => error = err
                                     });

    const req = httpTestingController.expectOne(routeCreator(`Comments/${postID}/Votes`));
    expect(req.request.method).toEqual('POST');
    req.flush(new HttpErrorResponse({}));

    expect(error).toEqual(new Error("Something went wrong"));
  });

  it('should patch a vote', () => {
    let response: ReceivedCommentVote = {
      value: 1,
      userID: 1,
      commentID: 10
    }

    let sent: CommentVoteRequest = {
      value: 1, 
      userID: 1,
      commentID: 10
    }

    const postID = 10;

    service.patchCommentVote(sent).subscribe((res) => expect(res).toEqual(response));

    const req = httpTestingController.expectOne(routeCreator(`Comments/${postID}/Votes`));
    expect(req.request.method).toEqual('PATCH');
    req.flush(response);
  });

  it('should catch an error in the patch request', () => {
    let error = new Error("uninitialized");
    let sent: CommentVoteRequest = {
      value: 1, 
      userID: 1,
      commentID: 10
    }

    const postID = 10;

    service.patchCommentVote(sent).subscribe({
                                        next: (res) => console.log(res),
                                        error: (err) => {error = err}
                                      });
    
    const req = httpTestingController.expectOne(routeCreator(`Comments/${postID}/Votes`));
    expect(req.request.method).toEqual('PATCH');
    req.flush(new HttpErrorResponse({}));

    expect(error).toEqual(new Error("Something went wrong"));
  });

  it('should delete a vote', () => {
    let response: ReceivedCommentVote = {
      value: 1,
      userID: 1,
      commentID: 10
    }

    let sent: CommentVoteRequest = {
      value: 1, 
      userID: 1,
      commentID: 10
    }

    const postID = 10;

    service.deleteCommentVote(sent).subscribe((res) => expect(res).toEqual(response));

    const req = httpTestingController.expectOne(routeCreator(`Comments/${postID}/Votes`));
    expect(req.request.method).toEqual('DELETE');
    req.flush(response);
  });

  it('should catch an error thrown in a delete a vote request', () => {
    let error = new Error("uninitialized");

    let sent: CommentVoteRequest = {
      value: 1, 
      userID: 1,
      commentID: 10
    }

    const postID = 10;

    service.deleteCommentVote(sent).subscribe({
                                        next: (res) => console.log(res),
                                        error: (err) => {error = err}
                                      });

    const req = httpTestingController.expectOne(routeCreator(`Comments/${postID}/Votes`));
    expect(req.request.method).toEqual('DELETE');
    req.flush(new HttpErrorResponse({}));
  });

});
