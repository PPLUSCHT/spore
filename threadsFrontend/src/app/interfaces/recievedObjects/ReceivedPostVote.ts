import { UpvoteScore } from "src/app/enums/UpvoteScore";

export interface ReceivedPostVote{
    value: UpvoteScore,
    userID: number,
    postID: number
}