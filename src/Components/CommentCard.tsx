import { useEffect, useState } from 'react';
import { getUserById } from '../api/getUserById';
import { User } from '../Types/CommentTypes'
import { Comment } from '../Types/CommentTypes';
import { timeFormatter } from '../util/timeFormatter';

const CommentCard = ({comment, replyTo} : {comment: Comment, replyTo?: string}) => {
    return (
        <div className={`p-4 rounded-md border flex flex-col ${replyTo && 'ml-6'} bg-white`}>
            <div className=" flex flex-start items-center">
                <img className=" h-8" src={comment.user_id['image-png']}/>
                <div className='mx-3 font-medium'>{comment.user_id.username}</div> 
                <div className="text-grayishBlue">
                {timeFormatter(new Date(comment.created_at))}
                </div>
            </div>
            <div className={`py-2 text-grayishBlue`}>
                {replyTo && <span className=" text-modBlue font-semibold">@{replyTo} </span>}{comment.content}
            </div>
            <div className=' flex justify-between'>
                <div className=" bg-veryLightGray flex justify-between w-20 py-1 rounded-md">
                    <button className=" text-grayishBlue pl-2 hover:opacity-80 opacity-20 transition-opacity ease-in-out duration-200">+</button>
                    <div className="px-4 font-regular text-modBlue">{comment.score}</div>
                    <button className=" text-grayishBlue pr-2 hover:opacity-80 opacity-20 transition-opacity ease-in-out duration-200">-</button>
                </div>
                <button className=' transition-opacity ease-in-out duration-200 hover:opacity-100 opacity-50 text-modBlue'>
                    {"<- Reply"}
                </button>
            </div>
        </div>
    );
};

export default CommentCard;