import React from 'react';
import { Comment } from '../Types/CommentTypes';

const CommentCard = ({comment, replyTo} : {comment: Comment, replyTo?: string}) => {
    return (
        <div className={`p-2 rounded-md border flex flex-col ${replyTo && 'ml-6'} bg-white`}>
            <div className=" flex flex-start items-center">
                <img className=" h-8" src={comment.user.image.png}/>
                <div className='mx-3 font-medium'>{comment.user.username}</div> 
                <div className="text-grayishBlue">
                {comment.createdAt}
                </div>
            </div>
            <div className={`py-2 text-grayishBlue`}>
                {replyTo && <span className=" text-modBlue font-semibold">@{replyTo} </span>}{comment.content}
            </div>
            <div className=' flex justify-between'>
                <div className=" bg-veryLightGray flex justify-between w-20 py-1 rounded-md ">
                    <div className=" text-grayishBlue pl-2">+</div>
                    <div className="px-4 font-regular text-modBlue">{comment.score}</div>
                    <div className=" text-grayishBlue pr-2">-</div>
                </div>
                <div className=' text-modBlue'>
                    {"<- Reply"}
                </div>
            </div>
        </div>
    );
};

export default CommentCard;