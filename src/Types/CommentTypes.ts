export type User = {
    id:number
    'image-png':string,
    'image-webp':string,
    username: string,
}

export type Reply = {
    id: number,
    created_at: Date,
    content: string,
    replying_to: {
        id: number,
        username: string,
    },
    score: number
    user_id: {
        id: number
        'image-png': string
        username: string
    },
    comment_id: number
}

export type Comment = {
    id: number,
    content: string,
    created_at: Date,
    score: number,
    user_id: {
        id: number
        'image-png': string
        username: string
    },
}