import { Component } from '@angular/core';
import { CommentService } from 'src/app/services/comment/comment-service.service';
import { AbstractCommentComponent } from '../abstract-comment/abstract-comment.component';
import { ReceivedComment } from 'src/app/interfaces/recievedObjects/ReceivedComment';


@Component({
  selector: 'app-logged-in-comment',
  templateUrl: './logged-in-comment.component.html',
  providers: [CommentService],
  styleUrls: ['../user-comment/user-comment.component.css']
})
export class LoggedInCommentComponent extends AbstractCommentComponent{

  protected replyDialog: boolean = false

  public replyButton(){
    this.replyDialog = true
    this.expand = true
  }

  public cancelButton(){
    this.replyDialog = false
  }

  public addComment(comment:ReceivedComment){
    this.pushToSubject(comment)
    this.childrenExist = true
    this.commentData.childIDs?.push(comment.commentID)
    this.expand = true
  }
}