import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ReceivedComment } from 'src/app/interfaces/recievedObjects/ReceivedComment';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';
import { CommentService } from 'src/app/services/comment/comment-service.service';
import { PostDataStorageService } from 'src/app/services/post-data-storage/post-data-storage.service';
import { BehaviorSubject, first } from 'rxjs';
import { Router} from '@angular/router';
import { DeletedCommentService } from 'src/app/services/deletedComment/deleted-comment.service';

@Component({
  selector: 'app-abstract-comment',
  templateUrl: './abstract-comment.component.html',
  styleUrls: ['../user-comment/user-comment.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AbstractCommentComponent implements OnInit{

  @Input() commentData!: ReceivedComment;
  @Input() postID!: number | null;

  childComments:Array<ReceivedComment> = []
  childCommentSubject = new BehaviorSubject<Array<ReceivedComment>>([])
  expand: boolean = false;
  childrenLoaded: boolean = false;
  childrenExist:boolean = false;
  childrenCount:number = 0;
  deleted!:boolean

  constructor(
              protected service:CommentService,
              protected authService: AuthorizationService,
              protected postDataStorage: PostDataStorageService,
              protected deletedComment: DeletedCommentService
              )
  { 
  }

  ngOnInit(): void {
    if(this.commentData.userID == 0){
      this.deleted = true
    }
    else{
      this.deleted = false
    }
    this.postDataStorage.getID().subscribe((id) => this.postID = id)
    this.childCommentSubject.subscribe((comments) => {
        this.childComments = comments;
        this.updateChildrenExist();  
    })
    this.deletedComment.getDeletedID().subscribe((id) => this.removeComment(id))
    this.getChildren()  
  }

  protected getChildren(): void {
    this.service.getChildren(this.commentData.commentID)
                .subscribe({
                  next: (comments) => {
                                          this.updateSubject(comments);
                                          this.childrenLoaded = true
                                      },
                  error: (error) => {console.error(error); alert(error)}
                })
  }

  public expandButton(): void{
    if (!this.childrenLoaded){
      this.getChildren()
    }
    this.expand = !this.expand
  }

  public removeComment(id: number): void {
    this.childComments = this.childComments.filter((comment) => comment.commentID !== id)
  }

  protected updateSubject(comments: Array<ReceivedComment>): void{
    this.childCommentSubject.next(comments)
  }

  protected pushToSubject(comment: ReceivedComment): void{
    let comments:Array<ReceivedComment> = this.childCommentSubject.value
    comments.push(comment)
    this.updateSubject(comments)
  }

  protected updateChildrenExist(): void{
    this.childrenExist = this.childCommentSubject.value.length > 0 ? true : false
    this.childrenCount = this.childCommentSubject.value.length
  }

}
