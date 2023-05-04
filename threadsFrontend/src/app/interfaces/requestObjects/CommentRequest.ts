export interface CommentRequest{
    userID: number,
    postID: number,
    parentCommentID?: number, 
    content: string
}