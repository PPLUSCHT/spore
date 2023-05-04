import { UpvoteScore } from "src/app/enums/UpvoteScore";

export interface PostVoteRequest{
    value: UpvoteScore,
    userID: number,
    postID: number
}