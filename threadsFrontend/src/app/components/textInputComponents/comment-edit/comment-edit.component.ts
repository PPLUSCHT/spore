import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractTextBoxComponent } from '../abstract-text-box/abstract-text-box.component';
import { CommentService } from 'src/app/services/comment/comment-service.service';
import { ReceivedComment } from 'src/app/interfaces/recievedObjects/ReceivedComment';
import { CommentRequest } from 'src/app/interfaces/requestObjects/CommentRequest';
import { PostDataStorageService } from 'src/app/services/post-data-storage/post-data-storage.service';
import { environment } from 'src/environments/environment';
import { Subject, debounceTime, exhaustMap } from 'rxjs';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent extends AbstractTextBoxComponent implements OnInit {

  @Input() commentData!:ReceivedComment;
  @Output() commentDataChange = new EventEmitter<ReceivedComment>();

  postID!:number

  currentText!: string;
  withinLength:boolean = true;
  MAX_LENGTH = environment.COMMENT_LENGTH;

  submitTrigger = new Subject<CommentRequest>();

  constructor(private service:CommentService, 
              postDataStorage: PostDataStorageService,
              private auth: AuthorizationService){
    super()
    postDataStorage.getID().subscribe((id) => this.postID = id!)
  }

  override ngOnInit() : void {
    super.ngOnInit()
    this.currentText = this.formText.value
    this.formText.valueChanges
        .pipe(debounceTime(200))
        .subscribe((text) => this.currentText = text)
    this.submitTrigger.pipe(
        exhaustMap((commentRequest) => this.service.patchComment(commentRequest, this.commentData.commentID))
    ).subscribe((str) => this.updateView(str))
}


  private updateView(text:string){
    this.updateLoading()
    this.commentData.content = text
    this.commentDataChange.emit(this.commentData)
    this.deleteDialog.emit()
  }

  public override onSubmit(){
    super.onSubmit()
    if(!this.validateEdit()){
      return
    }

    let comment:CommentRequest = {
      userID: this.commentData.userID,
      postID: this.postID,
      content: this.formText.value
    }

    this.submitTrigger.next(comment)
  }

  public updateLengthConstraint(b:boolean) : void{
    this.withinLength = b
  } 

  public validateEdit() : boolean{
    if(!this.withinLength){
      alert("Post too long to post")
      return false
    }
    let userID = this.auth.getUserID();
    if (userID == null){
      alert("Something went wrong. Please log in again")
      return false
    }
    return true
  }
}
