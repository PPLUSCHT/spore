import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ReceivedComment } from '../interfaces/recievedObjects/ReceivedComment';
import { AuthorizationService } from '../services/auth/authorization.service';
import { ContentType } from '../enums/ContentType';
import { LoggedInCommentComponent } from '../components/commentComponents/logged-in-comment/logged-in-comment.component';
import { NotLoggedInCommentComponent } from '../components/commentComponents/not-logged-in-comment/not-logged-in-comment.component';
import { UserCommentComponent } from '../components/commentComponents/user-comment/user-comment.component';
import { CommentTransfer } from '../interfaces/CommentTransfer';

@Directive({
  selector: '[appCommentType]'
})
export class CommentTypeDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private authService: AuthorizationService) { }

  @Input() set appCommentType(commentData: ReceivedComment){
    switch(this.determineChildType(commentData)){
      case(ContentType.LoggedIn):
        let loggedRef = this.viewContainer.createComponent<LoggedInCommentComponent>(LoggedInCommentComponent)
        loggedRef.instance.commentData = commentData;
        break;
      case(ContentType.NotLoggedIn):
        let notLoggedRef = this.viewContainer.createComponent<NotLoggedInCommentComponent>(NotLoggedInCommentComponent)
        notLoggedRef.instance.commentData = commentData;
        break;
      case(ContentType.User):
        let userRef = this.viewContainer.createComponent<UserCommentComponent>(UserCommentComponent)
        userRef.instance.commentData = commentData;
    }
  }

  private determineChildType(comment: ReceivedComment): ContentType{
    let loggedIn:boolean = this.authService.testLogin();
    let userID:number|null = this.authService.getUserID();

    if(loggedIn && userID == comment.userID){
      return ContentType.User;
    }
    else if(loggedIn){
      return ContentType.LoggedIn;
    }
    return ContentType.NotLoggedIn;
  }
}
