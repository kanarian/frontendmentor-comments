import React, { useState } from 'react';
import { Comment, User } from '../Types/CommentTypes';

const AddComment = ({currentUser}:{currentUser: User}) => {
    const [commentText, setCommentText] = useState("")

    const makeComment  = (user_id: number, content: string) => {
        fetch("/api/comment/add", {
            method:"POST",
            body:JSON.stringify({
                user_id: user_id,
                content: content,
            })
        })
    }

    const handleCommentSubmition = () => {
        if(commentText){
            makeComment(currentUser.id, commentText)
            setCommentText("")
        }
    }


    return (
        <div className=" bg-white rounded-md shadow-lg my-4 p-6">
            <form action="javascript:void(0);" onSubmit={() => handleCommentSubmition()}>
                <textarea name="comment" className=" resize-none border p-4 placeholder:text-grayishBlue rounded-md w-full h-20" placeholder="Add a comment..." onChange={(e) => setCommentText(e.target.value)} value={commentText}/>
                <div className=" flex justify-between items-center pt-4">
                    <img className=" h-8" src={currentUser['image-png']}/>
                    <button className={` transition-colors ease-in-out duration-300 ${commentText ? "bg-modBlue" : "bg-gray-400 cursor-auto"} text-white rounded-md px-6 py-2 `}>SEND</button>
                </div>
            </form>
        </div>
    );
};

export default AddComment;