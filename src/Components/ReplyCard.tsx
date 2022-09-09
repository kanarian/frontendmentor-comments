import React from 'react';
import { Reply, Comment } from '../Types/CommentTypes';
import CommentCard from './CommentCard';

const ReplyCard = ({reply} : {reply: Reply}) => {

    const replyAsCommnent = {...reply, replies: []} as Comment


    return (
        <div>
            <CommentCard comment={replyAsCommnent} replyTo={reply.replyingTo}/>
        </div>
    );
};

export default ReplyCard;