import { UpvoteScore } from "../enums/UpvoteScore";
import { ReceivedComment } from "../interfaces/recievedObjects/ReceivedComment";
import { ReceivedPost } from "../interfaces/recievedObjects/ReceivedPost";

export const addZeroVoteComment = (comment:ReceivedComment) => {
    if(comment.userVote == null){
        comment.userVote = UpvoteScore.NoVote;
    }
    return comment;
}

export const addZeroVotePost = (post:ReceivedPost) => {
    if(post.userVote == null){
        post.userVote = UpvoteScore.NoVote;
    }
    return post;
}