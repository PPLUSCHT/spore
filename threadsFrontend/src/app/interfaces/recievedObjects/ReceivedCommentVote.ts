import { UpvoteScore } from "src/app/enums/UpvoteScore";

export interface ReceivedCommentVote{
    value: UpvoteScore,
    userID: number,
    commentID: number
}