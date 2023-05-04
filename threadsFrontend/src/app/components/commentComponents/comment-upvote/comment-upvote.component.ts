import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpvoteScore } from 'src/app/enums/UpvoteScore';
import { CommentVoteRequest } from 'src/app/interfaces/requestObjects/CommentVoteRequest';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';
import { CommentService } from 'src/app/services/comment/comment-service.service';

@Component({
  selector: 'app-comment-upvote',
  templateUrl: './comment-upvote.component.html',
  styleUrls: ['./comment-upvote.component.css']
})
export class CommentUpvoteComponent implements OnInit {

  @Input() commentID!:number;

  @Input() vote!:UpvoteScore;
  @Output() voteChange = new EventEmitter<UpvoteScore>();

  @Input() voteTotal!: number;
  @Output() voteTotalChange = new EventEmitter<number>();

  public upvoteHighlight:boolean = false;
  public downvoteHighlight:boolean = false;

  constructor(private service: CommentService, private auth: AuthorizationService) { }

  ngOnInit(): void {
    if(this.vote == UpvoteScore.Upvote){
      this.upvoteHighlight = true
    }
    else if(this.vote == UpvoteScore.Downvote){
      this.downvoteHighlight = true
    }
  }

  public changeVote(previousVote:UpvoteScore , vote:UpvoteScore){
    
    this.vote = vote;
    this.voteChange.emit(this.vote);

    this.voteTotal += -1*previousVote + vote;
    this.voteTotalChange.emit(this.voteTotal);

    if(this.vote === UpvoteScore.Upvote){
      this.upvoteHighlight = true;
      this.downvoteHighlight = false;
    }
    else if(this.vote === UpvoteScore.Downvote){
      this.upvoteHighlight = false;
      this.downvoteHighlight = true;
    }
    else{
      this.downvoteHighlight = false;
      this.upvoteHighlight = false;
    }
  }

  public upvoteButton(): void{

    const commentVote:CommentVoteRequest = {
      value: UpvoteScore.Upvote,
      userID: this.auth.getUserID()!,
      commentID: this.commentID
    }

    if(this.vote === UpvoteScore.Upvote){
      this.service.deleteCommentVote(commentVote
      ).subscribe({
                    next: () => {this.changeVote(1,0)},
                    error: (err) => {console.error(err)}
                  })
    }

    else if(this.vote === UpvoteScore.Downvote){
      this.service.patchCommentVote(
        commentVote
      ).subscribe({
        next: (vote) => this.changeVote(-1, vote.value),
        error: (err) => {console.error(err)}
      })
    }

    else{
      this.service.postCommentVote(
        commentVote
      ).subscribe({
        next: (vote) => this.changeVote(0, vote.value),
        error: (err) => {console.error(err)}
      })
    }
  }

  public downvoteButton(): void{

    const commentVote:CommentVoteRequest = {
      value: UpvoteScore.Downvote,
      userID: this.auth.getUserID()!,
      commentID: this.commentID
    }

    if(this.vote === UpvoteScore.Downvote){
      this.service.deleteCommentVote(
        commentVote
      ).subscribe({
        next: () => this.changeVote(-1, 0),
        error: (err) => {console.error(err)}
      })
    }

    else if(this.vote === UpvoteScore.Upvote){
      this.service.patchCommentVote(
        commentVote
      ).subscribe({
        next: (vote) => this.changeVote(1, vote.value),
        error: (err) => {console.error(err)}
      })
    }

    else{
      this.service.postCommentVote(
       commentVote
      ).subscribe({
        next: (vote) => this.changeVote(0, vote.value),
        error: (err) => {console.error(err)}
      })
    }
  }

}
