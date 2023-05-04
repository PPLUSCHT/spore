import { Component, OnInit } from '@angular/core';
import { AbstractPostBodyComponent } from '../abstract-post-body/abstract-post-body.component';
import { UpvoteScore } from 'src/app/enums/UpvoteScore';

@Component({
  selector: 'app-logged-in-post',
  templateUrl: './logged-in-post.component.html',
  styleUrls: ['../user-post/user-post.component.css']
})
export class LoggedInPostComponent extends AbstractPostBodyComponent implements OnInit{
  
  public upvoteHighlight:boolean = false;
  public downvoteHighlight:boolean = false;
  public replyOpen:boolean = false;

  override ngOnInit() {
      super.ngOnInit()
      if(this.postData.userVote == UpvoteScore.Upvote){
        this.upvoteHighlight = true
      }
      else if(this.postData.userVote == UpvoteScore.Downvote){
        this.downvoteHighlight = true
      }
  }

  public replyButton(): void{
    this.replyOpen = !this.replyOpen
  }
  
  public changeVote(previousVote:UpvoteScore , vote:UpvoteScore): void{
    
    this.postData.userVote = vote;

    this.postData.voteTotal += -1*previousVote + vote;

    if(vote === UpvoteScore.Upvote){
      this.upvoteHighlight = true;
      this.downvoteHighlight = false;
    }
    else if(vote === UpvoteScore.Downvote){
      this.upvoteHighlight = false;
      this.downvoteHighlight = true;
    }
    else{
      this.downvoteHighlight = false;
      this.upvoteHighlight = false;
    }
  }

  public downvoteButton(): void{

    if(this.postData.userVote === UpvoteScore.Downvote){
      this.service.deleteVote(
        {value: UpvoteScore.Downvote,
        userID: this.auth.getUserID()!,
        postID: this.postData.postID}
      ).subscribe({
        next: () => this.changeVote(-1, 0),
        error: (err) => {console.error(err)}
      })
    }

    else if(this.postData.userVote === UpvoteScore.Upvote){
      this.service.patchVote(
        {value: UpvoteScore.Downvote,
          userID: this.auth.getUserID()!,
          postID: this.postData.postID}
      ).subscribe({
        next: (vote) => this.changeVote(1, vote.value),
        error: (err) => {console.error(err)}
      })
    }

    else{
      this.service.postVote(
        {value: UpvoteScore.Downvote,
          userID: this.auth.getUserID()!,
          postID: this.postData.postID}
      ).subscribe({
        next: (vote) => this.changeVote(0, vote.value),
        error: (err) => {console.error(err)}
      })
    }
  }

  public upvoteButton(): void{
    if(this.postData.userVote === UpvoteScore.Upvote){
      this.service.deleteVote(
        {value: UpvoteScore.Upvote,
        userID: this.auth.getUserID()!,
        postID: this.postData.postID}
      ).subscribe({
        next: () => this.changeVote(1, 0),
        error: (err) => {console.error(err)}
      })
    }

    else if(this.postData.userVote === UpvoteScore.Downvote){
      this.service.patchVote(
        {value: UpvoteScore.Upvote,
          userID: this.auth.getUserID()!,
          postID: this.postData.postID}
      ).subscribe({
        next: (vote) => this.changeVote(-1, vote.value),
        error: (err) => {console.error(err)}
      })
    }

    else{
      this.service.postVote(
        {value: UpvoteScore.Upvote,
          userID: this.auth.getUserID()!,
          postID: this.postData.postID}
      ).subscribe({
        next: (vote) => this.changeVote(0, vote.value),
        error: (err) => {console.error(err)}
      })
    }
  }
}
