import { Component} from '@angular/core';
import { LoggedInCommentComponent } from '../logged-in-comment/logged-in-comment.component';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})

export class UserCommentComponent extends LoggedInCommentComponent{
  
  editMode:boolean = false;

  public updateContent(content: string){
    this.commentData.content = content
    this.closeEdit()
  }

  public deleteCommentButton(){
    this.service.deleteComment(this.commentData.commentID)
                .subscribe({
                  next: (id) => 
                                {
                                  if(this.childrenExist){
                                    this.commentData.userID = 0
                                    this.commentData.content = "deleted"
                                    this.commentData.posterName = "deleted"
                                    this.deleted = true
                                  }
                                  else{
                                    this.deletedComment.updateID(id)
                                  }
                                },
                  error: (err) => {alert(`Something went wrong: ${err}`)}
                })
  }

  public editButton(){
    this.editMode = true;
  }

  public closeEdit(){
    this.editMode = false;
  }
}
