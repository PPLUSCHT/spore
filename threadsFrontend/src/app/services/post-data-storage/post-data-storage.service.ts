import { Injectable } from '@angular/core';
import { ReceivedPost } from 'src/app/interfaces/recievedObjects/ReceivedPost';
import { PostDataService } from '../post/post-data-service.service';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { ReceivedComment } from 'src/app/interfaces/recievedObjects/ReceivedComment';
import { CommentService } from '../comment/comment-service.service';
import { CommentRequest } from 'src/app/interfaces/requestObjects/CommentRequest';

@Injectable({
  providedIn: 'root'
})
export class PostDataStorageService {
  
  private data!: ReceivedPost | null
  private id!: number | null
  private comments = new BehaviorSubject<Array<ReceivedComment>>([])
  private commentsLoaded:boolean

  constructor(private postDataService: PostDataService,
              private commentDataService: CommentService){
    this.commentsLoaded = false;
  }

  public setData(data:ReceivedPost): void{
    this.data = data
  }

  private setID(data: ReceivedPost): void{
    this.id = data.postID
  }

  public setComments(comments: Array<ReceivedComment>): void{
    this.comments.next(comments)
  }

  public getData(postID: number): Observable<ReceivedPost>{
    if (!this.data){
      return this.postDataService.getPost(postID).pipe(
        map((data) => {this.setData(data); this.setID(data); return data})
      )
    }
    else{
      return of(this.data!)
    }
  }

  public getComments(postID:number): BehaviorSubject<Array<ReceivedComment>>{
    if (!this.commentsLoaded){
        this.postDataService.getComments(postID).pipe(
        map((comments) => {this.setComments(comments); this.commentsLoaded = true})
      ).subscribe()
    }
    return this.comments
  }

  public addComment(comment: CommentRequest): Observable<ReceivedComment>{
    return this.commentDataService.postComment(comment)
        .pipe(map((c) => {
          this.setComments([...this.comments.getValue(), c])
          return c
        }))
  }

  public clearData(): void{
    this.data = null
    this.comments.next([])
    this.commentsLoaded = false
  }

  public getID(): Observable<number | null>{
    return of(this.id)
  }

}
