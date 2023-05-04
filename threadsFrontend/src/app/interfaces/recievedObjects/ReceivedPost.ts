import { UpvoteScore } from "src/app/enums/UpvoteScore";

export interface ReceivedPost{
    posterName: string,
    timeString: string,
    content: string,
    title: string,
    userVote?: UpvoteScore,
    voteTotal: number,
    postID: number,
    userID: number
}