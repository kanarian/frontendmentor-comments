import { Reply, Comment } from '../Types/CommentTypes';
import CommentCard from './CommentCard';

const ReplyCard = ({reply} : {reply: Reply}) => {
    const replyAsCommnent = {...reply} as Comment
    return (
        <div>
            <CommentCard comment={replyAsCommnent} replyTo={reply.replying_to.username}/>
        </div>
    );
};

export default ReplyCard;