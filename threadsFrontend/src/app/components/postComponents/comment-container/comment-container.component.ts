import { AfterContentInit, Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentTransfer } from 'src/app/interfaces/CommentTransfer';
import { ReceivedComment } from 'src/app/interfaces/recievedObjects/ReceivedComment';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';
import { DeletedCommentService } from 'src/app/services/deletedComment/deleted-comment.service';
import { LayoutService } from 'src/app/services/layout/layout.service';
import { PostDataStorageService } from 'src/app/services/post-data-storage/post-data-storage.service';
import { PostDataService } from 'src/app/services/post/post-data-service.service';
@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements AfterContentInit {

  comments!:Array<ReceivedComment>
  postID!:number
  phone:boolean = false

  constructor(protected service:PostDataService, 
              protected auth: AuthorizationService, 
              protected postStorage:PostDataStorageService,
              protected deletedComment: DeletedCommentService,
              protected layout: LayoutService,
              activeRoute: ActivatedRoute
              ) { 
    activeRoute.url.subscribe((l) => this.postID = parseInt(l[l.length - 1].toString()))
    this.phone = this.layout.getPhoneState() 
  }
  
  ngAfterContentInit(): void {
    this.postStorage.getComments(this.postID)
                .subscribe({
                  next: (comments) => {
                    this.comments = comments;
                  }
                })
    this.deletedComment.getDeletedID().subscribe((id) => this.removeComment(id))  
  }

  public createDTO(comment:ReceivedComment): CommentTransfer{
    return {commentData: comment, postID: this.postID}
  } 
  
  public removeComment(id: number):void {
    this.comments = this.comments.filter((comment) => comment.commentID !== id)
    this.postStorage.setComments(this.comments)
  }

}
