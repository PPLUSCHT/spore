import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeletedCommentService {

  private commentID = new BehaviorSubject<number>(0)

  constructor() { }

  public updateID(id: number) : void{
    this.commentID.next(id)
    this.commentID.next(0)
  }

  public getDeletedID(): BehaviorSubject<number>{
    return this.commentID
  }
}
