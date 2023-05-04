import { Component, OnInit } from '@angular/core';
import { PostDataService } from 'src/app/services/post/post-data-service.service';
import { Router } from '@angular/router';
import { PostRequest } from 'src/app/interfaces/requestObjects/PostRequest';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit{

  form = new FormGroup({
    title: new FormControl("Title"),
    body: new FormControl("Body")
  })

  titleClicked = false
  bodyClicked = false

  currentTitle!: string;
  withinLengthTitle:boolean = true;
  MAX_LENGTH_TITLE = environment.TITLE_LENGTH;

  currentContent!: string;
  withinLengthContent:boolean = true;
  MAX_LENGTH_CONTENT = environment.POST_LENGTH;

  constructor(private service:PostDataService, private auth:AuthorizationService, private router:Router){
  }

  ngOnInit(): void {
    this.currentTitle = "Title"
    this.currentContent = "Body"
    this.form.controls.body.valueChanges
        .pipe(debounceTime(200))
        .subscribe((text) => 
          this.currentContent = text!
        )
    this.form.controls.title.valueChanges
        .pipe(debounceTime(200))
        .subscribe((text) => 
          this.currentTitle = text!
        )
  }
  
  public post(): void{
    if(!this.validatePost()){
      return
    }
    let postRequest: PostRequest = {
      userID: this.auth.getUserID()!,
      content: this.form.value.body!,
      title: this.form.value.title!
    }
    this.service.postPost(postRequest).subscribe({
      next: (post) => {this.router.navigateByUrl(`Posts/${post.postID}`)}
    })
  }

  public cancelButton(): void {
      this.router.navigateByUrl('')
  }

  public titleClick(): void{
    if(!this.titleClicked){
      this.titleClicked = true
      this.form.patchValue({title: ""})
    }
  }

  public bodyClick(): void{
    if(!this.bodyClicked){
      this.bodyClicked =  true
      this.form.patchValue({body: ""})
    }
  }

  public updateLengthConstraintTitle(b: boolean): void{
    this.withinLengthTitle = b
  }

  public updateLengthConstraintBody(b: boolean): void{
    this.withinLengthContent = b
  }

  private validatePost() : boolean{
    if(!this.auth.testLogin()){
      alert("Login expired. Please log back in to submit")
      return false
    }
    if(!this.withinLengthContent){
      alert("Content too long")
      return false
    }
    if(!this.withinLengthTitle){
      alert("Title too long")
      return false
    }
    return true
  }
}
