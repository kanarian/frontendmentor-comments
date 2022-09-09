export type User = {
    image:{
        png:string,
        webp:string,
    },
    username: string,
}

export type Reply = {
    id: number,
    createdAt: string,
    content: string,
    replyingTo: string,
    score: number
    user: User
}

export type Comment = {
    id: number,
    content: string,
    createdAt: string,
    replies: Reply[],
    score: number,
    user: User,
}

export type CommentView = {
    currentUser: User,
    comments: Comment[],
}