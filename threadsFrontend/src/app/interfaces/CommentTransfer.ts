
import {ReceivedComment} from "./recievedObjects/ReceivedComment";

export interface CommentTransfer{
    commentData: ReceivedComment,
    postID: number
}