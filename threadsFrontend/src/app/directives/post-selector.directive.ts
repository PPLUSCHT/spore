import { Directive, Input, ViewContainerRef } from '@angular/core';
import { AuthorizationService } from '../services/auth/authorization.service';
import { ReceivedPost } from '../interfaces/recievedObjects/ReceivedPost';
import { ContentType } from '../enums/ContentType';
import { LoggedInPostComponent } from '../components/postComponents/logged-in-post/logged-in-post.component';
import { NotLoggedInPostComponent } from '../components/postComponents/not-logged-in-post/not-logged-in-post.component';
import { UserPostComponent } from '../components/postComponents/user-post/user-post.component';

@Directive({
  selector: '[appPostSelector]'
})
export class PostSelectorDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private authService: AuthorizationService
  ) { }
 
  @Input() set appPostSelector(postData: ReceivedPost){
    this.viewContainer.clear()
    switch(this.determineChildType(postData)){
      case(ContentType.LoggedIn):
        let loggedRef = this.viewContainer.createComponent<LoggedInPostComponent>(LoggedInPostComponent)
        loggedRef.instance.postData = postData;
        break;
      case(ContentType.NotLoggedIn):
        let notLoggedRef = this.viewContainer.createComponent<NotLoggedInPostComponent>(NotLoggedInPostComponent)
        notLoggedRef.instance.postData = postData;
        break;
      case(ContentType.User):
        let userRef = this.viewContainer.createComponent<UserPostComponent>(UserPostComponent)
        userRef.instance.postData = postData;
        break;
    }
  }

  private determineChildType(post: ReceivedPost): ContentType{
    let loggedIn:boolean = this.authService.testLogin();
    let userID:number|null = this.authService.getUserID();

    if(loggedIn && userID == post.userID){
      return ContentType.User;
    }
    else if(loggedIn){
      return ContentType.LoggedIn;
    }
    return ContentType.NotLoggedIn;
  }

}
