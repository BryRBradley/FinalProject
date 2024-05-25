export class Comment {

    id: number;
    userId: number;
    postId: number;
    inReplyToId: number;
    message: string;
    createdAt: string;
    updatedAt: string;

    constructor(
        id = 0,
        postId = 0,
        userId = 0,
        inReplyToId = 0,
        message = '',
        createdAt = '',
        updatedAt = ''

    ) {
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.message = message;
        this.userId = userId;
        this.postId = postId;
        this.inReplyToId = inReplyToId;

    }






}
