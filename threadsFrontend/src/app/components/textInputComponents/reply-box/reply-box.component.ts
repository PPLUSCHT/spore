import { Component, EventEmitter, Input,  OnInit, Output} from '@angular/core';
import { ReceivedComment } from 'src/app/interfaces/recievedObjects/ReceivedComment';
import { CommentRequest } from 'src/app/interfaces/requestObjects/CommentRequest';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';
import { CommentService } from 'src/app/services/comment/comment-service.service';
import { AbstractTextBoxComponent } from '../abstract-text-box/abstract-text-box.component';
import { PostDataStorageService } from 'src/app/services/post-data-storage/post-data-storage.service';
import { environment } from 'src/environments/environment';
import { Subject, debounceTime, exhaustMap } from 'rxjs';

@Component({
  selector: 'app-reply-box',
  templateUrl: './reply-box.component.html',
  styleUrls: ['./reply-box.component.css']
})
export class ReplyBoxComponent extends AbstractTextBoxComponent implements OnInit{

  @Input() commentID!: number;
  @Input() postID!: number;

  @Output() newComment = new EventEmitter<ReceivedComment>();

  currentText!: string;
  commentReply!:boolean;
  withinLength:boolean = true;
  submitTrigger = new Subject<CommentRequest>()
  MAX_LENGTH = environment.COMMENT_LENGTH;

  constructor(private service:PostDataStorageService, 
              private auth:AuthorizationService,
              private commentService: CommentService) {
    super()
  }

  override ngOnInit(): void {
      super.ngOnInit()
      this.commentReply = this.commentID != null
      this.currentText = ""
      this.formText.valueChanges
        .pipe(debounceTime(200))
        .subscribe((text) => 
        this.currentText = text
      )
      this.submitTrigger
          .pipe(exhaustMap((commentRequest) => 
          {
            if(this.commentID == null){
              return this.service.addComment(commentRequest)
            }
            else{
              return this.commentService.postComment(commentRequest)
            }
          }))
          .subscribe({
            next: (comment) => {this.outputommment(comment), this.closeDialog()},
            error: (err) => {alert(`Posting Comment Failed.${err}`)}
          })
  }

  override onSubmit(): void{
    this.updateLoading()
    if(!this.validateComment()){
      return
    }
    if (this.commentID == null){
      this.postResponse()
    }
    else{
      this.commentResponse()
    }
  }

  private postResponse(): void{
    let userID = this.auth.getUserID();
    let comment:CommentRequest = {
      userID: userID!,
      postID: this.postID,
      content: this.formText.value
    }
    this.submitTrigger.next(comment)
  }

  private commentResponse(): void{
    let userID = this.auth.getUserID();
    let comment:CommentRequest = {
      userID: userID!,
      postID: this.postID,
      parentCommentID: this.commentID,
      content: this.formText.value
    }

    this.submitTrigger.next(comment)
  }

  public updateLengthConstraint(b:boolean): void{
    this.withinLength = b
  }

  public outputommment(comment: ReceivedComment){
    this.newComment.emit(comment)
  }

  public closeDialog(){
    this.deleteDialog.emit()
  }

  private validateComment(): boolean{
    if(!this.withinLength){
      alert("Comment too long to post")
      return false
    }
    let userID = this.auth.getUserID();
    if (userID == null){
      alert("Something went wrong. Please log in again")
      return false;
    }
    if (this.formText.value == null){
      alert("Comment must have a body")
      return false;
    }
    return true;
  }

}
