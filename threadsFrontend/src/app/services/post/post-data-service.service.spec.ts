import { TestBed } from '@angular/core/testing';

import { PostDataService } from './post-data-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReceivedPost } from 'src/app/interfaces/recievedObjects/ReceivedPost';
import { routeCreator } from '../routeCreator';
import { PostRequest } from 'src/app/interfaces/requestObjects/PostRequest';
import { ReceivedComment } from 'src/app/interfaces/recievedObjects/ReceivedComment';
import { ReceivedPostVote } from 'src/app/interfaces/recievedObjects/ReceivedPostVote';
import { PostVoteRequest } from 'src/app/interfaces/requestObjects/PostVoteRequest';

describe('PostDataServiceService', () => {
  let service: PostDataService;
  let http: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    
    http = TestBed.inject(HttpClient);
    service = new PostDataService(http);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a valid get request', () => {
    const examplePostData: ReceivedPost = {
      userVote: 1,
      posterName: 'Bob',
      timeString: '10 minutes ago',
      content: 'content',
      title: 'title',
      voteTotal: 10,
      postID: 1
    };
    service.getPost(1)
           .subscribe((post) => {expect(post).toEqual(examplePostData)});

    const req = httpTestingController.expectOne(routeCreator("Posts/1"));
    expect(req.request.method).toEqual('GET');
    req.flush(examplePostData);
  });

  it('should catch the error in the get request', () => {
    let response: ReceivedPost;
    let error: Error = new Error("uninialized");

    service.getPost(1).subscribe({next: res => {
                                                  response = res;
                                                }, 
                                  error: err =>{
                                                  error = err
                                                }
                                              });

    const req = httpTestingController.expectOne(routeCreator("Posts/1"));
    expect(req.request.method).toEqual('GET');
    req.flush(new HttpErrorResponse({}));

    expect(error).toEqual(new Error("Something went wrong"));
  });

  it('should create a valid post request', () => {
    const examplePostData: ReceivedPost = {
      userVote: 1,
      posterName: 'Bob',
      timeString: '10 minutes ago',
      content: 'content',
      title: 'title',
      voteTotal: 10,
      postID: 1
    };

    const sentPostData: PostRequest = {
      posterID: 12,
      content: 'content',
      title: 'title'
    }

    service.postPost(sentPostData)
           .subscribe((post) => {expect(post).toEqual(examplePostData)});

    const req = httpTestingController.expectOne(routeCreator("Posts"));
    expect(req.request.method).toEqual('POST');
    req.flush(examplePostData);
  });

  it('should catch the error in the post request', () => {
    let response: ReceivedPost;
    let error: Error = new Error("uninialized");
    const sentPostData: PostRequest = {
      posterID: 12,
      content: 'content',
      title: 'title'
    }

    service.postPost(sentPostData).subscribe({next: res => {
                                                  response = res;
                                                }, 
                                  error: err =>{
                                                  error = err
                                                }
                                              });

    const req = httpTestingController.expectOne(routeCreator("Posts"));
    expect(req.request.method).toEqual('POST');
    req.flush(new HttpErrorResponse({}));

    expect(error).toEqual(new Error("Something went wrong"));
  });

  it('should create a valid patch request', () => {
    const examplePostData: ReceivedPost = {
      userVote: 1,
      posterName: 'Bob',
      timeString: '10 minutes ago',
      content: 'New Content',
      title: 'title',
      voteTotal: 10,
      postID: 1
    };

    const sentPostData: PostRequest = {
      posterID: 12,
      content: 'content',
      title: 'title'
    }

    const postID = 1;

    service.patchPost(sentPostData, postID)
           .subscribe((post) => {expect(post).toEqual("New Content")});

    console.log(`Posts/${postID}`);
    const req = httpTestingController.expectOne(routeCreator(`Posts/${postID}`));
    expect(req.request.method).toEqual('PATCH');
    req.flush("New Content");
  });

  it('should catch the error in thr post request', () => {
    let response: string;
    let error: Error = new Error("uninialized");
    const sentPostData: PostRequest = {
      posterID: 12,
      content: 'content',
      title: 'title'
    }

    const postID = 1;

    service.patchPost(sentPostData, 1).subscribe({next: res => {
                                                  response = res;
                                                }, 
                                  error: err =>{
                                                  error = err
                                                }
                                              });

    const req = httpTestingController.expectOne(routeCreator(`Posts/${postID}`));
    expect(req.request.method).toEqual('PATCH');
    req.flush(new HttpErrorResponse({}));

    expect(error).toEqual(new Error("Something went wrong"));
  });

  it('should create a valid delete request', () => {
    const sentPostData: PostRequest = {
      posterID: 12,
      content: 'content',
      title: 'title'
    }

    const postID = 1;

    service.deletePost(postID)
           .subscribe((id) => expect(id).toEqual(postID));

    const req = httpTestingController.expectOne(routeCreator(`Posts/${postID}`));
    expect(req.request.method).toEqual('DELETE');
    req.flush(postID);
  });

  it('should catch an error thrown in a delete request', () => {
    const postID = 1;
    let error = new Error("Unitialized");

    service.deletePost(postID)
           .subscribe({next: (id) => console.log(id),
                       error: (err) => error = err});
    
    const req = httpTestingController.expectOne(routeCreator(`Posts/${postID}`));
    expect(req.request.method).toEqual('DELETE');
    req.flush(postID);
  });

  it('should get all the comments from a post', () => {
    const postID = 1;
    let comments:Array<ReceivedComment> = [{posterName : "user",
                                            timeString : "15 seconds ago", 
                                            content : "content", 
                                            userVote : 1, 
                                            voteTotal : -12, 
                                            commentID: 1, 
                                            childIDs: [2,3]}, 
                                            {posterName : "user2",
                                            timeString : "10 seconds ago", 
                                            content : "content 2",
                                            voteTotal : 10, 
                                            commentID: 4, 
                                            }];
    
    service.getComments(postID).subscribe((comments) => expect(comments).toEqual(comments));

    const req = httpTestingController.expectOne(routeCreator(`Posts/${postID}/Comments`));
    expect(req.request.method).toEqual('GET');
    req.flush(comments);

  });

  it('should catch an error when trying to get all comments from a post', () => {
    let response: Array<ReceivedComment>;
    let error: Error = new Error("uninialized");
    const postID:number = 1;

    service.getComments(postID).subscribe({next: res => {
                                                  response = res;
                                                }, 
                                  error: err =>{
                                                  error = err
                                                }
                                              });

    const req = httpTestingController.expectOne(routeCreator(`Posts/${postID}/Comments`));
    expect(req.request.method).toEqual('GET');
    req.flush(new HttpErrorResponse({}));

    expect(error).toEqual(new Error("Something went wrong"));
  });

  it('should post a vote', () => {
    let response: ReceivedPostVote = {
      value: 1,
      userID: 1,
      postID: 10
    }

    let sent: PostVoteRequest = {
      value: 1, 
      userID: 1,
      postID: 10
    }

    const postID = 10;

    service.postVote(sent).subscribe((res) => expect(res).toEqual(response));

    const req = httpTestingController.expectOne(routeCreator(`Posts/${postID}/Votes`));
    expect(req.request.method).toEqual('POST');
    req.flush(response);

  });

  it('should try to post a vote and catch an error', () => {

    let error = new Error("uninitialized");
    let sent: PostVoteRequest = {
      value: 1, 
      userID: 1,
      postID: 10
    }

    const postID = 10;

    service.postVote(sent).subscribe({next: (res) => console.log(res),
                                      error: (err) => error = err
                                     });

    const req = httpTestingController.expectOne(routeCreator(`Posts/${postID}/Votes`));
    expect(req.request.method).toEqual('POST');
    req.flush(new HttpErrorResponse({}));

    expect(error).toEqual(new Error("Something went wrong"));
  });

  it('should patch a vote', () => {
    let response: ReceivedPostVote = {
      value: 1,
      userID: 1,
      postID: 10
    }

    let sent: PostVoteRequest = {
      value: 1, 
      userID: 1,
      postID: 10
    }

    const postID = 10;

    service.patchVote(sent).subscribe((res) => expect(res).toEqual(response));

    const req = httpTestingController.expectOne(routeCreator(`Posts/${postID}/Votes`));
    expect(req.request.method).toEqual('PATCH');
    req.flush(response);
  });

  it('should catch an error in the patch request', () => {
    let error = new Error("uninitialized");
    let sent: PostVoteRequest = {
      value: 1, 
      userID: 1,
      postID: 10
    }

    const postID = 10;

    service.patchVote(sent).subscribe({
                                        next: (res) => console.log(res),
                                        error: (err) => {error = err}
                                      });
    
    const req = httpTestingController.expectOne(routeCreator(`Posts/${postID}/Votes`));
    expect(req.request.method).toEqual('PATCH');
    req.flush(new HttpErrorResponse({}));

    expect(error).toEqual(new Error("Something went wrong"));
  });

  it('should delete a vote', () => {
    let response: ReceivedPostVote = {
      value: 1,
      userID: 1,
      postID: 10
    }

    let sent: PostVoteRequest = {
      value: 1, 
      userID: 1,
      postID: 10
    }

    const postID = 10;

    service.deleteVote(sent).subscribe((res) => expect(res).toEqual(response));

    const req = httpTestingController.expectOne(routeCreator(`Posts/${postID}/Votes`));
    expect(req.request.method).toEqual('DELETE');
    req.flush(response);
  });

  it('should catch an error thrown in a delete a vote request', () => {
    let error = new Error("uninitialized");

    let sent: PostVoteRequest = {
      value: 1, 
      userID: 1,
      postID: 10
    }

    const postID = 10;

    service.deleteVote(sent).subscribe({
                                        next: (res) => console.log(res),
                                        error: (err) => {error = err}
                                      });

    const req = httpTestingController.expectOne(routeCreator(`Posts/${postID}/Votes`));
    expect(req.request.method).toEqual('DELETE');
    req.flush(new HttpErrorResponse({}));
  });

});
