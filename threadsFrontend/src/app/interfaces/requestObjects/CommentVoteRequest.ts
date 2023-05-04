import { UpvoteScore } from "src/app/enums/UpvoteScore";

export interface CommentVoteRequest{
    value: UpvoteScore,
    userID: number,
    commentID: number
}