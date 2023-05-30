import { Component, Input, OnInit} from '@angular/core';
import { AbstractTextBoxComponent } from '../abstract-text-box/abstract-text-box.component';
import { PostDataService } from 'src/app/services/post/post-data-service.service';
import { PostRequest } from 'src/app/interfaces/requestObjects/PostRequest';
import { ReceivedPost } from 'src/app/interfaces/recievedObjects/ReceivedPost';
import { PostDataStorageService } from 'src/app/services/post-data-storage/post-data-storage.service';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';
import { environment } from 'src/environments/environment';
import { Subject, debounceTime, exhaustMap } from 'rxjs';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent extends AbstractTextBoxComponent implements OnInit {
  
  @Input() postData!:ReceivedPost

  currentText!: string;
  withinLength:boolean = true;
  submitTrigger = new Subject<PostRequest>()

  MAX_LENGTH = environment.POST_LENGTH;

  constructor(private service: PostDataService, 
              private postDataStorage: PostDataStorageService,
              private auth: AuthorizationService,
              layout: LayoutService)
  {
    super(layout)
  }

  override ngOnInit() : void {
      super.ngOnInit()
      this.currentText = this.formText.value
      this.formText.valueChanges
          .pipe(debounceTime(200))
          .subscribe((text) => this.currentText = text)
      this.submitTrigger
          .pipe(exhaustMap((postRequest) => this.service.patchPost(postRequest, this.postData.postID)))
          .subscribe({
            next: (rec) => {this.updateView(rec)},
            error: (err) => {alert(`Something went wrong with updating the post: ${err}`)}
          })
  }

  private updateView(text:string): void{
    this.updateLoading()
    this.postData.content = text
    this.postDataStorage.setData(this.postData)
    this.deleteDialog.emit()
  }

  public updateLengthConstraint(b:boolean) : void{
    this.withinLength = b
  } 

  override onSubmit() : void{
    
    if(!this.validateEdit()){
      return
    }

    let post:PostRequest = {
      userID: this.postData.userID,
      content: this.formText.value,
      title: this.postData.title
    }
    
    this.submitTrigger.next(post)
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
