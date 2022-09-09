import React from 'react';
import { Comment } from '../Types/CommentTypes';
import CommentCard from './CommentCard';
import ReplyCard from './ReplyCard';

const NonReplyComment = ({comment} : {comment: Comment}) => {
    return (
        <div>
            <CommentCard comment={comment}/>
            {comment.replies.map(reply => {
                return(<ReplyCard reply={reply} />)
            })}
        </div>
    );
};

export default NonReplyComment;