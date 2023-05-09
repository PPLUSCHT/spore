import { Component } from '@angular/core';
import { LoggedInPostComponent } from '../logged-in-post/logged-in-post.component';
import { ReceivedPost } from 'src/app/interfaces/recievedObjects/ReceivedPost';
import { Subject, exhaustMap } from 'rxjs';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent extends LoggedInPostComponent {
  
  public editActive:boolean = false
  public deleteLoading:boolean = false
  deleteTrigger = new Subject<void>()

  override ngOnInit(): void {
    super.ngOnInit()
    this.deleteTrigger.pipe(
      exhaustMap(() => this.service.deletePost(this.postID))
    ).subscribe({
      next: () => this.router.navigateByUrl(''),
      error: (err) => {alert(err); this.deleteLoading = false}
    })
  }

  public editButton():void{
    this.editActive = !this.editActive
  }

  public updatePostData(post:ReceivedPost): void{
    this.postData.content = post.content
  }

  public deleteButton(): void{
    this.service.deletePost(this.postID)
                .subscribe(() => this.router.navigateByUrl(''))
  }

}
