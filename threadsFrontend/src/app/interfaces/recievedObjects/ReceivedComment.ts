import { UpvoteScore } from "src/app/enums/UpvoteScore";

export interface ReceivedComment{
    posterName: string,
    timeString: string,
    content: string,
    userVote?: UpvoteScore,
    voteTotal: number,
    commentID: number,
    userID: number,
    childIDs?: Array<number>
}