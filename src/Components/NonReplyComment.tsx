import { useEffect, useState } from 'react';
import { getRepliesByCommentId } from '../api/getRepliesByCommentId';
import { Comment, Reply } from '../Types/CommentTypes';
import CommentCard from './CommentCard';
import ReplyCard from './ReplyCard';

const NonReplyComment = ({comment} : {comment: Comment}) => {
    const [replies, setReplies] = useState<Reply[]>();

    useEffect(() => {
        getRepliesByCommentId(comment.id).then(setReplies)
    },[])


    return (
        <div>
            <CommentCard comment={comment}/>
            {replies && replies.sort((a,b) => {return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()}).map(reply => {
                return(<ReplyCard reply={reply} />)
            })}
        </div>
    );
};

export default NonReplyComment;