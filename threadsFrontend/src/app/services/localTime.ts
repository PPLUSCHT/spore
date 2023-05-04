import { ReceivedComment } from "../interfaces/recievedObjects/ReceivedComment";
import { ReceivedPost } from "../interfaces/recievedObjects/ReceivedPost";

export const convertCommentTime = (comment: ReceivedComment): ReceivedComment => {
    let time = new Date(comment.timeString + " UTC")
    comment.timeString = time.toLocaleString()
    return comment
}

export const convertPostTime = (post: ReceivedPost): ReceivedPost => {
    let time = new Date(post.timeString + " UTC")
    post.timeString = time.toLocaleString()
    return post
}