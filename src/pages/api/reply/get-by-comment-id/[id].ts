import type { NextApiRequest, NextApiResponse } from 'next'
import { Reply } from '../../../../Types/CommentTypes'
import { supabase } from '../../../../util/supabaseClient'
  

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id : commentId } = req.query
    if(!commentId){
        res.status(404).json("Comment ID param not found")
        return
    }
    if(Array.isArray(commentId)){
        res.status(404).json("Comment ID should contain a single param")
        return
    }
    const commentIdInt = parseInt(commentId)

    const {data: repliesWithCommentId, error, status} = await supabase
        .from<Reply>("Reply")
        .select(`*, replying_to(username), user_id(id, username, image-png)`).eq('comment_id', commentIdInt)
    if(error){res.status(500).send(""); return}
    res.status(200).json(repliesWithCommentId)
}
