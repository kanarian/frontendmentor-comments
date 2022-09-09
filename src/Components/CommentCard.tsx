import React from 'react';
import { Comment } from '../Types/CommentTypes';

const CommentCard = ({comment, replyTo} : {comment: Comment, replyTo?: string}) => {
    return (
        <div className={`p-2 rounded-md border flex flex-col ${replyTo && 'ml-6'}`}>
            <div className=" flex flex-start items-center">
                <img className=" h-8" src={comment.user.image.png}/>
                {comment.user.username} - {comment.createdAt}
            </div>
            <div className={`py-2 text-grayishBlue`}>
                {replyTo && <span className=" text-modBlue font-semibold">@{replyTo} </span>}{comment.content}
            </div>
            <div>
                {comment.score}
            </div>
        </div>
    );
};

export default CommentCard;